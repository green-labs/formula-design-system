const StyleDictionary = require("style-dictionary")

const tailwindFormat = require("./formats/tailwind")
const figmaFormat = require("./formats/figma")
const { getTrimmedToken, getTokenTypeDef } = require("./formats/tokenTrimmed")
const {
  colorMapFormat,
  colorMapType,
  colorMapResFormat,
} = require("./formats/colorMap")

module.exports = {
  source: [`tokens/**/*.@(json|json5)`, "tokens/index.js"],
  format: {
    tailwind: tailwindFormat,
    figmaEmitMeta: figmaFormat.emitMeta,
    figmaEmitTokenSet: figmaFormat.emitTokenSet,
    figmaEmitThemes: figmaFormat.emitThemes,
    tokenTrimmed: getTrimmedToken,
    tokenTrimmedType: getTokenTypeDef,
    colorMap: colorMapFormat,
    colorMapType: colorMapType,
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
          destination: "tokens.js",
          format: "tokenTrimmed",
        },
        {
          destination: "tokens.d.ts",
          format: "tokenTrimmedType",
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
          destination: "colorMap.js",
          format: "colorMap",
        },
        {
          destination: "colorMap.d.ts",
          format: "colorMapType",
        },
        // There is little change of changing this key, so disable it for now
        // {
        //   destination: "Formula__ColorMap.res",
        //   format: "colorMapRes",
        // },
      ],
    },
  },
}
