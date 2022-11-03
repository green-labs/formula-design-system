// Create component color map for `vanilla-extract` and `sprinkles`.
// expected output:
//
//   { "green_200" : "#033927", ... }

/**
 * @param { import("style-dictionary/types/TransformedToken").TransformedToken[] arr }
 */
const classify = (arr) =>
  arr.reduce((dict, el) => {
    const accessor = `${el.attributes.item}`
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

const createMap = (dictionary) => {
  // picked from `./tailwind.js`
  const rootObj = classify(
    dictionary.allTokens.filter((e) => e.attributes.type === "color")
  )

  // traverse to get a simple color map
  let ret = {}
  for (const key in rootObj) {
    const val = rootObj[key]
    if (typeof val === "string") {
      ret[key] = val
    } else {
      for (const subKey in val) {
        const subVal = val[subKey]
        ret[`${key}-${subKey}`] = subVal
      }
    }
  }

  return ret
}

/**
 * @param { import("style-dictionary/types/Format").FormatterArguments args }
 */
module.exports = {
  colorMapFormat(args) {
    const { dictionary } = args
    const map = JSON.stringify(createMap(dictionary))

    return `export default ${map} as const`
  },
  colorMapResFormat(args) {
    const { dictionary } = args
    const map = createMap(dictionary)

    const fragment = Object.keys(map)
      .map((key) => {
        if (key.includes("-")) {
          return `  | #${JSON.stringify(key)}`
        }
        return `  | #${key}`
      })
      .join("\n")

    return `type t = [
${fragment}
]\n`
  },
}
