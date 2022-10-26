const { readFileSync } = require("fs")
const { resolve } = require("path")
const get = require("lodash.get")
const { convertTypographyNumberToFigma } = require("./figma-utils")

const themeDataPath = resolve("formats/data/$themes.json")

/**
 * @param { import("style-dictionary/types/TransformedToken").TransformedToken[] arr }
 */
const groupByColor = (arr) => {
  const type = "color"
  return arr.reduce((dict, el) => {
    const accessor = `${el.attributes.item}`
    const subAccessor = el.attributes.subitem
    const category = el.attributes.category

    // ref의 경우 Style을 하나의 카테고리로 몰아넣기 위해, 한단계 더 'ref' 필드를 만든다.
    // 이런 분기처리를 위해 최상위가 변경되는 'root' 개념이 들어간다.
    let root
    if (category === "ref") {
      if (!dict[category]) {
        dict[category] = {}
        dict[category][category] = {}
      }
      root = dict[category][category] // .ref.ref
    } else if (category === "sys") {
      if (!dict[category]) {
        dict[category] = {}
      }
      root = dict[category] // .sys
    }

    if (category === "sys") {
      const path =
        (subAccessor ?? "container") === "container" ? "container" : "contents" // divider, outline, background,

      if (!root[path]) {
        root[path] = {}
      }

      let subPath = accessor
      if (subAccessor === "container-contents") {
        subPath = `on-${accessor}`
      }

      root[path][subPath] = { value: el.value, type }
      return dict
    }

    if (!root[accessor]) {
      root[accessor] = {}
    }

    if (subAccessor) {
      root[accessor][subAccessor] = { value: el.value, type }
    } else {
      root[accessor] = { value: el.value, type }
    }

    return dict
  }, {})
}

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

/**
 * @param { import("style-dictionary/types/Format").FormatterArguments["dictionary"] dictionary }
 */
const getTokens = (dictionary) => {
  // color tokens
  const colorTokens = dictionary.allTokens.filter(
    (e) => e.attributes.type === "color"
  )
  const { ref, sys } = groupByColor(colorTokens)
  // typography tokens
  const typographyObjs = groupByTypography(dictionary.properties.sys.font)

  return { ref, sys: Object.assign(sys, typographyObjs) }
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
