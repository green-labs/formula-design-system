import * as React from "react"
import type { Meta } from "@storybook/react"
import * as IconComponents from "../../Icon/generated"

import IconButton from "."
import { ThemeScope } from "../../theme"

export const Button = {
  args: {
    disabled: false,
    size: "xl",
    color: "primary",
    icon: "ArrowDownLineBold",
  },
  render: (args) => {
    return (
      <ThemeScope>
        <IconButton {...args} />
      </ThemeScope>
    )
  },
}

export default {
  title: "Formula/Buttons/IconButton",
  component: IconButton,
  argTypes: {
    disabled: {
      control: "boolean",
      description: "버튼을 비활성화합니다.",
    },
    size: {
      description: "버튼의 사이즈입니다.",
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      options: [
        "primary",
        "secondary-gray",
        "secondary-color",
        "tertiary-gray",
        "tertiary-color",
        "negative-primary",
        "negative-secondary",
      ],
      control: "radio",
    },
    icon: {
      control: "select",
      options: Object.keys(IconComponents),
      mapping: Object.entries(IconComponents).reduce(
        (p, [key, component]) => ({ ...p, [key]: component }),
        {}
      ),
    },
  },
} as Meta<typeof IconButton>
