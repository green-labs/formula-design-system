const StyleDictionary = require("style-dictionary")

const tailwindFormat = require("./formats/tailwind")
const figmaFormat = require("./formats/figma")
const tsModuleFormat = require("./formats/tsModule")
const { colorMapFormat, colorMapResFormat } = require("./formats/colorMap")

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
    "color/css": Object.assign({}, StyleDictionary.transform[`color/css`], {
      transitive: true,
    }),
  },

  platforms: {
    tsModule: {
      transforms: ["attribute/cti", "name/cti/kebab", "color/hex"],
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
