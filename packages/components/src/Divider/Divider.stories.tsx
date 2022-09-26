import { Divider} from "./Divider"


import type { ComponentMeta } from "@storybook/react"

const Template = (args) => <Divider {...args}/>
export const HorizontalSmall = Template.bind({})
HorizontalSmall.args={
  direction:"horizontal",
  size:"small"
}

export const HorizontalLarge = Template.bind({})
HorizontalLarge.args={
  direction:"horizontal",
  size:"large"
}

const VerticalTemplate = (args) => <div style={{height:"100vh"}}><Divider {...args}/></div>
export const VerticalSmall = VerticalTemplate.bind({})
VerticalSmall.args={
  direction:"vertical",
  size:"small"
}

export default {
  title: "Example/Divider",
  component: Divider
} as ComponentMeta<typeof Divider>