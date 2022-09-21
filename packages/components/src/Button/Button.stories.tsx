import { Button } from "./Button"

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    size: {
      name: "size",
      control: "radio",
      options: ["small", "medium", "large"],
    },
    children: {
      name: "children",
      control: "text",
    },
  },
}

const Template = (args) => <Button {...args} />

export const Button_ = Template.bind({})
Button_.args = { size: "medium", children: "Example Button" }
