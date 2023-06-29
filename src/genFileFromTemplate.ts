const fs = require("fs");
const template = require("art-template");

template.defaults.imports.typeFormat = function(type){
  if (["string", "number", "boolean", "any", "Record<string, any>"].includes(type)) {
    return type;
  }
  return `API.${type}`;
};

export default function genFileFromTemplate(templatePath: string, data: any, outputPath: string) {
  const content = template(
    templatePath,
    data
  );
  fs.writeFileSync(outputPath, content, {
    encoding: "utf-8",
  });
}