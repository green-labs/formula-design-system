import * as React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"

import { RadioItem, RadioGroup } from "./Radio"
import { createDisabledArgs } from "../utils/storybook"
import { ThemeScope } from "../theme"

const Template: ComponentStory<typeof RadioItem> = (args) => {
  return (
    <ThemeScope>
      <form style={{ margin: "20px 10px" }}>
        <RadioGroup defaultValue="a">
          <RadioItem value="a" label="a" />
          <RadioItem value="b" label="b" />
          <RadioItem value="c" label="c" />
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
} as ComponentMeta<typeof RadioItem>
