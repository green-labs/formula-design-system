import {
  createVar,
  fallbackVar,
  style,
  styleVariants,
} from "@vanilla-extract/css"
import { tokens, colorMap } from "@greenlabs/formula-design-token"
// FIXME: usage of tokens object needs to be replaced with smaller object output

const inputHeight = createVar()
const inputFontSize = createVar()
export const backgroundColor = createVar()

const containerStyle = style({
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: colorMap.outline,
  backgroundColor: backgroundColor,
  color: colorMap["neutral-primary-contents"],
  display: "flex",
  alignItems: "center",
  ":focus-within": {
    borderColor: colorMap["primary-container"],
  },
})

export const inputStyle = style({
  display: "block",
  border: "none",
  padding: 0,
  height: inputHeight,
  backgroundColor: backgroundColor,
  fontSize: inputFontSize,
  flexGrow: 1,
  caretColor: colorMap["primary-contents"],
  "::placeholder": {
    color: colorMap["gray-40"],
  },
  ":focus": {
    outline: "none", // FIXME
  },
})

export const prefixIconStyle = style({
  display: "flex",
  alignItems: "center",
  marginRight: "4px",
  width: "20px",
  height: "20px",
})

export const suffixIconStyle = style({
  display: "flex",
  alignItems: "center",
  width: "32px",
  height: "32px",
  justifyContent: "center",
  marginLeft: "4px",
})

export const titleStyle = style({
  color: colorMap["gray-90"],
  paddingBottom: "8px",
  display: "block",
})

export const hintStyle = style({
  paddingTop: "4px",
  color: colorMap["neutral-secondary-contents"],
  fontSize: tokens.sys.font.caption.xs.regular["font-size"].value,
  display: "block",
})

export const textFieldSizeVariants = styleVariants({
  large: [
    containerStyle,
    {
      vars: {
        [inputHeight]: "26px",
        [inputFontSize]: tokens.sys.font.body.md.regular["font-size"].value,
      },
      paddingLeft: "16px",
      paddingRight: "8px",
      height: "56px",
    },
  ],
  medium: [
    containerStyle,
    {
      vars: {
        [inputHeight]: "26px",
        [inputFontSize]: tokens.sys.font.body.md.regular["font-size"].value,
      },
      paddingLeft: "12px",
      paddingRight: "4px",
      height: "48px",
    },
  ],
  small: [
    containerStyle,
    {
      vars: {
        [inputHeight]: "23px",
        [inputFontSize]: tokens.sys.font.body.sm.regular["font-size"].value,
      },
      paddingLeft: "12px",
      paddingRight: "6px",
      height: "40px",
    },
  ],
  xsmall: [
    containerStyle,
    {
      vars: {
        [inputHeight]: "19px",
        [inputFontSize]: tokens.sys.font.caption.xs.regular["font-size"].value,
      },
      paddingLeft: "8px",
      paddingRight: "2px",
      height: "32px",
    },
  ],
})

const fillCommon = style({ borderWidth: 0, borderRadius: "8px" })
const lineCommon = style({
  borderRadius: 0,
  borderWidth: 0,
  borderBottomWidth: 1,
  ":focus-within": {
    borderBottomWidth: 2,
  },
})

export const textFieldVariants = styleVariants({
  "outline.large": [
    textFieldSizeVariants.large,
    { borderRadius: "12px" /* FIXME: ref.radius.xsmall*/ },
  ],
  "outline.medium": [
    textFieldSizeVariants.medium,
    { borderRadius: "10px" /* FIXME: ref.radius.xsmall*/ },
  ],
  "outline.small": [
    textFieldSizeVariants.small,
    { borderRadius: "8px" /* FIXME: ref.radius.xsmall*/ },
  ],
  "outline.xsmall": [
    textFieldSizeVariants.xsmall,
    { borderRadius: "6px" /* FIXME: ref.radius.xsmall*/ },
  ],
  "fill.large": [textFieldSizeVariants.large, fillCommon],
  "fill.medium": [textFieldSizeVariants.medium, fillCommon],
  "fill.small": [textFieldSizeVariants.small, fillCommon],
  "fill.xsmall": [textFieldSizeVariants.xsmall, fillCommon],
  "line.large": [textFieldSizeVariants.large, lineCommon],
  "line.medium": [textFieldSizeVariants.medium, lineCommon],
  "line.small": [textFieldSizeVariants.medium, lineCommon],
  "line.xsmall": [textFieldSizeVariants.medium, lineCommon],
})
