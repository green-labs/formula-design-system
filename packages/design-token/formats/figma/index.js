const { readFileSync } = require("fs")
const { resolve } = require("path")

const groupByColor = require("./groupByColor")
const groupByTypography = require("./groupByTypography")
const groupBySimple = require("./groupBySimple")
// groupByBoxShadow
// groupByBorderRadius
// groupByOpacity

const themeDataPath = resolve("formats/data/$themes.json")

/**
 * @param { import("style-dictionary/types/Format").FormatterArguments["dictionary"] dictionary }
 */
const getTokens = (dictionary) => {
  // color tokens
  const colorTokens = dictionary.allTokens.filter(
    (e) => e.attributes.type === "color"
  )
  const colorGroup = groupByColor(colorTokens)
  const { sys, ref } = dictionary.properties
  // typography tokens
  const sysTypography = groupByTypography(sys.font)
  // box shadow, border radius, opacity, spacing tokens
  const refBoxShadow = groupBySimple(ref.shadow, "boxShadow")
  const refBorderRadius = groupBySimple(ref.radius, "borderRadius")
  const refOpacity = groupBySimple(ref.opacity, "opacity")
  const refSpacing = groupBySimple(ref.spacing, "spacing")

  return {
    ref: Object.assign(
      colorGroup.ref,
      refBoxShadow,
      refBorderRadius,
      refOpacity,
      refSpacing
    ),
    sys: Object.assign(colorGroup.sys, sysTypography),
  }
}

module.exports = {
  emitTokenSet({ dictionary, options: { tokenSet } }) {
    return JSON.stringify(getTokens(dictionary)[tokenSet])
  },
  emitThemes() {
    return readFileSync(themeDataPath).toString()
  },
  emitMeta: () =>
    JSON.stringify({
      tokenSetOrder: ["sys", "ref"],
    }),
}
