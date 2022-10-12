import { tokens } from "@greenlabs/formula-design-token"
import { style, styleVariants } from "@vanilla-extract/css"

const { color } = tokens.sys

export const buttonContainerStyle = style({
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box", // todo - check css attribute
  paddingLeft: 12,
  paddingRight: 12,
  cursor: "pointer",
  border: "none",
  margin: 0,
  overflow: "visible",
  background: "transparent",
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

// todo - split notification
const notificationBaseStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 4,
  borderRadius: 10,
  fontWeight: 500,
  minWidth: 8,
})

const notificationSmallStyle = style({
  padding: "1px 4px",
  fontSize: 12,
  fontWeight: 500,
})

const notificationMediumStyle = style({
  padding: "1.5px 6px",
  fontSize: 14,
  fontWeight: 500,
})

export const buttonNotificationSizeStyle = styleVariants({
  xs: [notificationSmallStyle],
  sm: [notificationSmallStyle],
  md: [notificationSmallStyle],
  lg: [notificationMediumStyle],
  xl: [notificationMediumStyle],
})

export const buttonNotificationContainerStyle = styleVariants({
  primary: [
    notificationBaseStyle,
    {
      backgroundColor: color.secondary.container.value,
      color: color.secondary["container-contents"].value,
    },
  ],
  "secondary-color": [
    notificationBaseStyle,
    {
      backgroundColor: color.primary.container.value,
      color: color.primary["container-contents"].value,
    },
  ],
  "secondary-gray": [
    notificationBaseStyle,
    {
      backgroundColor: color["neutral-primary"].contents.value,
      color: color["neutral-primary"].container.value,
    },
  ],
  "tertiary-color": [
    notificationBaseStyle,
    {
      backgroundColor: color.secondary["container-contents"].value,
      color: color.secondary.container.value,
    },
  ],
  "tertiary-gray": [
    notificationBaseStyle,
    {
      backgroundColor: color["neutral-primary"].contents.value,
      color: color["neutral-secondary"].container.value,
    },
  ],
  "negative-primary": [
    notificationBaseStyle,
    {
      backgroundColor: color.primary["container-contents"].value,
      color: color.error.contents.value, // #FFF ?
    },
  ],
  "negative-secondary": [
    notificationBaseStyle,
    {
      backgroundColor: color.error.contents.value,
      color: color.error.container.value,
    },
  ],
})

// --- notification style end ---

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
