import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"

import IconButton from "."
import * as IconComponents from "../../Icon/generated"
import { ThemeScope } from "../../theme"

export const Button: StoryFn<typeof IconButton> = (args) => {
  return (
    <ThemeScope>
      <IconButton {...args} />
    </ThemeScope>
  )
}

const Buttons = Button.bind({})

export default {
  title: "Formula/Buttons/IconButton",
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
} as Meta<typeof IconButton>
