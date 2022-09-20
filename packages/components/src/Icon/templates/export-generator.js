const fs = require("fs");
const path = require("path");

const generatedFilesPath = path.join(__dirname, "../generated");
const iconFiles = fs
  .readdirSync(generatedFilesPath)
  .filter((file) => file.includes(".tsx"));

const getExportLineTemplate = (iconName) => {
  return `export { default as ${iconName}Icon } from './generated/${iconName}'`;
};

const entryText = iconFiles.map((filename) => {
  try {
    const [iconName, _filenameExtension] = filename.split(".");
    return getExportLineTemplate(iconName);
  } catch (error) {
    console.log(error);
  }
});

try {
  const moduleFilePath = path.join(__dirname, "../generated.ts");
  fs.writeFileSync(moduleFilePath, entryText.join("\n"));
} catch (error) {
  console.log(error);
}
