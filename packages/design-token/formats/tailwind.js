const prefix = ""

/**
 * @param { import("style-dictionary/types/TransformedToken").TransformedToken[] arr }
 */
const classify = (arr) =>
  arr.reduce((dict, el) => {
    const accessor = `${prefix}${el.attributes.item}`
    const subAccessor = el.attributes.subitem

    if (!dict[accessor]) {
      dict[accessor] = {}
    }

    if (subAccessor) {
      dict[accessor][subAccessor] = el.value
    } else {
      dict[accessor] = el.value
    }

    return dict
  }, {})

const classifyTypographyTokens = (arr) =>
  arr.reduce((dict, el) => {
    const key = el.path.slice(2, el.path.length).join("-")
    dict[key] = el.value

    return dict
  }, {})

/**
 * @param { import("style-dictionary/types/Format").FormatterArguments args }
 */
module.exports = function (args) {
  const { dictionary } = args

  // special tokens
  const typography = classifyTypographyTokens(
    dictionary.allTokens.filter((e) => e.attributes.type === "font" && e.attributes.category === "sys")
  )
  const tokens = {
    typography,
  }

  const result = [
    "opacity",
    "color",
    "spacing",
    "viewport",
    // etc typography tokens
    "typeface",
    "leading",
    "weight",
    "tracking",
    "font-size",
  ].reduce((ret, type) => {
    ret[type] = classify(dictionary.allTokens.filter((e) => e.attributes.type === type))
    return ret
  }, tokens)

  return JSON.stringify(result)
}
