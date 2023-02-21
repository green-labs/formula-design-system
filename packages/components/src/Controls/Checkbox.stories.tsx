import * as React from "react"
import type { Meta } from "@storybook/react"
import type { ComponentStory } from "@storybook/react"

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
        <Checkbox label="disabled=true" disabled />
      </form>
      <form style={{ margin: "20px 10px" }}>
        <Checkbox label="disabled=true, checked" disabled defaultChecked />
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
} as Meta<typeof Checkbox>
