import { tokens } from "@greenlabs/formula-design-token"
import { style, styleVariants } from "@vanilla-extract/css"

const { color } = tokens.sys

export const buttonContainerStyle = style({
  display: "flex",
  justifyContent: "center",
  boxSizing: "border-box",
  paddingLeft: 12,
  paddingRight: 12,
})

// Todo - 아이콘이 왼쪽 또는 오른쪽에만 있는 케이스의 경우 중앙 정렬을 고려해야함 (스펙 미정)
export const buttonTextStyle = style({ paddingLeft: 4, paddingRight: 4 })

const buttonCountContainerBaseStyle = style({
  paddingRight: 16,
  borderRadius: 10,
})

export const buttonCountContainerStyle = styleVariants({
  primary: [
    buttonCountContainerBaseStyle,
    {
      backgroundColor: color.secondary.container.value,
      color: color.secondary["container-contents"].value,
    },
  ],
  "secondary-color": [
    buttonCountContainerBaseStyle,
    {
      backgroundColor: color.primary.container.value,
      color: color.primary["container-contents"].value,
    },
  ],
  "secondary-gray": [
    buttonCountContainerBaseStyle,
    {
      backgroundColor: color["neutral-primary"].contents.value,
      color: color["neutral-primary"].container.value,
    },
  ],
  "tertiary-color": [
    buttonCountContainerBaseStyle,
    {
      backgroundColor: color.secondary["container-contents"].value,
      color: color.secondary.container.value,
    },
  ],
  "tertiary-gray": [
    buttonCountContainerBaseStyle,
    {
      backgroundColor: color["neutral-primary"].contents.value,
      color: color["neutral-secondary"].container.value,
    },
  ],
  "negative-primary": [
    buttonCountContainerBaseStyle,
    {
      backgroundColor: color.primary["container-contents"].value,
      color: color.error.contents.value, // #FFF ?
    },
  ],
  "negative-secondary": [
    buttonCountContainerBaseStyle,
    {
      backgroundColor: color.error.contents.value,
      color: color.error.container.value,
    },
  ],
})

export const buttonColorStyles = styleVariants({
  primary: {
    backgroundColor: color.primary.container.value,
    color: color.primary["container-contents"].value,
  },
  "secondary-color": {
    backgroundColor: color["neutral-primary"].container.value,
    color: color.primary.contents.value,
  },
  "secondary-gray": {
    backgroundColor: color["neutral-primary"].container.value,
    color: color["neutral-primary"].contents.value,
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
    color: color.primary["container-contents"].value, // #FFF ?
  },
  "negative-secondary": {
    backgroundColor: color.error.container.value,
    color: color.error.contents.value,
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
