const walkTree = (obj, replacing) => {
  let tree = Object.create(null)
  let has = Object.prototype.hasOwnProperty.bind(obj)
  if (has("value")) {
    tree = replacing ?? { value: obj.value }
  } else {
    for (var k in obj)
      if (has(k)) {
        switch (typeof obj[k]) {
          case "object":
            tree[k] = walkTree(obj[k], replacing)
        }
      }
  }
  return tree
}

const moduleDeclTrimmed = function ({ dictionary }) {
  const designTokenInterface = `interface DesignToken {
    value: string;
  }`
  const output = `export default tokens;

declare ${designTokenInterface};

declare const tokens: ${JSON.stringify(
    walkTree(walkTree(dictionary.properties), "DesignToken"),
    null,
    2
  )}`
  // JSON stringify will quote strings, because this is a type we need
  // it unquoted.
  return output.replace(/"DesignToken"/g, "DesignToken")
}

module.exports = {
  getTrimmedToken({ dictionary }) {
    return (
      "export default " +
      JSON.stringify(walkTree(dictionary.properties), null, 2)
    )
  },
  getTokenTypeDef: moduleDeclTrimmed,
}
