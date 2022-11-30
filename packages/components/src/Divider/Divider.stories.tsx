import * as React from "react"
import { Divider } from "./Divider"

import type { ComponentMeta } from "@storybook/react"
import { ThemeScope } from "../theme"

const Template = (args) => (
  <ThemeScope>
    <Divider {...args} />
  </ThemeScope>
)
export const HorizontalSmall = Template.bind({})
HorizontalSmall.args = {
  variant: "small",
}

export const HorizontalLarge = Template.bind({})
HorizontalLarge.args = {
  variant: "large",
}

const VerticalTemplate = (args) => (
  <ThemeScope props={{ style: { height: "100vh" } }}>
    <Divider {...args} />
  </ThemeScope>
)
export const VerticalSmall = VerticalTemplate.bind({})
VerticalSmall.args = {
  variant: "verticalSmall",
}

export default {
  title: "Formula/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>
