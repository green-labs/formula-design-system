const prefix = "f-"

/**
 * @param { import("style-dictionary/types/TransformedToken").TransformedToken[] arr }
 */
const groupBy = (arr) =>
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

/**
 * @param { import("style-dictionary/types/Format").FormatterArguments args }
 */
module.exports = function (args) {
  const { dictionary } = args
  // color tokens
  const colorTokens = dictionary.allTokens.filter((e) => e.attributes.type === "color")

  const ret = {
    colors: groupBy(colorTokens),
  }
  return JSON.stringify(ret)
}
