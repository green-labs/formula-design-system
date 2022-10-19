import { tokens } from "@greenlabs/formula-design-token"
import { createVar, style, styleVariants } from "@vanilla-extract/css"
const { color, font } = tokens.sys

// 🛑 todo - extract하는 방법을 공용화해야함.
const extract = (obj: any) => {
  const keyMaps = [
    ["typeface", "fontFamily"],
    ["font-size", "fontSize"],
    ["tracking", "letterSpacing"],
    ["weight", "fontWeight"],
    ["leading", "lineHeight"],
  ]

  return keyMaps.reduce((nextObj, [objKey, cssKey]) => {
    // 🛑 todo - split common function
    // @ts-expect-error FIXME
    nextObj[cssKey] = obj[objKey].value
    return nextObj
  }, {})
}

export const buttonContainerStyle = style({
  display: "flex",
  alignItems: "center",
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

export const buttonTextContainerStyle = style({
  display: "flex",
  alignItems: "center",
})

export const buttonTextStyle = style({
  paddingLeft: 4,
  paddingRight: 4,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
})

export const buttonNotificationContainerStyle = style({ marginRight: 4 })

export const buttonNotificationColorVariants = styleVariants({
  primary: {
    backgroundColor: color.secondary.container.value,
    color: color.secondary["container-contents"].value,
  },

  "secondary-color": {
    backgroundColor: color.primary.container.value,
    color: color.primary["container-contents"].value,
  },

  "secondary-gray": {
    backgroundColor: color["neutral-primary"].contents.value,
    color: color["neutral-primary"].container.value,
  },

  "tertiary-color": {
    backgroundColor: color.secondary["container-contents"].value,
    color: color.secondary.container.value,
  },

  "tertiary-gray": {
    backgroundColor: color["neutral-primary"].contents.value,
    color: color["neutral-secondary"].container.value,
  },

  "negative-primary": {
    backgroundColor: color.primary["container-contents"].value,
    color: color.error.contents.value, // #FFF ?
  },

  "negative-secondary": {
    backgroundColor: color.error.contents.value,
    color: color.error.container.value,
  },
})

export const buttonSizeVariants = styleVariants({
  xs: { borderRadius: 6, height: 32, ...extract(font.body.sm.regular) },
  sm: { borderRadius: 8, height: 40, ...extract(font.body.sm.regular) },
  md: { borderRadius: 10, height: 48, ...extract(font.body.md.regular) },
  lg: { borderRadius: 10, height: 56, ...extract(font.body.lg.bold) },
  xl: { borderRadius: 12, height: 64, ...extract(font.body.xl.bold) },
})

const buttonBorderType = { borderStyle: "solid", borderWidth: 1 }

export const buttonVariantColors = {
  primary: {
    backgroundColor: color.primary.container.value,
    color: color.primary["container-contents"].value,
    fill: color.secondary.container.value,
  },
  "secondary-color": {
    backgroundColor: color["neutral-primary"].container.value,
    borderColor: color.primary.container.value,
    color: color.primary.contents.value,
    fill: color.primary.container.value,
    ...buttonBorderType,
  },
  "secondary-gray": {
    backgroundColor: color["neutral-primary"].container.value,
    borderColor: color.outline.value,
    color: color["neutral-primary"].contents.value,
    fill: color["neutral-primary"].contents.value,
    ...buttonBorderType,
  },
  "tertiary-color": {
    backgroundColor: color.secondary.container.value,
    color: color.secondary["container-contents"].value,
    fill: color.secondary["container-contents"].value,
  },
  "tertiary-gray": {
    backgroundColor: color["neutral-secondary"].container.value,
    color: color["neutral-primary"].contents.value,
    fill: color["neutral-primary"].contents.value,
  },
  "negative-primary": {
    backgroundColor: color.error.contents.value,
    color: color.primary["container-contents"].value,
    fill: color.primary["container-contents"].value,
  },
  "negative-secondary": {
    backgroundColor: color.error.container.value,
    color: color.error.contents.value,
    fill: color.error.contents.value,
  },
} as const

export const buttonVariantStyles = styleVariants(buttonVariantColors)

export const dynamicStyles = {
  hoverBackgroundColor: createVar(),
  activeBackgroundColor: createVar(),
}

export const buttonPseudoStyle = style({
  selectors: {
    "&:disabled": {
      backgroundColor: "#F0F2F599", // 🛑 todo - get color from token
      color: "#1F20244D",
      fill: "#1F20244D",
      borderColor: "#1F20244D",
    },
    "&:hover:not([disabled])": {
      backgroundColor: dynamicStyles.hoverBackgroundColor,
    },
    "&:active:not([disabled])": {
      backgroundColor: dynamicStyles.activeBackgroundColor,
    },
  },
})
