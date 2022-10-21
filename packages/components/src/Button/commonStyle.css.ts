import chroma from "chroma-js"
import { createVar, style, styleVariants } from "@vanilla-extract/css"
import { tokens } from "@greenlabs/formula-design-token"
import { extract } from "../util"

export const buttonCommonStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  paddingLeft: 12,
  paddingRight: 12,
  cursor: "pointer",
  border: "none",
  margin: 0,
  overflow: "visible",

  // 🛑 todo - split common transition css
  transition:
    "background-color 0.2s, color 0.2s, fill 0.2s, border-color 0.2s, border-style 0.2s",

  ":disabled": {
    cursor: "not-allowed",
  },
})

export const buttonSizeStyles = styleVariants({
  xs: {
    borderRadius: 6,
    height: 32,
    minWidth: 32,
    ...extract(tokens.sys.font.body.sm.regular, [
      ["typeface", "fontFamily"],
      ["font-size", "fontSize"],
      ["tracking", "letterSpacing"],
      ["weight", "fontWeight"],
      ["leading", "lineHeight"],
    ]),
  },
  sm: {
    borderRadius: 8,
    height: 40,
    minWidth: 40,
    ...extract(tokens.sys.font.body.sm.regular, [
      ["typeface", "fontFamily"],
      ["font-size", "fontSize"],
      ["tracking", "letterSpacing"],
      ["weight", "fontWeight"],
      ["leading", "lineHeight"],
    ]),
  },
  md: {
    borderRadius: 10,
    height: 48,
    minWidth: 48,
    ...extract(tokens.sys.font.body.md.regular, [
      ["typeface", "fontFamily"],
      ["font-size", "fontSize"],
      ["tracking", "letterSpacing"],
      ["weight", "fontWeight"],
      ["leading", "lineHeight"],
    ]),
  },
  lg: {
    borderRadius: 12,
    height: 56,
    minWidth: 56,
    ...extract(tokens.sys.font.body.lg.bold, [
      ["typeface", "fontFamily"],
      ["font-size", "fontSize"],
      ["tracking", "letterSpacing"],
      ["weight", "fontWeight"],
      ["leading", "lineHeight"],
    ]),
  },
  xl: {
    borderRadius: 12,
    height: 64,
    minWidth: 64,
    ...extract(tokens.sys.font.body.xl.bold, [
      ["typeface", "fontFamily"],
      ["font-size", "fontSize"],
      ["tracking", "letterSpacing"],
      ["weight", "fontWeight"],
      ["leading", "lineHeight"],
    ]),
  },
})

const buttonBorderType = { borderStyle: "solid", borderWidth: 1 }

export const buttonVariantColors = {
  primary: {
    backgroundColor: tokens.sys.color.primary.container.value,
    color: tokens.sys.color.primary["container-contents"].value,
    fill: tokens.sys.color.secondary.container.value,
  },
  "secondary-color": {
    backgroundColor: tokens.sys.color["neutral-primary"].container.value,
    borderColor: tokens.sys.color.primary.container.value,
    color: tokens.sys.color.primary.contents.value,
    fill: tokens.sys.color.primary.container.value,
    ...buttonBorderType,
  },
  "secondary-gray": {
    backgroundColor: tokens.sys.color["neutral-primary"].container.value,
    borderColor: tokens.sys.color.outline.value,
    color: tokens.sys.color["neutral-primary"].contents.value,
    fill: tokens.sys.color["neutral-primary"].contents.value,
    ...buttonBorderType,
  },
  "tertiary-color": {
    backgroundColor: tokens.sys.color.secondary.container.value,
    color: tokens.sys.color.secondary["container-contents"].value,
    fill: tokens.sys.color.secondary["container-contents"].value,
  },
  "tertiary-gray": {
    backgroundColor: tokens.sys.color["neutral-secondary"].container.value,
    color: tokens.sys.color["neutral-primary"].contents.value,
    fill: tokens.sys.color["neutral-primary"].contents.value,
  },
  "negative-primary": {
    backgroundColor: tokens.sys.color.error.contents.value,
    color: tokens.sys.color.primary["container-contents"].value,
    fill: tokens.sys.color.primary["container-contents"].value,
  },
  "negative-secondary": {
    backgroundColor: tokens.sys.color.error.container.value,
    color: tokens.sys.color.error.contents.value,
    fill: tokens.sys.color.error.contents.value,
  },
} as const

export const buttonVariantStyles = styleVariants(buttonVariantColors)

export const buttonContentStyle = style({
  paddingLeft: 4,
  paddingRight: 4,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
})

export const dynamicStyles = {
  hoverBackgroundColor: createVar(),
  activeBackgroundColor: createVar(),
}

export const buttonPseudoStyle = style({
  selectors: {
    "&:disabled": {
      backgroundColor: chroma(
        tokens.sys.color["neutral-secondary"].container.value
      )
        .alpha(tokens.sys.state.opacity["disabled-container"].value)
        .css(),
      color: chroma(tokens.sys.color["neutral-primary"].contents.value)
        .alpha(tokens.sys.state.opacity["disabled-contents"].value)
        .css(),
      fill: chroma(tokens.sys.color["neutral-primary"].contents.value)
        .alpha(tokens.sys.state.opacity["disabled-contents"].value)
        .css(),
      borderColor: chroma(tokens.sys.color["neutral-primary"].contents.value)
        .alpha(tokens.sys.state.opacity["disabled-contents"].value)
        .css(),
    },
    "&:hover:not([disabled])": {
      backgroundColor: dynamicStyles.hoverBackgroundColor,
    },
    "&:active:not([disabled])": {
      backgroundColor: dynamicStyles.activeBackgroundColor,
    },
  },
})
