import {
  createVar,
  fallbackVar,
  style,
  styleVariants,
} from "@vanilla-extract/css"
import { tokens, colorMap } from "@greenlabs/formula-design-token"
import { stateClass } from "./common"
// FIXME: usage of tokens object needs to be replaced with smaller object output

export const vars = {
  inputHeight: createVar(),
  inputFontSize: createVar(),
  backgroundColor: createVar(),
  titleColor: createVar(),
  stateColor: createVar(), // error color | undefined(normal)
  iconOffset: createVar(),
  hintOffset: createVar(),
  titleOffset: createVar(),
}

const consts = {
  iconOffset: "4px",
  hintOffset: "4px",
  titleOffset: "8px",
}

const { body, caption } = tokens.sys.font

const vCentered = style({
  display: "flex",
  alignItems: "center",
})

const hvCentered = style([
  vCentered,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
])

const containerStyle = style([
  vCentered,
  {
    borderWidth: "1px",
    borderStyle: "solid",
    color: colorMap["neutral-primary-contents"],
    borderColor: fallbackVar(vars.stateColor, colorMap.outline),
    ":focus-within": {
      borderColor: fallbackVar(vars.stateColor, colorMap["primary-container"]),
    },
  },
])

const componentCommon = style({
  selectors: {
    [`.${stateClass({ disabled: true })}&`]: {
      color: colorMap["gray-40"],
    },
    [`.${stateClass({ variantLine: true })}&`]: {
      vars: {
        [vars.titleColor]: colorMap["neutral-secondary-contents"],
      },
    },
    [`.${stateClass({ error: true })}&`]: {
      vars: {
        [vars.stateColor]: colorMap["error-contents"],
      },
    },
  },
})

export const componentStyle = styleVariants({
  "boxOutline.large": [componentCommon],
  "boxOutline.medium": [componentCommon],
  "boxOutline.small": [componentCommon],
  "boxOutline.xsmall": [componentCommon],
  "boxFill.large": [componentCommon],
  "boxFill.medium": [componentCommon],
  "boxFill.small": [componentCommon],
  "boxFill.xsmall": [componentCommon],
  "line.large": [
    componentCommon,
    {
      vars: {
        [vars.iconOffset]: "4px",
        [vars.hintOffset]: "8px",
        [vars.titleOffset]: "2px",
      },
    },
  ],
  "line.medium": [
    componentCommon,
    {
      vars: {
        [vars.iconOffset]: "8px",
        [vars.hintOffset]: "8px",
        [vars.titleOffset]: "2px",
      },
    },
  ],
})

export const hintStyle = style({
  paddingTop: fallbackVar(vars.hintOffset, consts.hintOffset),
  color: fallbackVar(vars.stateColor, colorMap["neutral-secondary-contents"]),
  fontSize: body.sm.regular["font-size"].value,
  display: "block",
  selectors: {
    // apply caption.xs.regular to small, xsmall size variants
    [`${componentStyle["boxFill.small"]} &, ${componentStyle["boxFill.xsmall"]} &, ${componentStyle["boxOutline.small"]} &, ${componentStyle["boxOutline.xsmall"]} &`]:
      {
        fontSize: caption.xs.regular["font-size"].value,
      },
    // when focused (or if have errornous state) apply different text color
    ":focus-within ~ &": {
      color: fallbackVar(vars.stateColor, colorMap["green-70"]),
    },
  },
})

export const textFieldSizeVariants = styleVariants({
  large: [
    containerStyle,
    {
      vars: {
        [vars.inputHeight]: "26px",
        [vars.inputFontSize]: body.md.regular["font-size"].value,
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
        [vars.inputHeight]: "26px",
        [vars.inputFontSize]: body.md.regular["font-size"].value,
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
        [vars.inputHeight]: "23px",
        [vars.inputFontSize]: body.sm.regular["font-size"].value,
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
        [vars.inputHeight]: "19px",
        [vars.inputFontSize]: caption.xs.regular["font-size"].value,
      },
      paddingLeft: "8px",
      paddingRight: "2px",
      height: "32px",
    },
  ],
})

const boxCommon = style({
  backgroundColor: vars.backgroundColor,
  selectors: {
    [`.${stateClass({ disabled: true })} &`]: {
      vars: {
        [vars.backgroundColor]: colorMap["gray-10"],
      },
    },
  },
})

const fillCommon = style([
  boxCommon,
  {
    borderColor: fallbackVar(vars.stateColor, vars.backgroundColor),
    borderRadius: "8px",
    vars: {
      [vars.backgroundColor]: colorMap["neutral-secondary-container"],
    },
  },
])

const lineCommon = style({
  borderRadius: 0,
  borderWidth: 0,
  paddingLeft: 0,
  paddingRight: 0,
  // hack to hide els get lifted by border width
  paddingBottom: 1,
  borderBottomWidth: 1,
  ":focus-within": {
    paddingBottom: 0,
    borderBottomWidth: 2,
  },
})

export const textFieldVariants = styleVariants({
  "boxOutline.large": [
    textFieldSizeVariants.large,
    boxCommon,
    { borderRadius: "12px" /* FIXME: ref.radius.xsmall*/ },
  ],
  "boxOutline.medium": [
    textFieldSizeVariants.medium,
    boxCommon,
    { borderRadius: "10px" /* FIXME: ref.radius.xsmall*/ },
  ],
  "boxOutline.small": [
    textFieldSizeVariants.small,
    boxCommon,
    { borderRadius: "8px" /* FIXME: ref.radius.xsmall*/ },
  ],
  "boxOutline.xsmall": [
    textFieldSizeVariants.xsmall,
    boxCommon,
    { borderRadius: "6px" /* FIXME: ref.radius.xsmall*/ },
  ],
  "boxFill.large": [textFieldSizeVariants.large, fillCommon],
  "boxFill.medium": [textFieldSizeVariants.medium, fillCommon],
  "boxFill.small": [textFieldSizeVariants.small, fillCommon],
  "boxFill.xsmall": [textFieldSizeVariants.xsmall, fillCommon],
  "line.large": [
    textFieldSizeVariants.large,
    lineCommon,
    { height: 33 + 8 + 8 },
  ],
  "line.medium": [
    textFieldSizeVariants.medium,
    lineCommon,
    { height: 29 + 8 + 8 },
  ],
})

export const titleStyle = style({
  color: fallbackVar(vars.titleColor, colorMap["gray-90"]),
  paddingBottom: fallbackVar(vars.titleOffset, consts.titleOffset),
  display: "block",
})

export const inputStyle = style({
  display: "block",
  border: "none",
  padding: 0,
  height: vars.inputHeight,
  backgroundColor: vars.backgroundColor,
  fontSize: vars.inputFontSize,
  flexGrow: 1,
  caretColor: colorMap["primary-contents"],
  color: colorMap["neutral-primary-contents"],
  "::placeholder": {
    color: colorMap["gray-40"],
  },
  ":focus": {
    outline: "none", // FIXME
  },
  selectors: {
    [`${textFieldVariants["line.large"]} &`]: {
      height: 33,
    },
    [`${textFieldVariants["line.medium"]} &`]: {
      height: 29,
    },
    [`${textFieldVariants["line.large"]} &::placeholder, ${textFieldVariants["line.large"]} &`]:
      {
        fontSize: body.xl.regular["font-size"].value,
      },
    [`${textFieldVariants["line.medium"]} &::placeholder, ${textFieldVariants["line.medium"]} &`]:
      {
        fontSize: body.lg.regular["font-size"].value,
      },
    [`.${stateClass({ disabled: true })} &`]: {
      color: colorMap["gray-40"],
    },
  },
})

export const clearButtonStyle = style([
  hvCentered,
  {
    cursor: "pointer",
    display: "none",
    width: "28px",
    height: "28px",
    selectors: {
      [`${inputStyle}:not(:placeholder-shown) ~ &`]: {
        display: "flex",
      },
      [`.${stateClass({ disabled: true })} &, .${stateClass({
        readOnly: true,
      })} &`]: {
        visibility: "hidden",
      },
    },
  },
])

export const prefixStyle = style([
  hvCentered,
  {
    marginRight: fallbackVar(vars.iconOffset, consts.iconOffset),
    selectors: {
      [`${textFieldVariants["line.large"]} &`]: {
        fontSize: 22,
      },
      [`${textFieldVariants["line.medium"]} &`]: {
        fontSize: 19,
      },
    },
  },
])

export const prefixIconStyle = style([
  prefixStyle,
  {
    width: "20px",
    height: "20px",
  },
])

export const suffixStyle = style([
  hvCentered,
  {
    marginLeft: fallbackVar(vars.iconOffset, consts.iconOffset),
    cursor: "pointer",
    selectors: {
      [`${inputStyle}:not(:placeholder-shown) ~ &`]: {
        marginLeft: consts.iconOffset, // note: clear icon이 있을 시 4px로 줄여줘야 하는 이슈 떄문에 오버라이드
      },
      [`${textFieldVariants["line.large"]} &`]: {
        fontSize: 22,
      },
      [`${textFieldVariants["line.medium"]} &`]: {
        fontSize: 19,
      },
    },
  },
])

export const suffixIconStyle = style([
  suffixStyle,
  {
    width: "32px",
    height: "32px",
  },
])
