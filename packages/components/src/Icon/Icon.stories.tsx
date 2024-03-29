import React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { colorMap } from "@greenlabs/formula-design-token"
import * as IconComponents from "./generated"
import "../theme"
import { ThemeScope } from "../theme"

/* ---------- 아이콘 스타일 래퍼 시작 ----------*/

interface IconItemProps {
  name: string
  children?: React.ReactNode
}

// Todo - support code copy(ts, res) handler
const IconItem: React.FC<IconItemProps> = ({ name, children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #A9A9A9",
          borderRadius: "10px",
          width: 80,
          height: 80,
          marginBottom: 10,
        }}
      >
        {children}
      </div>
      <div>{name}</div>
    </div>
  )
}

/* ---------- 아이콘 스타일 래퍼 끝 ----------*/

export const IconGallery: StoryFn<typeof IconComponents["AppleFill"]> = (
  args
) => {
  return (
    <>
      {Object.entries(IconComponents).map(([name, Component]) => (
        <IconItem name={name}>
          <Component {...args} />
        </IconItem>
      ))}
    </>
  )
}

const Icons = IconGallery.bind({})

export default {
  title: "Formula/Icon",
  component: Icons,
  argTypes: {
    size: {
      defaultValue: "xl",
      description: "아이콘의 사이즈입니다.",
      control: { type: "radio" },
      options: ["pc", "xl", "lg", "sm", "xs"],
    },
    color: {
      control: { type: "select" },
      options: Object.keys(colorMap),
    },
  },
  decorators: [
    (Story) => (
      <ThemeScope
        props={{
          style: {
            marginTop: "20px",
            marginBottom: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            overflow: "hidden",
            flexFlow: "wrap",
            gap: 30,
          },
        }}
      >
        <Story />
      </ThemeScope>
    ),
  ],
} as Meta<typeof IconComponents["AppleFill"]>
