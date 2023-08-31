import http from 'http';
import https from 'https';
import fetch from 'node-fetch';
import path from 'path';
import converter from 'swagger2openapi';
import getDoc4OpenAPI from './getDoc4OpenAPI';
import genFileFromTemplate from './genFileFromTemplate';
import { mkdir } from './utils';

interface ConfigOptions {
  templateDir?: string;
  outputPath?: string;
  prefix: string;
  ignore?: string[];
  pathReg?: String;
  dir?: string; // 存放生成的api文件的目录
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
      console.log('💺 将 Swagger 转化为 openAPI');
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
      // 判断json是否为openAPI格式
      if (!json.openapi) {
        throw new Error("文档路径不符合openAPI格式");
      }
      console.log(`${schemaPath}解析成功`);
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

const getOpenAPIConfig = async (schemaPath: string) => {
  const schema = await getSchema(schemaPath);
  if (!schema) {
    return null;
  }
  const openAPI = await converterSwaggerToOpenApi(schema);
  return openAPI;
};
/**
 * 根据提供的 schema 和配置生成服务文件。
 *
 * @param {string} schemaPath - schema 的路径。
 * @param {ConfigOptions} config - 配置选项。
 * @param {string} config.templateDir - 模板目录的路径。
 * @param {string} config.outputPath - 输出目录的路径。
 * @param {string} config.prefix - api 的前缀。
 * @param {string} config.pathReg - 对路径进行正则判断，不符合的路径不生成。
 * @param {string[]} config.ignore - 忽略的路径列表。
 * @param {string} config.dir - 生成的 api 文件的目录。
 * @param {'ts' | 'js'} config.mode - 生成文件的模式（'ts' 或 'js'）。
 * @returns {Promise<void>} - 返回一个 Promise，当所有操作完成时 resolve。
 * @example
 * // generateService 的使用示例
 * generateService('schemaPath', {
 *   templateDir: 'path/to/template',
 *   outputPath: 'path/to/output',
 *   prefix: 'api',
 *   ignore: ['ignore1', 'ignore2'],
 *   dir: 'api',
 *   mode: 'ts'
 * });
 */
export const generateService = async (schemaPath: string, config: ConfigOptions) => {

  const { templateDir, outputDir } = Object.assign({
    templateDir: path.join(__dirname, `../template/${config.mode}`),
    outputDir: path.join(process.cwd(), `./src/${config.dir || 'api'}/${config.prefix}`),
  }, config)

  const openAPI = await getOpenAPIConfig(schemaPath);
  if (!openAPI) {
    return;
  }
  const { doc, entities } = getDoc4OpenAPI(openAPI, { prefix: config.prefix, ignore: config.ignore || [], pathReg: config.pathReg });

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