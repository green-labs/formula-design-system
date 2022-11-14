const walkTree = (obj, typeMode = false) => {
  // typeMode: add 'DesignToken<T>'
  let tree = Object.create(null)
  let has = Object.prototype.hasOwnProperty.bind(obj)
  if (has("value")) {
    if (typeMode) {
      if (typeof obj.value === "number") {
        tree = "DesignToken<number>"
      } else if (typeof obj.value === "string") {
        tree = "DesignToken<string>"
      } else {
        tree = "DesignToken<any>"
      }
    } else {
      tree = { value: obj.value }
    }
  } else {
    for (const k in obj)
      if (has(k)) {
        switch (typeof obj[k]) {
          case "object":
            tree[k] = walkTree(obj[k], typeMode)
        }
      }
  }
  return tree
}

const moduleDeclTrimmed = function ({ dictionary }) {
  const output = `export default tokens;

declare type DesignToken<T> = {
  value: T;
}

declare const tokens: ${JSON.stringify(
    walkTree(walkTree(dictionary.properties), true),
    null,
    2
  )}`
  // JSON stringify will quote strings, because this is a type we need
  // it unquoted.
  return output.replace(/"DesignToken<(.+)>"/g, "DesignToken<$1>")
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
