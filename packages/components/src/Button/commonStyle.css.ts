import { createVar, style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { tokens } from "@greenlabs/formula-design-token"
import { extract } from "../util"
import { get_RGBA_WithOpacity } from "../stateLayers"
import { getDefaultTransitionStyle } from "../transitionStyles.css"

const { font, color, state } = tokens.sys

export const flexCenterContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const fontSizeKeyMaps = [
  ["typeface", "fontFamily"],
  ["font-size", "fontSize"],
  ["tracking", "letterSpacing"],
  ["weight", "fontWeight"],
  ["leading", "lineHeight"],
]

const buttonSizes = {
  xs: {
    borderRadius: 6,
    height: 32,
    minWidth: 32,
    ...extract(font.body.sm.regular, fontSizeKeyMaps),
  },
  sm: {
    borderRadius: 8,
    height: 40,
    minWidth: 40,
    ...extract(font.body.sm.regular, fontSizeKeyMaps),
  },
  md: {
    borderRadius: 10,
    height: 48,
    minWidth: 48,
    ...extract(font.body.md.regular, fontSizeKeyMaps),
  },
  lg: {
    borderRadius: 12,
    height: 56,
    minWidth: 56,
    ...extract(font.body.lg.bold, fontSizeKeyMaps),
  },
  xl: {
    borderRadius: 12,
    height: 64,
    minWidth: 64,
    ...extract(font.body.xl.bold, fontSizeKeyMaps),
  },
} as const

export const customStyles = {
  customBackgroundColor: createVar(),
  customFontColor: createVar(),
  customFillColor: createVar(),
  customBorderColor: createVar(),
  customBorderWidth: createVar(),
  customBorderStyle: createVar(),
  customCountBackgroundColor: createVar(),
  customCountColor: createVar(),
}

export const stateStyles = {
  hoverBackgroundColor: createVar(),
  activeBackgroundColor: createVar(),
}

export const buttonColors = {
  primary: {
    backgroundColor: color.primary.container.value,
    color: color.primary["container-contents"].value,
  },
  "secondary-color": {
    backgroundColor: color["neutral-primary"].container.value,
    borderColor: color.primary.container.value,
    color: color.primary.contents.value,
    borderStyle: "solid",
    borderWidth: 1,
  },
  "secondary-gray": {
    backgroundColor: color["neutral-primary"].container.value,
    borderColor: color.outline.value,
    color: color["neutral-primary"].contents.value,
    borderStyle: "solid",
    borderWidth: 1,
  },
  "tertiary-color": {
    backgroundColor: color.secondary.container.value,
    color: color.secondary["container-contents"].value,
  },
  "tertiary-gray": {
    backgroundColor: color["neutral-secondary"].container.value,
    color: color["neutral-primary"].contents.value,
  },
  "negative-primary": {
    backgroundColor: color.error.contents.value,
    color: color.primary["container-contents"].value,
  },
  "negative-secondary": {
    backgroundColor: color.error.container.value,
    color: color.error.contents.value,
  },
  custom: {
    backgroundColor: customStyles.customBackgroundColor,
    borderColor: customStyles.customBorderColor,
    color: customStyles.customFontColor,
    borderStyle: customStyles.customBorderStyle,
    borderWidth: customStyles.customBorderWidth,
  },
} as const

// Icon Recipe
export const iconInContainerButtonStyle = recipe({
  base: [getDefaultTransitionStyle(["fill"])],
  variants: {
    color: {
      primary: { fill: color.secondary.container.value },
      "secondary-color": { fill: color.primary.container.value },
      "secondary-gray": { fill: color["neutral-primary"].contents.value },
      "tertiary-color": { fill: color.secondary["container-contents"].value },
      "tertiary-gray": { fill: color["neutral-primary"].contents.value },
      "negative-primary": { fill: color.primary["container-contents"].value },
      "negative-secondary": { fill: color.error.contents.value },
      custom: { fill: customStyles.customFillColor },
    },
    disabled: {
      true: {
        fill: get_RGBA_WithOpacity(
          color["neutral-primary"].contents.value,
          state.opacity["disabled-contents"].value
        ),
      },
    },
  },
})

// Container Button Recipe
export const containerButtonStyle = recipe({
  base: [
    getDefaultTransitionStyle([
      "border-width",
      "border-color",
      "border-style",
      "background-color",
      "color",
    ]),
    {
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

      selectors: {
        "&:disabled": {
          cursor: "not-allowed",
          backgroundColor: get_RGBA_WithOpacity(
            color["neutral-secondary"].container.value,
            state.opacity["disabled-container"].value
          ),
          color: get_RGBA_WithOpacity(
            color["neutral-primary"].contents.value,
            state.opacity["disabled-contents"].value
          ),
          borderColor: get_RGBA_WithOpacity(
            color["neutral-primary"].contents.value,
            state.opacity["disabled-contents"].value
          ),
        },
        "&:hover:not([disabled])": {
          backgroundColor: stateStyles.hoverBackgroundColor,
        },
        "&:active:not([disabled])": {
          backgroundColor: stateStyles.activeBackgroundColor,
        },
      },
    },
  ],

  variants: { color: buttonColors, size: buttonSizes },
})
