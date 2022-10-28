import React from "react"
import { ImageDialog } from "./ImageDialog"

import type { ComponentMeta, ComponentStory } from "@storybook/react"

const ImageDialogTemplate: ComponentStory<typeof ImageDialog> = (args) => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <ImageDialog {...args} />
  </div>
)

export const SquareAspectRatioEvenlyButton = ImageDialogTemplate.bind({})
SquareAspectRatioEvenlyButton.args = {
  imageSrc:
    "https://public.sinsunhi.com/thumbnails/20221006/f7d90226-50b8-4483-8bc0-e94f53eef2cc/1920x1920-e_4i9Ud018svccjq15mcz6xso_c1jds6.webp",
  imageAspectRatio: "square",
  buttonType: "evenly",
  primaryLabel: "확인",
  secondaryLabel: "취소",
}

export const SquareAspectRatioWeightedButton = ImageDialogTemplate.bind({})
SquareAspectRatioWeightedButton.args = {
  imageSrc:
    "https://public.sinsunhi.com/thumbnails/20221006/f7d90226-50b8-4483-8bc0-e94f53eef2cc/1920x1920-e_4i9Ud018svccjq15mcz6xso_c1jds6.webp",
  imageAspectRatio: "square",
  buttonType: "weighted",
  primaryLabel: "확인",
  secondaryLabel: "취소",
}

export const SquareAspectRatioVerticalButton = ImageDialogTemplate.bind({})
SquareAspectRatioVerticalButton.args = {
  imageSrc:
    "https://public.sinsunhi.com/thumbnails/20221006/f7d90226-50b8-4483-8bc0-e94f53eef2cc/1920x1920-e_4i9Ud018svccjq15mcz6xso_c1jds6.webp",
  imageAspectRatio: "square",
  buttonType: "vertical",
  primaryLabel: "확인",
  secondaryLabel: "취소",
}

export const VerticalAspectRatioEvenlyButton = ImageDialogTemplate.bind({})
VerticalAspectRatioEvenlyButton.args = {
  imageSrc:
    "https://public.sinsunhi.com/thumbnails/20221006/f7d90226-50b8-4483-8bc0-e94f53eef2cc/1920x1920-e_4i9Ud018svccjq15mcz6xso_c1jds6.webp",
  imageAspectRatio: "vertical",
  buttonType: "evenly",
  primaryLabel: "확인",
  secondaryLabel: "취소",
}

export const VerticalAspectRatioWeightedButton = ImageDialogTemplate.bind({})
VerticalAspectRatioWeightedButton.args = {
  imageSrc:
    "https://public.sinsunhi.com/thumbnails/20221006/f7d90226-50b8-4483-8bc0-e94f53eef2cc/1920x1920-e_4i9Ud018svccjq15mcz6xso_c1jds6.webp",
  imageAspectRatio: "vertical",
  buttonType: "weighted",
  primaryLabel: "확인",
  secondaryLabel: "취소",
}

export const VerticalAspectRatioVerticalButton = ImageDialogTemplate.bind({})
VerticalAspectRatioVerticalButton.args = {
  imageSrc:
    "https://public.sinsunhi.com/thumbnails/20221006/f7d90226-50b8-4483-8bc0-e94f53eef2cc/1920x1920-e_4i9Ud018svccjq15mcz6xso_c1jds6.webp",
  imageAspectRatio: "vertical",
  buttonType: "vertical",
  primaryLabel: "확인",
  secondaryLabel: "취소",
}

export const HorizontalAspectRatioEvenlyButton = ImageDialogTemplate.bind({})
HorizontalAspectRatioEvenlyButton.args = {
  imageSrc:
    "https://public.sinsunhi.com/thumbnails/20221006/f7d90226-50b8-4483-8bc0-e94f53eef2cc/1920x1920-e_4i9Ud018svccjq15mcz6xso_c1jds6.webp",
  imageAspectRatio: "horizontal",
  buttonType: "evenly",
  primaryLabel: "확인",
  secondaryLabel: "취소",
}

export const HorizontalAspectRatioWeightedButton = ImageDialogTemplate.bind({})
HorizontalAspectRatioWeightedButton.args = {
  imageSrc:
    "https://public.sinsunhi.com/thumbnails/20221006/f7d90226-50b8-4483-8bc0-e94f53eef2cc/1920x1920-e_4i9Ud018svccjq15mcz6xso_c1jds6.webp",
  imageAspectRatio: "horizontal",
  buttonType: "weighted",
  primaryLabel: "확인",
  secondaryLabel: "취소",
}

export const HorizontalAspectRatioVerticalButton = ImageDialogTemplate.bind({})
HorizontalAspectRatioVerticalButton.args = {
  imageSrc:
    "https://public.sinsunhi.com/thumbnails/20221006/f7d90226-50b8-4483-8bc0-e94f53eef2cc/1920x1920-e_4i9Ud018svccjq15mcz6xso_c1jds6.webp",
  imageAspectRatio: "horizontal",
  buttonType: "vertical",
  primaryLabel: "확인",
  secondaryLabel: "취소",
}

export default {
  title: "Formula/Dialog/ImageDialog",
  component: ImageDialog,
  argTypes: {
    imageAspectRatio: {
      name: "imageAspectRatio",
      control: { type: "select" },
      options: ["square", "vertical", "horizontal"],
      defaultValue: "square",
    },
    imageSrc: { name: "imageSrc", control: { type: "text" }, defaultValue: "" },
    buttonType: {
      name: "buttonType",
      control: { type: "select" },
      options: ["evenly", "weighted", "vertical"],
      defaultValue: "evenly",
    },
    secondaryLabel: {
      name: "secondaryLabel",
      control: { type: "text" },
      defaultValue: "취소",
    },
    onSecondary: {
      name: "onSecondary",
      control: { type: "object" },
      table: { disable: true },
      defaultValue: () => {},
    },
    primaryLabel: {
      name: "primaryLabel",
      control: { type: "text" },
      defaultValue: "확인",
    },
    onPrimary: {
      name: "onPrimary",
      control: { type: "object" },
      table: { disable: true },
      defaultValue: () => {},
    },
  },
} as ComponentMeta<typeof ImageDialog>
