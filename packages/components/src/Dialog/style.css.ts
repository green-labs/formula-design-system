import { style } from "@vanilla-extract/css"
import { tokens } from "@greenlabs/formula-design-token"

export const titleTextBase = style({
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
  overflow: "hidden",
  margin: "24px 20px 8px 20px",
})

export const bodyTextBase = style({
  selectors: {
    "&.with-title": {
      color: tokens.sys.color["neutral-secondary"].contents.value,
    },
  },
  marginTop: "0px",
  WebkitLineClamp: "4",
  WebkitBoxOrient: "vertical",
  maxWidth: "100%",
  display: "-webkit-box",
  overflow: "hidden",

  margin: "0px 20px",
  marginBottom: "16px",
  ":first-of-type": {
    marginTop: "20px",
  },

  ":last-of-type": {
    marginBottom: "0px",
  },
})

export const buttonContainerStyle = style({})

export const bodyContainerStyle = style({})
