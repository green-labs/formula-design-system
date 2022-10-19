import { Dialog, TextDialogProps, ImageDialogProps } from "./Dialog"

import type { ComponentMeta } from "@storybook/react"

const ImageDialogTemplate = (args: ImageDialogProps) => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <Dialog.ImageDialog {...args} />
  </div>
)
export const ImageDialog = ImageDialogTemplate.bind({})
ImageDialog.args = {
  imageSrc:
    "https://public.sinsunhi.com/thumbnails/20221006/f7d90226-50b8-4483-8bc0-e94f53eef2cc/1920x1920-e_4i9Ud018svccjq15mcz6xso_c1jds6.webp",
  imageAspectRatio: "square",
  buttonType: "evenly",
}
ImageDialog.parameters = {
  layout: "fullscreen",
}

export default {
  title: "Example/Dialog",
  component: Dialog.ImageDialog,
} as ComponentMeta<typeof Dialog.ImageDialog>
