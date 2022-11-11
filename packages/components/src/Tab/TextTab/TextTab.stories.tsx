import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import * as Tab from "./TextTab"
import { createDisabledArgs } from "../../utils/storybook"

const Template = (args) => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Tab.List
        defaultValue="a"
        onValueChange={(_) => {}}
        contents={
          <>
            <Tab.Content value="a">this is a</Tab.Content>
            <Tab.Content value="b">this is b</Tab.Content>
            <Tab.Content value="c">this is c</Tab.Content>
          </>
        }
      >
        <Tab.Trigger value="a">텍스트 a</Tab.Trigger>
        <Tab.Trigger value="b">텍스트 b</Tab.Trigger>
        <Tab.Trigger value="c">텍스트 c</Tab.Trigger>
      </Tab.List>
    </div>
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
  component: TextTab,
} as ComponentMeta<typeof TextTab>
