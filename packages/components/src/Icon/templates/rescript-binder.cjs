const fs = require("fs")
const path = require("path")

const docs = fs.readFileSync(path.join(__dirname, "docs.res.txt"), "utf-8")

const checkTsxFile = (filename) => filename.includes(".tsx")

const getIconName = (filename) => {
  const [iconName, _filenameExtension] = filename.split(".")
  return iconName
}

const generateIconModule = (iconName) => {
  return `${docs}
module ${iconName} = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~style: ReactDOMStyle.t=?,
    ~className: string=?,
    ~size: size=?,
    ~sizePx: int=?,
    ~color: Formula__ColorMap.t=?,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "${iconName}"
}
`
}

const generatedFilesPath = path.join(__dirname, "../generated")
const iconModules = fs
  .readdirSync(generatedFilesPath)
  .filter(checkTsxFile)
  .map(getIconName)
  .map(generateIconModule)

const resTypes = `@deriving(jsConverter)
type size = [#pc | #xl | #lg | #sm | #xs]
`

const resModules = resTypes + iconModules.join("\n")

try {
  const moduleFilePath = path.join(
    __dirname,
    "../../../../components-rescript/src/generated/Formula__Icon.res"
  )
  fs.writeFileSync(moduleFilePath, resModules)
} catch (error) {
  console.log(error)
}
