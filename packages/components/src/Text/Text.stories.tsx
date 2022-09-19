import { Text as TextComponent, TextProps } from "./Text"

import type { ComponentMeta } from "@storybook/react"

const Template = (args) => <TextComponent {...args} />
export const Text2 = Template.bind({})
Text2.args = {
  children: "Sample Text 샘플 텍스트",
}

export default {
  title: "Example/Text",
  component: TextComponent,
  argTypes: {
    variant: {
      name: "variant",
      control: "radio",
      options: [
        "caption-xs-regular",
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
      ],
    },
  },
} as ComponentMeta<typeof TextComponent>
