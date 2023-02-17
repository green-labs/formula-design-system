import * as IconComponents from "../Icon/generated"

const args = {
  block: false,
  disabled: false,
  size: "xl",
  text: "Button Text",
  color: "primary",
  ShowCount: false,
  ShowLeftIcon: false,
  ShowRightIcon: false,
  count: 20,
  icon: "ArrowDownLineBold",
}

const argTypes = {
  block: {
    control: "boolean",
  },
  disabled: {
    control: "boolean",
    description: "버튼을 비활성화합니다.",
  },
  text: {
    control: "text",
  },
  size: {
    description: "버튼의 사이즈입니다.",
    control: "radio",
    options: ["xs", "sm", "md", "lg", "xl"],
  },
  color: {
    control: "radio",
    options: [
      "primary",
      "secondary-gray",
      "secondary-color",
      "tertiary-gray",
      "tertiary-color",
      "negative-primary",
      "negative-secondary",
    ],
  },
  ShowCount: {
    control: "boolean",
    description: "(For Storybook) 카운트 뱃지를 활성화합니다.",
  },
  count: {
    if: { arg: "ShowCount" },
    control: "number",
  },
  ShowLeftIcon: {
    control: "boolean",
    description: "(For Storybook) 좌측 아이콘을 활성화합니다.",
  },
  leftIcon: {
    if: { arg: "ShowLeftIcon" },
    control: { type: "select" },
    options: Object.keys(IconComponents),
    mapping: Object.entries(IconComponents).reduce(
      (p, [key, component]) => ({ ...p, [key]: component }),
      {}
    ),
  },
  ShowRightIcon: {
    control: "boolean",
    description: "(For Storybook) 우측 아이콘을 활성화합니다.",
  },
  rightIcon: {
    if: { arg: "ShowRightIcon" },
    control: { type: "select" },
    options: Object.keys(IconComponents),
    mapping: Object.entries(IconComponents).reduce(
      (p, [key, component]) => ({ ...p, [key]: component }),
      {}
    ),
  },
}

export function getCommonButtonStoryArgs() {
  return [args, argTypes]
}
