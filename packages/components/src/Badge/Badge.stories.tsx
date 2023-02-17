import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"

import { theme, ThemeScope } from "../theme"
import { Badge as BadgeComponent } from "./Badge"
import { createDisabledArgs } from "../utils/storybook"
import CheckLineBold from "../Icon/generated/CheckLineBold"

const Template: StoryFn<typeof BadgeComponent> = (args) => {
  return (
    <ThemeScope>
      <BadgeComponent size="small" />
      <hr />
      <BadgeComponent size="medium" />
      <hr />
      <BadgeComponent count="99" size="small" />
      <hr />
      <BadgeComponent count="99" size="medium" />
      <hr />
      <BadgeComponent
        icon={CheckLineBold}
        backgroundColor={theme.colors["green-60"]}
      />
      <hr />
      <BadgeComponent
        icon={CheckLineBold}
        backgroundColor="linear-gradient(141.34deg, #FF3998 18.89%, #F12136 82.66%)"
      />
    </ThemeScope>
  )
}

export const Badge = Template.bind({})

Badge.argTypes = {
  ...createDisabledArgs(["props", "className"]),
}

export default {
  title: "Formula/Badge",
  component: Badge,
} as Meta<typeof Badge>
