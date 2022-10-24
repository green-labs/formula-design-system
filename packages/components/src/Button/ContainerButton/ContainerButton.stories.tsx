import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import ContainerButton from "./ContainerButton"
import * as IconComponents from "../../Icon/generated"

export const Button: ComponentStory<typeof ContainerButton> = (args) => {
  return (
    <div style={{ display: "flex" }}>
      <ContainerButton
        {...args}
        customStyle={{ backgroundColor: "#f0f052", color: "white" }}
        style={{ border: "1px solid black" }}
      >
        <span style={{ display: "flex" }}>
          <span>아니이렇게쓸거asdfasdfasdfasdfasdf면 그냥 칠드런asdf</span>

          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconComponents.ArrowDownLineThin />
          </span>
        </span>
      </ContainerButton>
    </div>
  )
}

const Buttons = Button.bind({})

export default {
  title: "Example/Buttons/ContainerButton",
  component: Buttons,
  argTypes: {
    text: {
      defaultValue: "Button Text",
      control: { type: "text" },
    },
    size: {
      defaultValue: "xl",
      description: "버튼의 사이즈입니다.",
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      defaultValue: undefined,
      control: {
        type: "radio",
        options: [
          "custom",
          "primary",
          "secondary-gray",
          "secondary-color",
          "tertiary-gray",
          "tertiary-color",
          "negative-primary",
          "negative-secondary",
        ],
      },
    },
    disabled: {
      defaultValue: false,
      control: "boolean",
      description: "버튼을 비활성화합니다.",
    },
    ShowCount: {
      defaultValue: false,
      control: "boolean",
      description: "(For Storybook) 카운트 뱃지를 활성화합니다.",
    },
    count: {
      defaultValue: 20,
      control: { type: "number" },
      if: { arg: "ShowCount" },
    },
    ShowLeftIcon: {
      defaultValue: false,
      control: "boolean",
      description: "(For Storybook) 좌측 아이콘을 활성화합니다.",
    },
    leftIcon: {
      if: { arg: "ShowLeftIcon" },
      control: { type: "select" },
      options: Object.keys(IconComponents),
      mapping: Object.entries(IconComponents).reduce(
        (p, [key, component]) => ({ ...p, [key]: component }),
        {}
      ),
    },
    ShowRightIcon: {
      defaultValue: false,
      control: "boolean",
      description: "(For Storybook) 우측 아이콘을 활성화합니다.",
    },
    rightIcon: {
      if: { arg: "ShowRightIcon" },
      control: { type: "select" },
      options: Object.keys(IconComponents),
      mapping: Object.entries(IconComponents).reduce(
        (p, [key, component]) => ({ ...p, [key]: component }),
        {}
      ),
    },
  },
} as ComponentMeta<typeof ContainerButton>
