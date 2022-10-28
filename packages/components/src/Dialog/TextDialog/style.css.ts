import { styleVariants } from "@vanilla-extract/css"
import { dialogBase } from "../common/style.css"

export const sizeVariant = styleVariants({
  small: [
    dialogBase,
    {
      width: "320px",
    },
  ],
  medium: [
    dialogBase,
    {
      width: "488px",
    },
  ],
  large: [
    dialogBase,
    {
      width: "800px",
    },
  ],
})
