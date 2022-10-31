import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import IconButton from "."
import * as IconComponents from "../../Icon/generated"

export const Component: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />
}

export default {
  title: "Formula/Buttons/IconButton",
  component: Component,
  args: {
    icon: IconComponents.ShareArrowFill,
    color: "primary",
    size: "xl",
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: `
버튼을 비활성화합니다.  
버튼의 ${"`disabled`"} 속성과 같습니다.`,
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
    icon: {
      description: `버튼에 포함될 아이콘입니다.`,
      control: { type: "select" },
      options: Object.keys(IconComponents),
      mapping: Object.entries(IconComponents).reduce(
        (p, [key, component]) => ({ ...p, [key]: component }),
        {}
      ),
    },
  },
} as ComponentMeta<typeof IconButton>
