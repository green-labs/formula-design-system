import * as React from "react"
import type { Meta } from "@storybook/react"

import AnchorButton from "."
import { getCommonButtonStoryArgs } from "../commonButtonStoryArgs"
import { ThemeScope } from "../../theme"

const [args, argTypes] = getCommonButtonStoryArgs()
export const Button = {
  args,
  render: (args) => {
    return (
      <ThemeScope>
        <AnchorButton {...args} />
      </ThemeScope>
    )
  },
}

export default {
  title: "Formula/Buttons/AnchorButton",
  component: AnchorButton,
  argTypes,
} as Meta<typeof AnchorButton>
