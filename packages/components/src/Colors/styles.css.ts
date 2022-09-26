import { style } from "@vanilla-extract/css"
import { vars } from "../theme.css"

export const textStyle = style({
  padding: "16px",
  border: "1px sold #333",
  color: vars.colors.primary,
  backgroundColor: vars.colors.background,
})
