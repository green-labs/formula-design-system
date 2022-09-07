/**
 * @param { import("style-dictionary/types/TransformedToken").TransformedToken[] arr }
 */
const groupBy = (arr, type) =>
  arr.reduce(
    (dict, el) => {
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
        root = dict[category][category]
      } else {
        if (!dict[category]) {
          dict[category] = {}
        }
        root = dict[category]
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
    },
    {
      $themes: [],
      $metadata: {
        tokenSetOrder: ["sys", "ref"],
      },
    }
  )

/**
 * @param { import("style-dictionary/types/Format").FormatterArguments args }
 */
module.exports = function (args) {
  const { dictionary } = args
  // color tokens
  const colorTokens = dictionary.allTokens.filter((e) => e.attributes.type === "color")

  const ret = {
    ...groupBy(colorTokens, "color"),
  }
  return JSON.stringify(ret)
}
