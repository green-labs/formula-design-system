const StyleDictionary = require("style-dictionary")
const chroma = require("chroma-js")
const { overlay } = require("./util")
const tailwindFormat = require("./formats/tailwind")
const figmaFormat = require("./formats/figma")

// from https://github.com/amzn/style-dictionary/blob/51cb6c8019e62806c005e85e7c01da377b00628b/examples/advanced/transitive-transforms/sd.config.js
const colorTransform = (token) => {
  const { value, modify = [] } = token
  let color = chroma(value)

  modify.forEach(({ type, overlayColor, amount }) => {
    if (type === "overlay") {
      color = overlay(color, chroma(overlayColor).alpha(amount))
      return
    }
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
    // scss: {
    //   transforms: [
    //     "attribute/cti",
    //     "name/cti/kebab",
    //     "time/seconds",
    //     "content/icon",
    //     "colorTransform",
    //     "size/rem",
    //     "color/css",
    //   ],
    //   buildPath: "build/scss/",
    //   files: [
    //     {
    //       destination: "_variables.scss",
    //       format: "scss/variables",
    //     },
    //   ],
    // },
    // "javascript/module": {
    //   transforms: ["attribute/cti", "name/cti/kebab", "colorTransform", "color/hex"],
    //   buildPath: "build/js/",
    //   files: [
    //     {
    //       destination: "_tokens.js",
    //       format: "javascript/module",
    //     },
    //   ],
    // },
    tailwind: {
      transforms: ["attribute/cti", "name/cti/kebab", "colorTransform", "color/hex", "size/rem", "color/css"],
      buildPath: "dist/",
      files: [
        {
          destination: "tailwind-tokens.json",
          format: "tailwind",
        },
      ],
    },
    figma: {
      transforms: ["attribute/cti", "name/cti/kebab", "colorTransform", "color/hex", "size/rem", "color/css"],
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
