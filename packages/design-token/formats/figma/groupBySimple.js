const { convertTypographyNumberToFigma } = require("../figma-utils")

/**
 *
 * @param {string} v
 * @param {'boxShadow' | 'borderRadius' | 'opacity' | 'spacing'} targetType
 * @returns
 */
const converterByTarget = (v, targetType) => {
  v = String(v)
  if (v.endsWith("rem")) {
    v = convertTypographyNumberToFigma(v)
  }

  if (targetType === "boxShadow") {
    // FIXME: parsing logic etc is very fragile
    const m1 = v.match(/(.*\)), (.*)/)
    return [m1[1], m1[2]].reverse().map((entry) => {
      const match = entry.match(/^(.+)px (.+)px (.+)px (.+)px (.*)/)
      return {
        x: `${match[1]}px`,
        y: `${match[2]}px`,
        blur: `${match[3]}px`,
        spread: `${match[4]}px`,
        color: match[5],
        type: "dropShadow",
      }
    })
  }

  if (targetType === "borderRadius") {
    return v
  }

  if (targetType === "opacity") {
    return v
  }

  if (targetType === "spacing") {
    return v
  }

  return v
}

// groupBy function which emits more simple object structure.
const groupBySimple = (dict, targetType) => {
  const ret = { [targetType]: {} }
  for (const k in dict) {
    const v = dict[k].value
    ret[targetType][k] = {
      value: converterByTarget(v, targetType),
      type: targetType,
    }
  }
  return ret
}

module.exports = groupBySimple
