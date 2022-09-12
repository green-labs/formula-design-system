const fs = require("fs");
const path = require("path");

const docsPath = path.join(__dirname, "docs.res.txt");
const docs = fs.readFileSync(docsPath, "utf-8");
const makeResModuleWithTemplate = (moduleName, file) =>
  docs + `module ${moduleName} = {${file}}\n\n`;

const utilFuncPath = path.join(__dirname, "../Utils/toString.res");
const utilFunc = fs.readFileSync(utilFuncPath, "utf-8");

const generatedFilesPath = path.join(__dirname, "../generated");
const iconFiles = fs
  .readdirSync(generatedFilesPath)
  .filter((file) => file.includes("res"));

const datas = iconFiles.map((filename) => {
  try {
    const [iconName, _filenameExtension] = filename.split(".");
    const file = fs.readFileSync(`${generatedFilesPath}/${filename}`, "utf8");
    return makeResModuleWithTemplate(iconName, file);
  } catch (error) {
    console.log(error);
  }
});

try {
  const moduleFilePath = path.join(__dirname, "../../src/Icon/Icon.res");
  fs.writeFileSync(moduleFilePath, utilFunc + datas.join(""));
} catch (error) {
  console.log(error);
}
