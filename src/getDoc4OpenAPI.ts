import type { OpenAPIObject, SchemaObject, OperationObject, RequestBodyObject, ReferenceObject, ResponsesObject, ParameterObject } from 'openapi3-ts/oas30';

import { getRefName, get } from './utils';

interface DocAPI {
  title: string;
  path: string;
  prefix: string;
  groups: DocGroup[]
}

interface DocGroup {
  name: string;
  desc: string;
  paths: DocPathItemObject[],
}

interface DocPathItemObject {
  method: string;
  path: string;
  summary: string;
  operationId: string;
  // 路径参数对象
  pathParams: any;
  // 查询参数对象
  queryParams: any;
  // 请求体对象
  body: any;
  // 响应体对象
  responses: any;
  // 从响应体对象获取的结果对象
  result: any;
  params?: string[];
}

interface Entity {
  name: string;
  type: string;
  required: boolean;
  description: string;
  properties?: Entity[];
}

function isSchemaObject(obj: unknown): obj is SchemaObject {
  return (obj as SchemaObject).type !== undefined;
}

function isRequestBodyObject(obj: unknown): obj is RequestBodyObject {
  return (obj as RequestBodyObject).content !== undefined;
}

function isReferenceObject(obj: unknown): obj is ReferenceObject {
  return (obj as ReferenceObject).$ref !== undefined;
}

const getType = (schemaObject: SchemaObject | ReferenceObject | undefined): string => {
  if (schemaObject === undefined || schemaObject === null) {
    return 'any';
  }
  if (typeof schemaObject !== 'object') {
    return schemaObject;
  }
  if (isReferenceObject(schemaObject)) {
    return getRefName(schemaObject.$ref);
  }

  let type: string = schemaObject.type as string;

  const numberEnum = [
    'int64',
    'integer',
    'long',
    'float',
    'double',
    'number',
    'int',
    'float',
    'double',
    'int32',
    'int64',
  ];

  const dateEnum = ['Date', 'date', 'dateTime', 'date-time', 'datetime'];

  const stringEnum = ['string', 'email', 'password', 'url', 'byte', 'binary'];

  if (numberEnum.includes(schemaObject.format)) {
    type = 'number';
  }

  if (schemaObject.enum) {
    type = 'enum';
  }

  if (numberEnum.includes(type)) {
    return 'number';
  }

  if (dateEnum.includes(type)) {
    return 'Date';
  }

  if (stringEnum.includes(type)) {
    return 'string';
  }

  if (schemaObject.type === 'boolean') {
    return 'boolean';
  }

  if (schemaObject.type === 'array') {
    const arrayType = getType(schemaObject.items);
    return arrayType.includes(' | ') ? `(${arrayType})[]` : `${arrayType}[]`;
  }
  // 暂时不考虑enum
  // if (type === 'enum') {
  //   return Array.isArray(schemaObject.enum)
  //     ? Array.from(
  //       new Set(
  //         schemaObject.enum.map((v) =>
  //           typeof v === 'string' ? `"${v.replace(/"/g, '"')}"` : getType(v),
  //         ),
  //       ),
  //     ).join(' | ')
  //     : 'string';
  // }

  if (schemaObject.oneOf && schemaObject.oneOf.length) {
    return schemaObject.oneOf.map((item) => getType(item)).join(' | ');
  }
  if (schemaObject.allOf && schemaObject.allOf.length) {
    return `(${schemaObject.allOf.map((item) => getType(item)).join(' & ')})`;
  }
  if (schemaObject.type === 'object' || schemaObject.properties) {
    if (!Object.keys(schemaObject.properties || {}).length) {
      return 'Record<string, any>';
    }
    return `{ ${Object.keys(schemaObject.properties)
      .map((key) => {
        const required =
          'required' in (schemaObject.properties[key] || {})
            ? ((schemaObject.properties[key] || {}) as any).required
            : false;
        /** 
         * 将类型属性变为字符串，兼容错误格式如：
         * 3d_tile(数字开头)等错误命名，
         * 在后面进行格式化的时候会将正确的字符串转换为正常形式，
         * 错误的继续保留字符串。
         * */
        return `'${key}'${required ? '' : '?'}: ${getType(
          schemaObject.properties && schemaObject.properties[key]
        )}; `;
      })
      .join('')}}`;
  }
  return 'any';
};

function getEntities (schemas: {[propertyName: string]: SchemaObject | ReferenceObject}, required: string[] = []) {
  return Object.keys(schemas).map((key) => {
    const schema = schemas[key];
    if (isSchemaObject(schema)) {
      const entity: Entity = {
        name: key,
        type: getType(schema),
        required: required.includes(key),
        description: schema.description
      };
      if (schema.properties) {
        entity.properties = getEntities(schema.properties, schema.required || []);
      }
      return entity;
    } else {
      // 如果是ReferenceObject类型则进行处理
      return {
        name: key,
        type: getType(schema),
        required: required.includes(key),
        description: ""
      } as Entity;
    }
  });
}

class APIDoc {
  private _doc: DocAPI;
  private _entities: Entity[];
  private resultKey: string = 'data';
  constructor(openAPI: OpenAPIObject, config: any = { ignore: [], prefix: '' }) {
    this._doc = {
      title: openAPI?.info?.title,
      path: openAPI.servers[0].url,
      prefix: config.prefix,
      groups: []
    };

    this.initEntities(openAPI.components.schemas);

    const groups = [];

    // 填充groups
    openAPI.tags.forEach((tag) => {
      if (!config.ignore.includes(tag.name)) {
        const group = {
          name: tag.name,
          desc: tag.description,
          paths: [],
        };
        groups.push(group);
      }
    });

    // 将path填充到groups中
    Object.keys(openAPI.paths).forEach((path) => {
      Object.keys(openAPI.paths[path]).forEach((method) => {
        // 通过tags找到对应的group
        const obj: OperationObject = openAPI.paths[path][method];
        const groupIndex = groups.findIndex((g) => g.name === obj.tags[0]);

        if (groupIndex === -1) {
          return;
        }

        const pathObj: DocPathItemObject = {
          method,
          path,
          summary: obj.summary || "",
          operationId: obj.operationId,
          pathParams: "",
          queryParams: "",
          body: "",
          responses: "",
          result: "",
        };

        const { requestBody, responses, parameters } = obj;

        if (requestBody) {
          pathObj.body = this.getDocBody(requestBody);
        }

        if (responses) {
          pathObj.responses = this.getDocResponse(responses);
        }

        if (parameters && parameters.length > 0) {
          const { queryParams, pathParams } = this.getDocParams(parameters, pathObj);
          pathObj.queryParams = queryParams;
          pathObj.pathParams = pathParams;
        }

        if (pathObj.responses) {
          pathObj.result = this.getDocResult(pathObj);
        }

        groups[groupIndex].paths.push(pathObj);
      });
    });
    this._doc.groups = groups;
  }

  get entities() {
    return this._entities;
  }
  get doc() {
    return this._doc;
  }
  private initEntities(schemas: {
    [schema: string]: SchemaObject | ReferenceObject;
  }) {
    this._entities = getEntities(schemas)
  }
  /**
   * 向entities中添加schema对象
   */
  private addEntity(properties: {
    [propertyName: string]: SchemaObject | ReferenceObject;
  }, name: string, required: string[] = [], description: string = '') {
    // TODO: 做name重复处理
    const entity: Entity = {
      name,
      type: name,
      required: true,
      properties: getEntities(properties, required),
      description
    }
    this._entities.push(entity)

    return name
  }
  /**
   * 从requestBody中获取请求体对象
   */
  private getDocBody(requestBody: RequestBodyObject | ReferenceObject) {
    if (isRequestBodyObject(requestBody)) {
      // 获取requestBody中的schema
      const schema = get(requestBody, 'content[*].schema');
      return getType(schema)
    }
    if (isReferenceObject(requestBody)) {
      // 如果是ReferenceObject类型则直接返回$ref中的值
      return getRefName(requestBody.$ref);
    }
  }
  /**
   * 从responses中获取响应体对象
   */
  private getDocResponse(responses: ResponsesObject) {
    const schema = get(responses, '[*].content[*].schema');
    return getType(schema)
  }
  /**
   * 从parameters中获取路径参数对象和查询参数对象
   */
  private getDocParams(parameters: (ParameterObject | ReferenceObject)[], pathObj: DocPathItemObject) {
    let queryParams: string = "";
    let pathParams: string = "";
    if (parameters) {
      const pathProperties = {};
      const pathRequired = [];
      parameters.forEach((param) => {
        if (isReferenceObject(param)) {
          queryParams = getRefName(param.$ref);
        } else {
          if (param.in === "query") {
            queryParams = getType(param.schema);
          }
          if (param.in === "path") {
            pathProperties[param.name] = param.schema;
            if (param.required) {
              pathRequired.push(param.name);
            }
          }
        }
      });
      if (Object.keys(pathProperties).length > 0) {
        /**
         * TODO: 将pathProperties存储到entities中，然后返回schema的名称
         */
        pathParams = this.addEntity(pathProperties, `${pathObj.operationId}PathParams`, pathRequired, `${pathObj.operationId}路径参数对象`)
      }
    }
    return { queryParams, pathParams };
  }
  /**
   * 根据响应体对象获取结果对象
   * @param pathObj 
   */
  private getDocResult(pathObj: DocPathItemObject) {
    if (pathObj.responses) {
      const entity = this._entities.find((c) => c.name === pathObj.responses);
      if (!entity) {
        return
      }
      const result = entity.properties.find(item => item.name === this.resultKey)
      // 处理异常情况，如果result不存在则返回any
      return result ? result.type : 'any';
    }
    return
  }
}

export default function getDoc4OpenAPI(openAPI: OpenAPIObject, config: any) {
  const doc = new APIDoc(openAPI, config);
  return doc;
}