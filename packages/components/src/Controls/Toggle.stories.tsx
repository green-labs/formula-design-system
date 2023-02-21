import * as React from "react"
import type { ComponentStory } from "@storybook/react"
import type { Meta } from "@storybook/react"

import { Toggle } from "./Toggle"
import { createDisabledArgs } from "../utils/storybook"
import { ThemeScope } from "../theme"

const Template: ComponentStory<typeof Toggle> = (args) => {
  return (
    <ThemeScope>
      <div style={{ margin: "20px 10px" }}>
        <Toggle defaultChecked={true} label="This is label" {...args} />
        <br />
        <Toggle label="disabled & off" disabled {...args} />
        <br />
        <Toggle
          label="disabled & on"
          defaultChecked={true}
          disabled
          {...args}
        />
      </div>
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
} as Meta<typeof Toggle>
