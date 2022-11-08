import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import TextTabList from "./TextTabList"
import TabRoot from "../TabRoot"
import { createDisabledArgs } from "../../utils/storybook"

const Template: ComponentStory<typeof TextTabList> = (args) => {
  return (
    <>
      <TabRoot>
        <TextTabList>
          <TextTab>{"hey"}</TextTab>
          <TextTab>{"heyday"}</TextTab>
          <TextTab>{"heydaybay"}</TextTab>
        </TextTabList>
      </TabRoot>
    </>
  )
}

export const TextTab = Template.bind({})
TextTab.args = {}

const commonDisabled = createDisabledArgs(["props", "className"])

TextTab.argTypes = {
  ...commonDisabled,
}

export default {
  title: "Formula/Tab/Text",
  component: TextTabList,
} as ComponentMeta<typeof TextTabList>
