const get = require("lodash.get")
const { convertTypographyNumberToFigma } = require("../figma-utils")

// following schema https://github.com/six7/figma-tokens/blob/07bd2161ae042e0d2e90d914d73635635864c4c6/src/config/tokenTypes.js#L91-L101
// {
//   fontFamily: 'Pretendard',
//   fontWeight: 'Regular',
//   lineHeight: 'AUTO',
//   fontSize: '18',
//   letterSpacing: '0%',
//   paragraphSpacing: '0',
//   textDecoration: 'none',
//   textCase: 'none',
//   type: 'typography'
// }
const groupByTypography = (sysFontDict) => {
  // FIXME: discovery function
  const paths = [
    "headline.sm.regular",
    "headline.sm.bold",
    "headline.md.bold",
    "headline.lg.bold",
    "headline.xl.bold",
    "body.sm.regular",
    "body.sm.medium",
    "body.sm.bold",
    "body.md.regular",
    "body.md.medium",
    "body.md.bold",
    "body.lg.regular",
    "body.lg.medium",
    "body.lg.bold",
    "body.xl.regular",
    "body.xl.bold",
    "caption.xs.regular",
    "caption.xs.medium",
    "caption.xs.bold",
  ]

  const convertedNames = {
    typeface: "fontFamily",
    leading: "lineHeight",
    tracking: "letterSpacing",
    weight: "fontWeight",
    "font-size": "fontSize",
  }

  return paths.reduce((ret, pathStr) => {
    const attribute = get(sysFontDict, pathStr)
    const [categoryPath, sizePath, weightPath] = pathStr.split(".")

    if (!attribute) {
      throw new Error(
        "groupByTypography(): unable to resolve attribute path - " + pathStr
      )
    }
    const converted = {}
    for (const oldKey in convertedNames) {
      const newKey = convertedNames[oldKey]
      converted[newKey] = attribute[oldKey].value
    }

    converted.fontSize = convertTypographyNumberToFigma(converted.fontSize) | 0 // {x}rem -> 15
    converted.lineHeight = `${parseFloat(converted.lineHeight) * 100}%` // 1.5 -> 150%
    converted.letterSpacing = `${parseFloat(converted.letterSpacing) * 100}%` // -0.02em -> -2%

    const newPath = `${sizePath}-${weightPath}` // sm-regular
    if (!ret[categoryPath]) {
      ret[categoryPath] = {}
    }
    ret[categoryPath][newPath] = { value: converted, type: "typography" }

    return ret
  }, {})
}

module.exports = groupByTypography
