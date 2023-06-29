const fs = require("fs");
const template = require("art-template");

export default function genFileFromTemplate(templatePath: string, data: any, outputPath: string) {
  const content = template(
    templatePath,
    data
  );
  fs.writeFileSync(outputPath, content, {
    encoding: "utf-8",
  });
}