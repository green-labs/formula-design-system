import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import { colorMap } from "@greenlabs/formula-design-token"
import * as IconComponents from "./generated"

/* ---------- 아이콘 스타일 래퍼 시작 ----------*/

interface IconItemProps {
  icon: React.ReactNode
  children?: React.ReactNode
}

// Todo - support code copy(ts, res) handler
const IconItem: React.FC<IconItemProps> = ({ icon, children }) => {
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
          width: 60,
          height: 60,
          marginBottom: 10,
        }}
      >
        {icon}
      </div>
      {children}
    </div>
  )
}

/* ---------- 아이콘 스타일 래퍼 끝 ----------*/

export const IconGallery: ComponentStory<
  typeof IconComponents["ArrowDownLineBold"]
> = (args) => {
  const { color, size } = args

  const copyToTypescript = (name) => {
    const code = `<${name} color="${color}" size="${size}" />`
    navigator.clipboard.writeText(code)
  }

  const copyToRescript = (name) => {
    const code = `<Formula.Icon.${name} color={#"${color}"} size={#${size}} />`
    navigator.clipboard.writeText(code)
  }

  return (
    <>
      {Object.entries(IconComponents).map(([name, Component]) => {
        const buttonCommonStyle = {
          borderRadius: "4px",
          cursor: "pointer",
          border: "none",
          color: "white",
          padding: "5px 10px",
        }
        const iconComponent = <Component {...args} />
        return (
          <IconItem icon={iconComponent}>
            <div>{name}</div>
            <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
              <button
                onClick={() => copyToTypescript(name)}
                style={{ ...buttonCommonStyle, backgroundColor: "#007acc" }}
              >
                Typescript
              </button>
              <button
                onClick={() => copyToRescript(name)}
                style={{ ...buttonCommonStyle, backgroundColor: "#E6484F" }}
              >
                Rescript
              </button>
            </div>
          </IconItem>
        )
      })}
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
      description:
        "pc - (36px)<br/>xl - (24px)<br/>lg - (20px)<br/>sm - (16px)<br/>xs - (12px)<br/> 기본 사이즈는 xl입니다.",
      control: { type: "radio" },
      options: ["pc", "xl", "lg", "sm", "xs"],
    },
    sizePx: {
      defaultValue: undefined,
      description:
        "size보다 우선적으로 적용됩니다.<br/>엣지케이스에 대한 사이즈가 필요한 경우에만 사용하세요.",
      control: { type: "number" },
    },
    color: {
      control: { type: "select" },
      options: Object.keys(colorMap),
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
// Typescript Examples
<CalendarLineBold />
<CalendarLineRegular color="lightblue-90" />
<CalendarLineThin size="pc" />
<CalendarFill sizePx={32} /> // for custom size
<CalendarFill classname="test-class__name" />
<CalendarFill style={{ fill: "red" }} />

// Rescript Examples
<Formula.Icon.CalendarLineBold />
<Formula.Icon.CalendarLineRegular color=#"lightblue-90" />
<Formula.Icon.CalendarLineThin size=#pc />
<Formula.Icon.CalendarFill sizePx=32 /> // for custom size
<Formula.Icon.CalendarFill classname="test-class__name" />
<Formula.Icon.CalendarFill style={ReactDOMStyle.make(~fill="red", ())} />
        `,
      },
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
} as ComponentMeta<typeof IconComponents["ArrowDownLineBold"]>
