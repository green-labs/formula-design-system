// https://github.com/six7/figma-tokens/blob/b4ffe118d453197f4e41f863b8514e900a5f9df9/src/plugin/figmaTransforms/generic.ts#L9
module.exports = {
  /**
   *
   * @param {string} value
   * @param {number?} baseFontSize
   * @returns
   */
  convertTypographyNumberToFigma(value, baseFontSize = 16) {
    if (
      typeof value === "string" &&
      (value.endsWith("em") || value.endsWith("rem"))
    ) {
      return parseFloat(value) * baseFontSize
    }
    return parseFloat(value)
  },
}
