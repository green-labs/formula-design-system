import * as React from "react"
import type { Meta } from "@storybook/react"
import type { ComponentStory } from "@storybook/react"

import { RadioItem, RadioGroup } from "./Radio"
import { createDisabledArgs } from "../utils/storybook"
import { ThemeScope } from "../theme"

const Template: ComponentStory<typeof RadioGroup> = (args) => {
  return (
    <ThemeScope>
      <form style={{ margin: "20px 10px" }}>
        <label>plain radio group</label>
        <RadioGroup style={{ display: "flex", gap: "10px" }} {...args}>
          <RadioItem value="a" label="a" />
          <RadioItem value="b" label="b" />
          <RadioItem value="c" label="c" />
        </RadioGroup>
      </form>
      <form style={{ margin: "20px 10px" }}>
        <label>default selected</label>
        <RadioGroup style={{ display: "flex", gap: "10px" }} defaultValue="a">
          <RadioItem value="a" label="a" />
          <RadioItem value="b" label="b" />
        </RadioGroup>
      </form>
      <form style={{ margin: "20px 10px" }}>
        <label>disabled radio</label>
        <RadioGroup style={{ display: "flex", gap: "10px" }} defaultValue="a">
          <RadioItem value="a" label="a" disabled />
          <RadioItem value="b" label="b" disabled />
        </RadioGroup>
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
  title: "Formula/Controls/Radio",
  component: RadioItem,
} as Meta<typeof RadioItem>
