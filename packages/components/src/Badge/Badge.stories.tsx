import React from "react"
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
      <BadgeComponent icon={<CheckLineBold />} />
    </div>
  )
}

export const Badge = Template.bind({})
// Badge.args = {}

Badge.argTypes = {
  ...createDisabledArgs(["props", "className"]),
}

export default {
  title: "Formula/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>
