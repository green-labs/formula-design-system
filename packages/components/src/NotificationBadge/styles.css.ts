import chroma from "chroma-js"
import { tokens } from "@greenlabs/formula-design-token"
import { createVar, style, styleVariants } from "@vanilla-extract/css"
import { buttonCommonStyle } from "../Button/commonStyle.css"
import { extract } from "../util"

export const notificationBaseStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,

  // todo - split common transition css
  transition: "background-color 0.2s, color 0.2s",

  selectors: {
    [`${buttonCommonStyle}:disabled &`]: {
      backgroundColor: chroma(
        tokens.sys.color["neutral-primary"].contents.value
      )
        .alpha(tokens.sys.state.opacity["disabled-contents"].value)
        .css(),
      color: tokens.sys.color.inverse["container-contents"].value,
    },
  },
})

export const buttonNotificationSizeStyle = styleVariants({
  sm: {
    padding: "1px 4px",
    lineHeight: "14.32px",
    ...extract(tokens.sys.font.caption.xs.regular, [
      ["typeface", "fontFamily"],
      ["font-size", "fontSize"],
      ["tracking", "letterSpacing"],
      ["weight", "fontWeight"],
    ]),
  },
  md: {
    padding: "1.5px 6px",
    lineHeight: "16.71px",
    ...extract(tokens.sys.font.body.sm.regular, [
      ["typeface", "fontFamily"],
      ["font-size", "fontSize"],
      ["tracking", "letterSpacing"],
      ["weight", "fontWeight"],
    ]),
  },
})

export const textColorVar = createVar()
export const bgColorVar = createVar()
export const textStyles = style({
  color: textColorVar,
  backgroundColor: bgColorVar,
})
