import * as React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"

import { Toggle } from "./Toggle"
import { createDisabledArgs } from "../utils/storybook"
import { ThemeScope } from "../theme"

const Template: ComponentStory<typeof Toggle> = (args) => {
  return (
    <ThemeScope>
      <form style={{ margin: "20px 10px" }}>
        <Toggle label="This is label" />
        <br />
        <Toggle {...args} />
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
  title: "Formula/Controls/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>
