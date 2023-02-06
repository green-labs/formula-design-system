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
      width: "488px",
    },
  ],
  large: [
    dialogBase,
    contentDialogBase,
    {
      width: "800px",
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

const contentBase = style({
  overflow: "scroll",
  margin: "16px 0px",
})

export const contentSizeVariant = styleVariants({
  medium: [
    contentBase,
    {
      width: "440px",
    },
  ],
  large: [
    contentBase,
    {
      width: "752px",
    },
  ],
})
