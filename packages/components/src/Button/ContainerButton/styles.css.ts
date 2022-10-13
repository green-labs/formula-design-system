import { tokens } from "@greenlabs/formula-design-token"
import { style, styleVariants } from "@vanilla-extract/css"

const { color } = tokens.sys

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
    color: color.primary["container-contents"].value, // #FFF ?
    fill: color.primary["container-contents"].value,
  },
  "negative-secondary": {
    backgroundColor: color.error.container.value,
    color: color.error.contents.value,
    fill: color.error.contents.value,
  },
})

// todo - font를 사이즈 스타일로 정의할지, 컴포넌트를 조합할지 (지금은 스타일 예정)
// check - spacing token에 정의되어있지 않은 스타일을 그냥 사용해도 무방한가?
export const buttonSizeStyles = styleVariants({
  xs: {
    fontSize: 15,
    paddingTop: 4.5,
    paddingBottom: 4.5,
    borderRadius: 6,
    height: 32,
  },
  sm: {
    fontSize: 15,
    paddingTop: 8.5,
    paddingBottom: 8.5,
    borderRadius: 8,
    height: 40,
  },
  md: {
    fontSize: 17,
    paddingTop: 11,
    paddingBottom: 11,
    borderRadius: 10,
    height: 48,
  },
  lg: {
    fontSize: 19,
    paddingTop: 13.5,
    paddingBottom: 13.5,
    borderRadius: 10,
    height: 56,
  },
  xl: {
    fontSize: 22,
    paddingTop: 15.5,
    paddingBottom: 15.5,
    borderRadius: 12,
    height: 56,
  },
})
