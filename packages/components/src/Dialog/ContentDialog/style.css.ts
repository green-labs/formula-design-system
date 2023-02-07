import { style, styleVariants } from "@vanilla-extract/css"
import { dialogBase } from "../common/style.css"

const contentDialogBase = style({
  display: "flex",
  flexDirection: "column",
})

export const sizeVariant = styleVariants({
  medium: [
    dialogBase,
    contentDialogBase,
    {
      width: "100%",
      maxWidth: "488px",
      margin: "0px 20px",
    },
  ],
  large: [
    dialogBase,
    contentDialogBase,
    {
      width: "100%",
      maxWidth: "800px",
      margin: "0px 20px",
    },
  ],
})

export const titleText = style({
  flex: "none",
})

export const bodyText = style({
  flex: "none",

  // line-clamp-2
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
  overflow: "hidden",
})

export const contentBase = style({
  overflow: "scroll",
  margin: "16px 0px",
})
