import { styleVariants, style } from "@vanilla-extract/css"
import { tokens } from "@greenlabs/formula-design-token"

const { color } = tokens.sys

const horizontalBase = style({
  width: "100%",
})

export const variants = styleVariants({
  "horizontal-small": [
    horizontalBase,
    {
      backgroundColor: color.divider.value,
      height: "1px",
    },
  ],
  "horizontal-large": [
    horizontalBase,
    {
      backgroundColor: color.divider.value,
      height: "10px",
    },
  ],
  "vertical-small": {
    backgroundColor: color.divider.value,
    width: "1px",
    height: "100%",
  },
})
