import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import ContentDialog from "./ContentDialog"
import { ThemeScope } from "../../theme"
import * as RadixDialog from "@radix-ui/react-dialog"
import Overlay from "../Overlay"

const imageSrc =
  "https://images.unsplash.com/photo-1663630487487-05d4f899da6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"

const ContentDialogTemplate: ComponentStory<typeof ContentDialog> = (args) => (
  <ThemeScope>
    <div style={{ width: "100vw", height: "100vh" }}>
      <RadixDialog.Root>
        <RadixDialog.Trigger>open medium dialog</RadixDialog.Trigger>
        <RadixDialog.Portal>
          <Overlay />

          <ContentDialog size="medium" {...args}>
            <img src={imageSrc} style={{ width: "100%" }} alt="content" />
          </ContentDialog>
        </RadixDialog.Portal>
      </RadixDialog.Root>
      <hr />
      <RadixDialog.Root>
        <RadixDialog.Trigger>open large dialog</RadixDialog.Trigger>
        <RadixDialog.Portal>
          <Overlay />

          <ContentDialog size="large" {...args}>
            <img src={imageSrc} style={{ width: "100%" }} alt="content" />
          </ContentDialog>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </div>
  </ThemeScope>
)
export const Dialog = ContentDialogTemplate.bind({})
Dialog.args = {
  title:
    "제목은 두줄까지입니다.\n두줄까지입니다.\n세줄은 안됩니다. 제목은 두줄까지입니다.\n두줄까지입니다.\n세줄은 안됩니다",
  text: "서브 텍스트의 최대 글 줄은 두 줄 입니다. Medium 과 Large 사이즈에선 서브 텍스트를 생략할 수 있습니다. \n세줄은 안됩니다. 세줄은 안됩니다. 세줄은 안됩니다. 세줄은 안됩니다.",

  buttonType: "evenly",
  primaryLabel: "확인",
  secondaryLabel: "취소",
  placeholder: "플레이스홀더 텍스트",
}

export default {
  title: "Formula/Dialog/ContentDialog",
  component: ContentDialog,
} as ComponentMeta<typeof ContentDialog>
