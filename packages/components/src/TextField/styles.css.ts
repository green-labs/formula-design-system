import {
  createVar,
  fallbackVar,
  style,
  styleVariants,
} from "@vanilla-extract/css"
import { tokens, colorMap } from "@greenlabs/formula-design-token"
// FIXME: usage of tokens object needs to be replaced with smaller object output

export const vars = {
  inputHeight: createVar(),
  inputFontSize: createVar(),
  backgroundColor: createVar(),
  titleColor: createVar(),
  stateColor: createVar(),
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
    backgroundColor: vars.backgroundColor,
    color: colorMap["neutral-primary-contents"],
    borderColor: fallbackVar(vars.stateColor, colorMap.outline),
    ":focus-within": {
      borderColor: fallbackVar(vars.stateColor, colorMap["primary-container"]),
    },
  },
])

export const componentStyle = styleVariants({
  "boxOutline.large": {},
  "boxOutline.medium": {},
  "boxOutline.small": {},
  "boxOutline.xsmall": {},
  "boxFill.large": {},
  "boxFill.medium": {},
  "boxFill.small": {},
  "boxFill.xsmall": {},
  "line.large": {
    vars: {
      [vars.iconOffset]: "4px",
      [vars.hintOffset]: "8px",
      [vars.titleOffset]: "2px",
    },
  },
  "line.medium": {
    vars: {
      [vars.iconOffset]: "8px",
      [vars.hintOffset]: "8px",
      [vars.titleOffset]: "2px",
    },
  },
})

export const hintStyle = style({
  paddingTop: fallbackVar(vars.hintOffset, consts.hintOffset),
  color: fallbackVar(vars.stateColor, colorMap["neutral-secondary-contents"]),
  fontSize: caption.xs.regular["font-size"].value,
  display: "block",
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

const fillCommon = style({ borderWidth: 0, borderRadius: "8px" })
const lineCommon = style({
  borderRadius: 0,
  borderWidth: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 1,
  borderBottomWidth: 1,
  ":focus-within": {
    paddingBottom: 0, // hack to hide els get lifted by border width
    borderBottomWidth: 2,
  },
})

export const textFieldVariants = styleVariants({
  "boxOutline.large": [
    textFieldSizeVariants.large,
    { borderRadius: "12px" /* FIXME: ref.radius.xsmall*/ },
  ],
  "boxOutline.medium": [
    textFieldSizeVariants.medium,
    { borderRadius: "10px" /* FIXME: ref.radius.xsmall*/ },
  ],
  "boxOutline.small": [
    textFieldSizeVariants.small,
    { borderRadius: "8px" /* FIXME: ref.radius.xsmall*/ },
  ],
  "boxOutline.xsmall": [
    textFieldSizeVariants.xsmall,
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
    { height: 33 + 8 + 8 },
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
    [`${lineCommon} &::placeholder, ${lineCommon} &`]: {
      // color: colorMap["neutral-primary-contents"],
    },
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
    },
  },
])

export const prefixIconStyle = style([
  vCentered,
  {
    marginRight: fallbackVar(vars.iconOffset, consts.iconOffset),
    width: "20px",
    height: "20px",
  },
])

export const suffixIconStyle = style([
  hvCentered,
  {
    width: "32px",
    height: "32px",
    marginLeft: fallbackVar(vars.iconOffset, consts.iconOffset),
    cursor: "pointer",
    selectors: {
      [`${inputStyle}:not(:placeholder-shown) ~ &`]: {
        marginLeft: consts.iconOffset, // note: clear icon이 있을 시 4px로 줄여줘야 하는 이슈 떄문에 오버라이드
      },
    },
  },
])
