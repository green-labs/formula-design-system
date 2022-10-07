const StyleDictionary = require("style-dictionary")
const chroma = require("chroma-js")
const tailwindFormat = require("./formats/tailwind")
const figmaFormat = require("./formats/figma")

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
    "javascript/module": {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "colorTransform",
        "color/hex",
      ],
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/module",
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
  },
}
