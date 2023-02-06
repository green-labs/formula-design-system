import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import TextDialog from "./TextDialog"
import { ThemeScope } from "../../theme"
import * as RadixDialog from "@radix-ui/react-dialog"
import Overlay from "../Overlay"

const TextDialogTemplate: ComponentStory<typeof TextDialog> = (args) => (
  <ThemeScope>
    <div style={{ width: "100vw", height: "100vh" }}>
      <RadixDialog.Root>
        <RadixDialog.Trigger>open dialog with title</RadixDialog.Trigger>
        <RadixDialog.Portal>
          <Overlay />

          <TextDialog
            title="제목은 두줄까지입니다.\n두줄까지입니다.\n세줄은 안됩니다. 제목은 두줄까지입니다.\n두줄까지입니다.\n세줄은 안됩니다"
            {...args}
          />
        </RadixDialog.Portal>
      </RadixDialog.Root>
      <hr />
      <RadixDialog.Root>
        <RadixDialog.Trigger>open dialog without title</RadixDialog.Trigger>
        <RadixDialog.Portal>
          <Overlay />

          <TextDialog {...args} />
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </div>
  </ThemeScope>
)
export const Dialog = TextDialogTemplate.bind({})
Dialog.args = {
  size: "small",

  text: "서브 텍스트의 최대 글줄은 네 줄 입니다. 그 이상이 될 경우 바텀시트를 사용해 주세요. 지금 보시는 다이얼로그가 타이틀과 서브 텍스트의 최대 글자수. 서브 텍스트의 최대 글줄은 네 줄 입니다. 그 이상이 될 경우 바텀시트를 사용해 주세요. 지금 보시는 다이얼로그가 타이틀과 서브 텍스트의 최대 글자수.",
  buttonType: "evenly",
  primaryLabel: "확인",
  secondaryLabel: "취소",
  placeholder: "플레이스홀더 텍스트",
}

export default {
  title: "Formula/Dialog/TextDialog",
  component: TextDialog,
} as ComponentMeta<typeof TextDialog>
