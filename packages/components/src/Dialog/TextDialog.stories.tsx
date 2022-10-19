import { Dialog, TextDialogProps, ImageDialogProps } from "./Dialog"

import type { ComponentMeta } from "@storybook/react"

const TextDialogTemplate = (args: TextDialogProps) => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <Dialog.TextDialog {...args} />
  </div>
)
export const TextDialog = TextDialogTemplate.bind({})
TextDialog.args = {
  size: "small",
  title:
    "제목은 두줄까지입니다.\n두줄까지입니다.\n세줄은 안됩니다. 제목은 두줄까지입니다.\n두줄까지입니다.\n세줄은 안됩니다",
  text: "서브 텍스트의 최대 글줄은 네 줄 입니다. 그 이상이 될 경우 바텀시트를 사용해 주세요. 지금 보시는 다이얼로그가 타이틀과 서브 텍스트의 최대 글자수. 서브 텍스트의 최대 글줄은 네 줄 입니다. 그 이상이 될 경우 바텀시트를 사용해 주세요. 지금 보시는 다이얼로그가 타이틀과 서브 텍스트의 최대 글자수.",
  buttonType: "evenly",
}
TextDialog.parameters = {
  layout: "fullscreen",
}

export default {
  title: "Example/Dialog",
  component: Dialog.TextDialog,
} as ComponentMeta<typeof Dialog.TextDialog>
