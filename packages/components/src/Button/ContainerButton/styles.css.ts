import { style } from "@vanilla-extract/css"
import { tokens } from "@greenlabs/formula-design-token"

const { color } = tokens.sys

export const buttonContainerStyle = style({ boxSizing: "border-box" })

export const buttonColorStyles = {
  primary: style({
    backgroundColor: color.primary.container.value,
    color: color.primary["container-contents"].value,
  }),
  "secondary-color": style({
    backgroundColor: color["neutral-primary"].container.value,
    color: color.primary.contents.value,
  }),
  "secondary-gray": style({
    backgroundColor: color["neutral-primary"].container.value,
    color: color["neutral-primary"].contents.value,
  }),
  "tertiary-color": style({
    backgroundColor: color.secondary.container.value,
    color: color.secondary["container-contents"].value,
  }),
  "tertiary-gray": style({
    backgroundColor: color["neutral-secondary"].container.value,
    color: color["neutral-primary"].contents.value,
  }),
  "negative-primary": style({
    backgroundColor: color.error.contents.value,
    color: color.primary["container-contents"].value, // #FFF ?
  }),
  "negative-secondary": style({
    backgroundColor: color.error.container.value,
    color: color.error.contents.value,
  }),
}

// Todo - 아이콘이 왼쪽 또는 오른쪽에만 있는 케이스의 경우 중앙 정렬을 고려해야함 (스펙 미정)
// 카운트와 아이콘이 같이 존재하는 경우를 고려해야함
export const buttonAlignmentStyles = {
  // todo - if can use selector, add :nth-child() selector for icon padding
  default: style({ paddingLeft: 16, paddingRight: 16 }),
  onlyLeftIcon: style({ paddingLeft: 12, paddingRight: 16 }),
  onlyRightIcon: style({ paddingLeft: 16, paddingRight: 12 }),
}

// todo - font를 사이즈 스타일로 정의할지, 컴포넌트를 조합할지 (지금은 스타일 예정)
// check - spacing token에 정의되어있지 않은 스타일을 그냥 사용해도 무방한가?
export const buttonSizeStyles = {
  xs: style({
    fontSize: 15,
    paddingTop: 4.5,
    paddingBottom: 4.5,
    borderRadius: 6,
  }),
  sm: style({
    fontSize: 15,
    paddingTop: 8.5,
    paddingBottom: 8.5,
    borderRadius: 8,
  }),
  md: style({
    fontSize: 17,
    paddingTop: 11,
    paddingBottom: 11,
    borderRadius: 10,
  }),
  lg: style({
    fontSize: 19,
    paddingTop: 13.5,
    paddingBottom: 13.5,
    borderRadius: 10,
  }),
  xl: style({
    fontSize: 22,
    paddingTop: 15.5,
    paddingBottom: 15.5,
    borderRadius: 12,
  }),
}
