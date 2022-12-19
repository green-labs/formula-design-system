import { createVar, style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { tokens } from "@greenlabs/formula-design-token"
import { extract } from "../utils/util"
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
    ...extract(font.body.sm.medium, fontSizeKeyMaps),
  },
  sm: {
    borderRadius: 8,
    height: 40,
    ...extract(font.body.sm.medium, fontSizeKeyMaps),
  },
  md: {
    borderRadius: 10,
    height: 48,
    ...extract(font.body.md.regular, fontSizeKeyMaps),
  },
  lg: {
    borderRadius: 12,
    height: 56,
    ...extract(font.body.lg.bold, fontSizeKeyMaps),
  },
  xl: {
    borderRadius: 12,
    height: 64,
    ...extract(font.body.xl.bold, fontSizeKeyMaps),
  },
} as const

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

export const commonButtonStyle = recipe({
  base: [
    getDefaultTransitionStyle([
      "border-width",
      "border-color",
      "border-style",
      "background-color",
      "color",
    ]),
    {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      verticalAlign: "middle",
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      textDecoration: "none",
      paddingLeft: 12,
      paddingRight: 12,
      cursor: "pointer",
      border: "none",
      margin: 0,
      overflow: "visible",
      outline: "none",

      appearance: "none",
      MozAppearance: "none",
      WebkitAppearance: "none",
      WebkitTapHighlightColor: "rgba(0,0,0,0)",

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

  variants: {
    color: buttonColors,
    size: buttonSizes,
    block: { true: { display: "flex", width: "100%" } },
  },
})
