import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import IconButton from "./IconButton"
import * as IconComponents from "../../Icon/generated"

export const Button: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />
}

const Buttons = Button.bind({})

export default {
  title: "Example/Buttons/IconButton",
  component: Buttons,
  argTypes: {
    size: {
      defaultValue: "xl",
      description: "버튼의 사이즈입니다.",
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
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
