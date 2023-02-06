import * as React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"

import { Checkbox } from "./Checkbox"
import { createDisabledArgs } from "../utils/storybook"
import { ThemeScope } from "../theme"

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <ThemeScope>
      <form style={{ margin: "20px 10px" }}>
        <Checkbox {...args} />
      </form>
      <form style={{ margin: "20px 10px" }}>
        disabled=true
        <Checkbox disabled />
      </form>
      <form style={{ margin: "20px 10px" }}>
        disabled=true, checked
        <Checkbox disabled defaultChecked />
      </form>
      <form style={{ margin: "20px 10px" }}>
        <Checkbox label="w/ Control label" />
      </form>
    </ThemeScope>
  )
}

const textControl = {
  defaultValue: "",
  control: { type: "text" },
}

const commonDisabled = createDisabledArgs([
  "props",
  "className",
  "onChange",
  "onFocus",
  "name",
  "onBlur",
  "onKeyDown",
  "onKeyUp",
  "form",
  "id",
  "autoFocus",
])

const controls = {
  label: textControl,
}

export const Overview = Template.bind({})
Overview.args = {}
Overview.argTypes = {
  ...commonDisabled,
  ...controls,
}

export default {
  title: "Formula/Controls/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>
