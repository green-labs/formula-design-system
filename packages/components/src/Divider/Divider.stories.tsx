import { Divider } from "./Divider"
import "../root.css"

import type { ComponentMeta } from "@storybook/react"

const Template = (args) => <Divider {...args} />
export const HorizontalSmall = Template.bind({})
HorizontalSmall.args = {
  variant: "small",
}

export const HorizontalLarge = Template.bind({})
HorizontalLarge.args = {
  variant: "large",
}

const VerticalTemplate = (args) => (
  <div style={{ height: "100vh" }}>
    <Divider {...args} />
  </div>
)
export const VerticalSmall = VerticalTemplate.bind({})
VerticalSmall.args = {
  variant: "verticalSmall",
}

export default {
  title: "Formula/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>
