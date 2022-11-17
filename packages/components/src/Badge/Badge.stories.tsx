import React from "react"
import { theme } from "../root.css"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import { Badge as BadgeComponent } from "./Badge"
import { createDisabledArgs } from "../utils/storybook"
import CheckLineBold from "../Icon/generated/CheckLineBold"

const Template: ComponentStory<typeof BadgeComponent> = (args) => {
  return (
    <div>
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
    </div>
  )
}

export const Badge = Template.bind({})

Badge.argTypes = {
  ...createDisabledArgs(["props", "className"]),
}

export default {
  title: "Formula/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>
