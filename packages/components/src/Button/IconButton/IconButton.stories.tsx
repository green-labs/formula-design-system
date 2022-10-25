import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import IconButton from "."
import * as IconComponents from "../../Icon/generated"

export const Button: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />
}

const Buttons = Button.bind({})

export default {
  title: "Example/Buttons/IconButton",
  component: Buttons,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: "boolean",
      description: "버튼을 비활성화합니다.",
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
          "custom",
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

    ShowCustomStyle: {
      defaultValue: false,
      control: "boolean",
      description: "(For Storybook) 커스텀 스타일 옵션을 활성화합니다.",
    },
    customStyle: {
      if: { arg: "ShowCustomStyle" },
      control: { type: "object" },
      defaultValue: {
        backgroundColor: "#34e7e4",
        color: "white",
        borderStyle: "solid",
        borderColor: "#1e272e",
        borderWidth: "3px",
        fill: "#ef5777",
      },
    },
    icon: {
      defaultValue: IconComponents.ArrowDownLineBold,
      control: { type: "select" },
      options: Object.keys(IconComponents),
      mapping: Object.entries(IconComponents).reduce(
        (p, [key, component]) => ({ ...p, [key]: component }),
        {}
      ),
    },
  },
} as ComponentMeta<typeof IconButton>
