import { style } from "@vanilla-extract/css"
import { tokens } from "@greenlabs/formula-design-token"

export const dialogBase = style({
  padding: "24px 24px",
  borderRadius: "16px",
})

export const titleTextBase = style({
  // line-clamp-2
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
  overflow: "hidden",

  marginBottom: "8px",
  userSelect: "none",
})

export const bodyTextBase = style({
  selectors: {
    "&.with-title": {
      color: tokens.sys.color["neutral-secondary"].contents.value,
    },
  },

  WebkitLineClamp: "4",
  WebkitBoxOrient: "vertical",
  maxWidth: "100%",
  display: "-webkit-box",
  overflow: "hidden",

  margin: "8px 0px 16px 0px",

  userSelect: "none",
})

export const buttonContainerStyle = style({})

export const bodyContainerStyle = style({})
