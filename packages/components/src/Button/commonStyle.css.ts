import { createVar, style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { tokens } from "@greenlabs/formula-design-token"
import { extract } from "../util"
import { get_RGBA_WithOpacity } from "../stateLayers"
import { getDefaultTransitionStyle } from "../transitionStyles.css"

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
    ...extract(tokens.sys.font.body.sm.regular, fontSizeKeyMaps),
  },
  sm: {
    borderRadius: 8,
    height: 40,
    minWidth: 40,
    ...extract(tokens.sys.font.body.sm.regular, fontSizeKeyMaps),
  },
  md: {
    borderRadius: 10,
    height: 48,
    minWidth: 48,
    ...extract(tokens.sys.font.body.md.regular, fontSizeKeyMaps),
  },
  lg: {
    borderRadius: 12,
    height: 56,
    minWidth: 56,
    ...extract(tokens.sys.font.body.lg.bold, fontSizeKeyMaps),
  },
  xl: {
    borderRadius: 12,
    height: 64,
    minWidth: 64,
    ...extract(tokens.sys.font.body.xl.bold, fontSizeKeyMaps),
  },
} as const

const buttonBorderLineStyle = { borderStyle: "solid", borderWidth: 1 }
export const buttonColors = {
  primary: {
    backgroundColor: tokens.sys.color.primary.container.value,
    color: tokens.sys.color.primary["container-contents"].value,
  },
  "secondary-color": {
    backgroundColor: tokens.sys.color["neutral-primary"].container.value,
    borderColor: tokens.sys.color.primary.container.value,
    color: tokens.sys.color.primary.contents.value,
    ...buttonBorderLineStyle,
  },
  "secondary-gray": {
    backgroundColor: tokens.sys.color["neutral-primary"].container.value,
    borderColor: tokens.sys.color.outline.value,
    color: tokens.sys.color["neutral-primary"].contents.value,
    ...buttonBorderLineStyle,
  },
  "tertiary-color": {
    backgroundColor: tokens.sys.color.secondary.container.value,
    color: tokens.sys.color.secondary["container-contents"].value,
  },
  "tertiary-gray": {
    backgroundColor: tokens.sys.color["neutral-secondary"].container.value,
    color: tokens.sys.color["neutral-primary"].contents.value,
  },
  "negative-primary": {
    backgroundColor: tokens.sys.color.error.contents.value,
    color: tokens.sys.color.primary["container-contents"].value,
  },
  "negative-secondary": {
    backgroundColor: tokens.sys.color.error.container.value,
    color: tokens.sys.color.error.contents.value,
  },
} as const

// ---------- Contents Styles ----------
export const buttonContentStyle = style({
  paddingLeft: 4,
  paddingRight: 4,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
})

// ---------- Dynamic Styles ----------
export const dynamicStyles = {
  // customBackgroundColor: createVar(),
  // customFontColor: createVar(),
  hoverBackgroundColor: createVar(),
  activeBackgroundColor: createVar(),
}

// Icon Recipe
export const iconInContainerButtonStyle = recipe({
  base: [getDefaultTransitionStyle(["fill"])],
  variants: {
    color: {
      primary: {
        fill: tokens.sys.color.secondary.container.value,
      },
      "secondary-color": {
        fill: tokens.sys.color.primary.container.value,
      },
      "secondary-gray": {
        fill: tokens.sys.color["neutral-primary"].contents.value,
      },
      "tertiary-color": {
        fill: tokens.sys.color.secondary["container-contents"].value,
      },
      "tertiary-gray": {
        fill: tokens.sys.color["neutral-primary"].contents.value,
      },
      "negative-primary": {
        fill: tokens.sys.color.primary["container-contents"].value,
      },
      "negative-secondary": {
        fill: tokens.sys.color.error.contents.value,
      },
    },
    disabled: {
      true: {
        fill: get_RGBA_WithOpacity(
          tokens.sys.color["neutral-primary"].contents.value,
          tokens.sys.state.opacity["disabled-contents"].value
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
            tokens.sys.color["neutral-secondary"].container.value,
            tokens.sys.state.opacity["disabled-container"].value
          ),
          color: get_RGBA_WithOpacity(
            tokens.sys.color["neutral-primary"].contents.value,
            tokens.sys.state.opacity["disabled-contents"].value
          ),
          borderColor: get_RGBA_WithOpacity(
            tokens.sys.color["neutral-primary"].contents.value,
            tokens.sys.state.opacity["disabled-contents"].value
          ),
        },
        "&:hover:not([disabled])": {
          backgroundColor: dynamicStyles.hoverBackgroundColor,
        },
        "&:active:not([disabled])": {
          backgroundColor: dynamicStyles.activeBackgroundColor,
        },
      },
    },
  ],

  variants: { color: buttonColors, size: buttonSizes },
})
