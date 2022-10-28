import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import TextDialog from "./TextDialog"

const TextDialogTemplate: ComponentStory<typeof TextDialog> = (args) => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <TextDialog {...args} />
  </div>
)
export const Example = TextDialogTemplate.bind({})
Example.args = {
  size: "small",
  title:
    "제목은 두줄까지입니다.\n두줄까지입니다.\n세줄은 안됩니다. 제목은 두줄까지입니다.\n두줄까지입니다.\n세줄은 안됩니다",
  text: "서브 텍스트의 최대 글줄은 네 줄 입니다. 그 이상이 될 경우 바텀시트를 사용해 주세요. 지금 보시는 다이얼로그가 타이틀과 서브 텍스트의 최대 글자수. 서브 텍스트의 최대 글줄은 네 줄 입니다. 그 이상이 될 경우 바텀시트를 사용해 주세요. 지금 보시는 다이얼로그가 타이틀과 서브 텍스트의 최대 글자수.",
  buttonType: "evenly",
  primaryLabel: "확인",
  secondaryLabel: "취소",
}
Example.parameters = {
  layout: "fullscreen",
}

export default {
  title: "Formula/Dialog/TextDialog",
  component: Example,
} as ComponentMeta<typeof TextDialog>
