import { tokens } from "@greenlabs/formula-design-token"
import { createVar, style, styleVariants } from "@vanilla-extract/css"
const { color, font } = tokens.sys

const extract = (obj: any) => {
  const keyMaps = [
    ["typeface", "fontFamily"],
    ["font-size", "fontSize"],
    ["tracking", "letterSpacing"],
    ["weight", "fontWeight"],
    ["leading", "lineHeight"],
  ]

  return keyMaps.reduce((nextObj, [objKey, cssKey]) => {
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

  // todo - split common transition css
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

export const dynamicStyles = {
  backgroundColor: createVar(),
  borderColor: createVar(),
  borderStyle: createVar(),
  fillColor: createVar(),
  labelColor: createVar(),

  // hover
  hoverBackgroundColor: createVar(),

  // active
  activeBackgroundColor: createVar(),
}

export const buttonVariantStyle = style({
  backgroundColor: dynamicStyles.backgroundColor,
  color: dynamicStyles.labelColor,
  fill: dynamicStyles.fillColor,
  borderColor: dynamicStyles.borderColor,
  borderStyle: dynamicStyles.borderStyle,
  borderWidth: 1,
})

export const buttonStateStyle = style({
  selectors: {
    "&:disabled": {
      backgroundColor: "#F0F2F599", // todo - get color from token
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
