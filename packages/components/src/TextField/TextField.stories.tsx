import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import { TextField } from "./TextField"
import { SearchLineBold, EyeLineBold } from "../Icon"
import { createDisabledArgs } from "../utils/storybook"

const Template: ComponentStory<typeof TextField> = (args) => {
  return (
    <>
      {args.variant !== "line" && (
        <>
          <h5>xsmall</h5>
          <form style={{ margin: "20px 0" }}>
            <TextField
              prefix={<SearchLineBold color="gray-50" size="lg" />}
              suffixIcon={
                <EyeLineBold color="neutral-primary-contents" size="lg" />
              }
              {...args}
              size="xsmall"
            />
          </form>
          <hr />
          <h5>small</h5>
          <form style={{ margin: "20px 0" }}>
            <TextField
              prefix={<SearchLineBold color="gray-50" size="lg" />}
              suffixIcon={
                <EyeLineBold color="neutral-primary-contents" size="lg" />
              }
              {...args}
              size="small"
            />
          </form>
          <hr />
        </>
      )}
      <h5>medium</h5>
      <form style={{ margin: "20px 0" }}>
        <TextField
          prefix={<SearchLineBold color="gray-50" size="lg" />}
          suffixIcon={
            <EyeLineBold color="neutral-primary-contents" size="lg" />
          }
          {...args}
          size="medium"
        />
      </form>
      <hr />
      <h5>large</h5>
      <form style={{ margin: "20px 0" }}>
        <TextField
          prefix={<SearchLineBold color="gray-50" size="lg" />}
          suffixIcon={
            <EyeLineBold color="neutral-primary-contents" size="lg" />
          }
          {...args}
          size="large"
        />
      </form>
    </>
  )
}

export const Overview = Template.bind({})
Overview.args = {
  placeholder: "플레이스홀더 텍스트",
  titleText: "타이틀 텍스트 입니다.",
  hintText: "힌트 텍스트 입니다.",
  type: "text",
  state: "normal",
  variant: "boxOutline",
}
const commonDisabled = createDisabledArgs([
  "props",
  "className",
  "prefix",
  "suffixText",
  "suffixIcon",
  "titleText",
  "hintText",
  "onChange",
  "onFocus",
])
Overview.argTypes = {
  ...commonDisabled,
  ...createDisabledArgs(["size"]),
}

const SingleTemplate: ComponentStory<typeof TextField> = (args) => {
  return (
    <form style={{ margin: "20px 0" }}>
      <TextField
        prefix={<SearchLineBold color="gray-50" size="lg" />}
        suffixIcon={<EyeLineBold color="neutral-primary-contents" size="lg" />}
        {...args}
      />
      <br />
      <TextField {...args} />
    </form>
  )
}

export const BoxOutline = SingleTemplate.bind({})
BoxOutline.args = {
  size: "medium",
  variant: "boxOutline",
  placeholder: "플레이스홀더 텍스트",
  readOnly: false,
  disabled: false,
  type: "text",
  state: "normal",
}
BoxOutline.argTypes = {
  ...commonDisabled,
  ...createDisabledArgs(["variant"]),
}

export const BoxFill = SingleTemplate.bind({})
BoxFill.args = {
  ...BoxOutline.args,
  variant: "boxFill",
}
BoxFill.argTypes = BoxOutline.argTypes

export const Line = SingleTemplate.bind({})
Line.args = {
  ...BoxOutline.args,
  variant: "line",
}
Line.argTypes = BoxOutline.argTypes

export default {
  title: "Formula/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>
