import type { ComponentMeta, ComponentStory } from "@storybook/react"
import * as IconComponents from "./generated"
import type { ArrowDownLineBoldIcon } from "."

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

export const IconGallery: ComponentStory<typeof ArrowDownLineBoldIcon> = (
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
  title: "Example/Icon",
  component: Icons,
  argTypes: {
    size: {
      defaultValue: "XL",
      description: "아이콘의 사이즈입니다.",
      control: { type: "radio" },
      options: ["PC", "XL", "LG", "SM", "XS"],
    },
    fill: {
      control: { type: "color" },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          overflow: "hidden",
          flexFlow: "wrap",
          gap: 30,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ArrowDownLineBoldIcon>
