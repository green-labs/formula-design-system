import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import ContainerButton from "./ContainerButton"
import * as IconComponents from "../../Icon/generated"

export const Button: ComponentStory<typeof ContainerButton> = (args) => {
  return <ContainerButton {...args} />
}

const Buttons = Button.bind({})

export default {
  title: "Example/Buttons/ContainerButton",
  component: Buttons,
  argTypes: {
    text: {
      defaultValue: "Button Text",
      control: { type: "text" },
    },
    size: {
      defaultValue: "xl",
      description: "버튼의 사이즈입니다.",
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      defaultValue: "primary",
      control: {
        type: "radio",
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
    },
    disabled: {
      defaultValue: true,
      control: "boolean",
      description: "버튼을 비활성화합니다.",
    },
    ShowCount: {
      defaultValue: false,
      control: "boolean",
      description: "(For Storybook) 카운트 뱃지를 활성화합니다.",
    },
    count: {
      defaultValue: 20,
      control: { type: "number" },
      if: { arg: "ShowCount" },
    },
    ShowLeftIcon: {
      defaultValue: false,
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
      defaultValue: false,
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
  },
} as ComponentMeta<typeof ContainerButton>
