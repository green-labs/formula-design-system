import { styleVariants } from "@vanilla-extract/css"
import { dialogBase } from "../common/style.css"

export const sizeVariant = styleVariants({
  small: [
    dialogBase,
    {
      maxWidth: "320px",
      width: "100%",
      margin: "0px 20px",
    },
  ],
  medium: [
    dialogBase,
    {
      maxWidth: "488px",
      width: "100%",
      margin: "0px 20px",
    },
  ],
  large: [
    dialogBase,
    {
      maxWidth: "800px",
      width: "100%",
      margin: "0px 20px",
    },
  ],
})
