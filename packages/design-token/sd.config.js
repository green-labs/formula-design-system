const StyleDictionary = require("style-dictionary")
const chroma = require("chroma-js")

const tailwindFormat = require("./formats/tailwind")
const figmaFormat = require("./formats/figma")
const tsModuleFormat = require("./formats/tsModule")
const { colorMapFormat, colorMapResFormat } = require("./formats/colorMap")

// from https://github.com/amzn/style-dictionary/blob/51cb6c8019e62806c005e85e7c01da377b00628b/examples/advanced/transitive-transforms/sd.config.js
const colorTransform = (token) => {
  const { value, modify = [] } = token
  let color = chroma(value)

  modify.forEach(({ type, amount }) => {
    color = color[type](amount)
  })

  return color.hex()
}

module.exports = {
  source: [`tokens/**/*.@(json|json5)`, "tokens/index.js"],
  format: {
    tailwind: tailwindFormat,
    figmaEmitMeta: figmaFormat.emitMeta,
    figmaEmitTokenSet: figmaFormat.emitTokenSet,
    figmaEmitThemes: figmaFormat.emitThemes,
    tsModule: tsModuleFormat,
    colorMap: colorMapFormat,
    colorMapRes: colorMapResFormat,
  },
  transform: {
    colorTransform: {
      type: `value`,
      transitive: true,
      matcher: (token) => token.attributes.category === "color" && token.modify,
      transformer: colorTransform,
    },

    "color/css": Object.assign({}, StyleDictionary.transform[`color/css`], {
      transitive: true,
    }),
  },

  platforms: {
    tsModule: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "colorTransform",
        "color/hex",
      ],
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.ts",
          format: "tsModule",
        },
      ],
    },
    tailwind: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "colorTransform",
        "color/hex",
        "size/rem",
        "color/css",
      ],
      buildPath: "dist/",
      files: [
        {
          destination: "tailwind-tokens.json",
          format: "tailwind",
        },
      ],
    },
    figma: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "colorTransform",
        "color/hex",
        "size/rem",
        "color/css",
      ],
      buildPath: "dist/figma-tokens/",
      files: [
        {
          destination: "ref.json",
          format: "figmaEmitTokenSet",
          options: {
            tokenSet: "ref",
          },
        },
        {
          destination: "sys.json",
          format: "figmaEmitTokenSet",
          options: {
            tokenSet: "sys",
          },
        },
        {
          destination: "$metadata.json",
          format: "figmaEmitMeta",
        },
        {
          destination: "$themes.json",
          format: "figmaEmitThemes",
        },
      ],
    },
    colorMap: {
      transforms: [
        "attribute/cti",
        "name/cti/snake",
        "colorTransform",
        "color/hex",
        "size/rem",
        "color/css",
      ],
      buildPath: "dist/",
      files: [
        {
          destination: "colorMap.ts",
          format: "colorMap",
        },
        {
          destination: "Formula__ColorMap.res",
          format: "colorMapRes",
        },
      ],
    },
  },
}
