import { styleVariants, style } from "@vanilla-extract/css"
import { dialogBase } from "../common/style.css"

export const imageAspectRatioVariant = styleVariants({
  square: [dialogBase],
  horizontal: [dialogBase],
  vertical: [dialogBase],
})

export const imageBase = style({
  display: "block",
})
export const imageSizeVariant = styleVariants({
  square: [
    imageBase,
    {
      width: "488px",
      height: "488px",
    },
  ],
  horizontal: [
    imageBase,
    {
      width: "488px",
      height: "366px",
    },
  ],
  vertical: [
    imageBase,
    {
      width: "366px",
      height: "488px",
    },
  ],
})
