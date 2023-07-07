import fs from "fs";
import path from "path";

export const getRefName = (schemaPath: string) => {
  const arr = schemaPath.split("/");
  const name = arr[arr.length - 1];
  return name;
};
/**
 * 通过路径获取对象
 * @param obj 
 * @param path 
 */
export const get = (obj: any, path: string) => {
  try {
    // 将[]替换为.
    path = path.replace(/\[/g, ".").replace(/\]/g, "");
    const arr = path.split(".").filter(str => str !== "");
    let value = obj;
    arr.forEach((key) => {
      if (key === "*") {
        // 取对象的第一个值
        value = value[Object.keys(value)[0]];
      } else {
        value = value[key];
      }
    });
    return value;
  } catch (error) {
    // 可能存在路径不存在的情况，如返回体中没有返回内容
    return null;
  }
}

export const mkdir = (dir) => {
  if (!fs.existsSync(dir)) {
    mkdir(path.dirname(dir));
    fs.mkdirSync(dir);
  }
};