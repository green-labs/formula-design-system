import React from "react"
import type { Meta } from "@storybook/react"
import { getCommonButtonStoryArgs } from "../commonButtonStoryArgs"
import ContainerButton from "."
import "../../theme"
import { ThemeScope } from "../../theme"

const [args, argTypes] = getCommonButtonStoryArgs()
export const Button = {
  args,
  render: (args) => {
    return (
      <ThemeScope>
        <ContainerButton {...args} />
      </ThemeScope>
    )
  },
}

export default {
  title: "Formula/Buttons/ContainerButton",
  component: ContainerButton,
  argTypes,
} as Meta<typeof ContainerButton>
