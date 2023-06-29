import http from 'http';
import https from 'https';
import fetch from 'node-fetch';
import path from 'path';
import converter from 'swagger2openapi';
import Log from './log';
import getDoc4OpenAPI from './getDoc4OpenAPI';
import genFileFromTemplate from './genFileFromTemplate';
import { mkdir } from './utils';

interface ConfigOptions {
  templateDir?: string;
  outputPath?: string;
  prefix: string;
  ignore?: string[];
  mode: 'ts' | 'js';
}

// interface DocConfig {
//   prefix: string;
//   schema: string;
//   ignore: string[];
// }

const converterSwaggerToOpenApi = (swagger: any) => {
  if (!swagger.swagger) {
    return swagger;
  }
  return new Promise((resolve, reject) => {
    converter.convertObj(swagger, {}, (err, options) => {
      Log(['💺 将 Swagger 转化为 openAPI']);
      if (err) {
        reject(err);
        return;
      }
      resolve(options.openapi);
    });
  });
};

const getSchema = async (schemaPath: string) => {
  if (schemaPath.startsWith('http')) {
    const protocol = schemaPath.startsWith('https:') ? https : http;
    try {
      const agent = new protocol.Agent({
        rejectUnauthorized: false,
      });
      const json = await fetch(schemaPath, { agent }).then((rest) => rest.json());
      return json;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('fetch openapi error:', error);
    }
    return null;
  }
  const schema = require(schemaPath);
  return schema;
};
/**
 * 根据 schemaPath 获取 openAPI 配置对象
 * @param schemaPath 
 * @returns 
 */
const getOpenAPIConfig = async (schemaPath: string) => {
  const schema = await getSchema(schemaPath);
  if (!schema) {
    return null;
  }
  const openAPI = await converterSwaggerToOpenApi(schema);
  return openAPI;
};

export const generateService = async (schemaPath: string, config: ConfigOptions) => {

  const { templateDir, outputDir } = Object.assign({
    templateDir: path.join(__dirname, `../template/${config.mode}`),
    outputDir: path.join(process.cwd(), `./src/api/${config.prefix}`),
  }, config)

  const openAPI = await getOpenAPIConfig(schemaPath);
  if (!openAPI) {
    return;
  }
  const { doc, entities } = getDoc4OpenAPI(openAPI, { prefix: config.prefix, ignore: config.ignore || [] });

  // 生成文件夹
  mkdir(outputDir);
  
  const apiTemplate = path.join(templateDir, "api.art");
  const outputFile = path.join(outputDir, `index.${config.mode}`);

  // 使用doc对象接口文件
  genFileFromTemplate(apiTemplate, {
    paths: doc.groups.reduce((result, cur) => {
      return result.concat(cur.paths.map(path => {
        // 提取params
        path.params = (path.path.match(/\{(\w+)\}/g) || []).map((str) =>
          str.replace(/\{|\}/g, "")
        );
        // 将{}转化为${}
        path.path = `/${doc.prefix}${path.path.replace(/\{/g, "${")}`;
        return path;
      }))
    }, [])
  }, outputFile)
  // 生成类型文件
  const interfaceTemplate = path.join(templateDir, "interface.art");
  const interfaceOutputFile = path.join(outputDir, `typings.d.ts`);
  genFileFromTemplate(interfaceTemplate, {
    entities
  }, interfaceOutputFile);
  // 使用doc对象生成类型文件
}