import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import * as IconComponents from "../../Icon/generated"
import ContainerButton from "."

export const Component: ComponentStory<typeof ContainerButton> = (args) => {
  return <ContainerButton {...args} />
}

const Buttons = Component.bind({})

export default {
  title: "Formula/Buttons/ContainerButton",
  component: Buttons,
  args: {
    text: "Button label",
    color: "primary",
    size: "xl",
    block: false,
    disabled: false,
    ShowCount: false,
    count: 20,
    ShowLeftIcon: false,
    leftIcon: IconComponents.ArrowDownLineBold,
    ShowRightIcon: false,
    rightIcon: IconComponents.ShareArrowFill,
  },
  argTypes: {
    block: {
      description: `
${"`false`"} - 버튼은 자식 엘리먼트의 크기만큼 버튼이 늘어납니다.  
이 경우, 너비가 제한되어있지 않으므로 텍스트가 자동으로 생략되지 않습니다.  
${"`true`"} - 버튼을 부모의 너비에 맞춥니다.   
컨텐츠가 부모의 너비보다 긴 경우, text prop은 [...]으로 생략됩니다.`,
      control: "boolean",
    },
    disabled: {
      control: "boolean",
      description: `
버튼을 비활성화합니다.  
버튼의 ${"`disabled`"} 속성과 같습니다.`,
    },
    text: {
      description: `버튼 내부에 들어가는 Text 컨텐츠입니다.`,
      control: { type: "text" },
    },
    size: {
      description: `
버튼의 사이즈입니다.  
사이즈에 따라 text의 size, weight이 다르며, 버튼의 height, radius가 정해진 스타일로 적용됩니다.    
${"`xs`"} - height: 32  
${"`sm`"} - height: 40  
${"`md`"} - height: 48  
${"`lg`"} - height: 56  
${"`xl`"} - height: 64  
`,
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      description: `컨테이너 버튼은 Normal, Negative 타입으로 분류됩니다. 또한 주목도에 따라 Primary, Secondary, Tertiary로 3가지의 계층을 가지고 있습니다.`,
      control: {
        type: "radio",
        options: [
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
    ShowCount: {
      control: "boolean",
      description: "(For Storybook) 카운트 뱃지를 활성화합니다.",
    },
    count: {
      control: { type: "number" },
      description: `버튼의 우측 영역에 들어가는 숫자입니다.`,
      if: { arg: "ShowCount" },
    },
    ShowLeftIcon: {
      control: "boolean",
      description: "(For Storybook) 좌측 아이콘을 활성화합니다.",
    },
    leftIcon: {
      if: { arg: "ShowLeftIcon" },
      description: `버튼의 좌측 영역에 들어가는 아이콘입니다.`,
      control: { type: "select" },
      options: Object.keys(IconComponents),
      mapping: Object.entries(IconComponents).reduce(
        (p, [key, component]) => ({ ...p, [key]: component }),
        {}
      ),
    },
    ShowRightIcon: {
      control: "boolean",
      description: "(For Storybook) 우측 아이콘을 활성화합니다.",
    },
    rightIcon: {
      if: { arg: "ShowRightIcon" },
      description: `버튼의 우측 영역에 들어가는 아이콘입니다.`,
      control: { type: "select" },
      options: Object.keys(IconComponents),
      mapping: Object.entries(IconComponents).reduce(
        (p, [key, component]) => ({ ...p, [key]: component }),
        {}
      ),
    },
  },
} as ComponentMeta<typeof ContainerButton>
