import { tokens } from "@greenlabs/formula-design-token"
import { style, styleVariants } from "@vanilla-extract/css"
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

  ":disabled": {
    cursor: "not-allowed",
  },
})

export const buttonTextContainer = style({
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

export const buttonNotificationColorStyle = styleVariants({
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

const buttonBorderType = style({ borderStyle: "solid", borderWidth: 1 })

export const buttonColorStyles = styleVariants({
  primary: {
    backgroundColor: color.primary.container.value,
    color: color.primary["container-contents"].value,
    fill: color.secondary.container.value,
  },
  "secondary-color": [
    buttonBorderType,
    {
      backgroundColor: color["neutral-primary"].container.value,
      borderColor: color.primary.container.value,
      color: color.primary.contents.value,
      fill: color.primary.container.value,
    },
  ],
  "secondary-gray": [
    buttonBorderType,
    {
      backgroundColor: color["neutral-primary"].container.value,
      borderColor: color.outline.value,
      color: color["neutral-primary"].contents.value,
      fill: color["neutral-primary"].contents.value,
    },
  ],
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
})

export const buttonSizeStyles = styleVariants({
  xs: { borderRadius: 6, height: 32, ...extract(font.body.sm.regular) },
  sm: { borderRadius: 8, height: 40, ...extract(font.body.sm.regular) },
  md: { borderRadius: 10, height: 48, ...extract(font.body.md.regular) },
  lg: { borderRadius: 10, height: 56, ...extract(font.body.lg.bold) },
  xl: { borderRadius: 12, height: 56, ...extract(font.body.xl.bold) },
})
