import { Text as TextComponent } from "./Text"

import type { ComponentMeta } from "@storybook/react"

const Template = (args) => <TextComponent {...args} />
export const General = Template.bind({})
General.title = "asdf"
General.args = {
  variantKey: "body-lg-medium",
  children: "Sample Text 샘플 텍스트",
}
General.argTypes = {
  variantKey: {
    name: "variantKey",
    control: "radio",
    options: [
      "body-lg-medium",
      "body-lg-regular",
      "body-lg-bold",
      "body-md-medium",
      "body-md-regular",
      "body-md-bold",
      "body-sm-medium",
      "body-sm-regular",
      "body-sm-bold",
      "body-xl-regular",
      "body-xl-bold",
      "headline-sm-bold",
      "headline-sm-regular",
      "headline-md-bold",
      "headline-lg-bold",
      "headline-xl-bold",
      "caption-xs-regular",
    ],
  },
}

export const Body = Template.bind({})
Body.args = {
  variant: "body",
  size: "sm",
  weight: "medium",
  children: "Sample Text 샘플 텍스트",
}
Body.argTypes = {
  size: {
    name: "size",
    control: "radio",
    options: ["sm", "md", "lg", "xs"],
  },
  weight: {
    name: "weight",
    control: "radio",
    options: ["medium", "regular", "bold"],
  },
  variant: {
    table: {
      disable: true,
    },
  },
}

// TODO: disable control args
export const Headline = Template.bind({})
Headline.args = { ...Body.args, variant: "headline" }
Headline.argTypes = { ...Body.argTypes }

export const Caption = Template.bind({})
Caption.args = { ...Body.args, variant: "caption" }
Caption.argTypes = { ...Body.argTypes }

export default {
  title: "Example/Text",
  component: TextComponent,
} as ComponentMeta<typeof TextComponent>
