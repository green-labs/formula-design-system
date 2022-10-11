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
    figma: figmaFormat,
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
      buildPath: "dist/",
      files: [
        {
          destination: "figma-tokens.json",
          format: "figma",
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
          destination: "colorMap.js",
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
