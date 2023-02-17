import { styleVariants } from "@vanilla-extract/css"
import { dialogBase } from "../common/style.css"

export const sizeVariant = styleVariants({
  small: [
    dialogBase,
    {
      maxWidth: "320px",
      width: "100%",
    },
  ],
  medium: [
    dialogBase,
    {
      maxWidth: "488px",
      width: "100%",
    },
  ],
  large: [
    dialogBase,
    {
      maxWidth: "800px",
      width: "100%",
    },
  ],
})
