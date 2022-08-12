const { overlay: colorBlendOverlay } = require("color-blend/unit")
const chroma = require("chroma-js")

const formatColorBlendInput = (rgba) => {
  const [r, g, b, a] = chroma(rgba)
    .rgba()
    .map((value, i, arr) => {
      if (i === arr.length - 1) {
        return value
      }
      return value / 255
    })

  return {
    r,
    g,
    b,
    a,
  }
}

const formatColorBlendOutput = ({ r, g, b, a }) =>
  chroma(`rgba(${(r * 255) | 0},${(g * 255) | 0},${(b * 255) | 0},${a})`)

module.exports = {
  overlay: (input1, input2) => {
    const output = colorBlendOverlay(formatColorBlendInput(input1), formatColorBlendInput(input2))
    return formatColorBlendOutput(output)
  },
}
