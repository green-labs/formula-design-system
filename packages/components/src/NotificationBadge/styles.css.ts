import { tokens } from "@greenlabs/formula-design-token"
import { createVar, style, styleVariants } from "@vanilla-extract/css"
import "../root.css"

export const notificationBaseStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
})

export const buttonNotificationSizeStyle = styleVariants({
  sm: {
    fontFamily: tokens.ref.typeface.plain.value,
    fontSize: "12px",
    padding: "1px 4px",
    letterSpacing: "-0.04em",
    fontWeight: 500,
    lineHeight: "14.32px",
  },
  md: {
    fontFamily: tokens.ref.typeface.plain.value,
    fontSize: "14px",
    fontWeight: 500,
    padding: "1.5px 6px",
    letterSpacing: "-0.04em",
    lineHeight: "16.71px",
  },
})

export const textColorVar = createVar()
export const bgColorVar = createVar()
export const textStyles = style({
  color: textColorVar,
  backgroundColor: bgColorVar,
})
