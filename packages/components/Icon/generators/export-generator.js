const fs = require("fs");
const path = require("path");

const generatedFilesPath = path.join(__dirname, "../generated");

const makeResModuleWithTemplate = (moduleName, file) => {
  return `module ${moduleName} = {${file}}
  \n`;
};

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
  fs.writeFileSync(path.join("../src/Icon/Icon.res"), datas.join(""));
} catch (error) {
  console.log(error);
}
