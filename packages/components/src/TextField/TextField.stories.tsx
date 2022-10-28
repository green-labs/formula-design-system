import { TextField } from "./TextField"
import { SearchLineBold, EyeLineBold } from "../Icon"
import { createDisabledArgs } from "../utils/storybook"

import type { ComponentMeta } from "@storybook/react"

const Template = (args) => {
  return (
    <>
      {args.variant !== "line" && (
        <>
          <h5>xsmall</h5>
          <form style={{ margin: "20px 0" }}>
            <TextField
              prefix={<SearchLineBold color="gray-50" size="LG" />}
              suffixIcon={
                <EyeLineBold color="neutral-primary-contents" size="LG" />
              }
              size="xsmall"
              placeholder="플레이스홀더 텍스트"
              titleText="타이틀 텍스트 입니다."
              hintText="힌트 텍스트 입니다."
              {...args}
            />
          </form>
          <hr />
          <h5>small</h5>
          <form style={{ margin: "20px 0" }}>
            <TextField
              prefix={<SearchLineBold color="gray-50" size="LG" />}
              suffixIcon={
                <EyeLineBold color="neutral-primary-contents" size="LG" />
              }
              size="small"
              placeholder="플레이스홀더 텍스트"
              titleText="타이틀 텍스트 입니다."
              hintText="힌트 텍스트 입니다."
              {...args}
            />
          </form>
          <hr />
        </>
      )}
      <h5>medium</h5>
      <form style={{ margin: "20px 0" }}>
        <TextField
          prefix={<SearchLineBold color="gray-50" size="LG" />}
          suffixIcon={
            <EyeLineBold color="neutral-primary-contents" size="LG" />
          }
          size="medium"
          placeholder="플레이스홀더 텍스트"
          titleText="타이틀 텍스트 입니다."
          hintText="힌트 텍스트 입니다."
          {...args}
        />
      </form>
      <hr />
      <h5>large</h5>
      <form style={{ margin: "20px 0" }}>
        <TextField
          prefix={<SearchLineBold color="gray-50" size="LG" />}
          suffixIcon={
            <EyeLineBold color="neutral-primary-contents" size="LG" />
          }
          size="large"
          placeholder="플레이스홀더 텍스트"
          titleText="타이틀 텍스트 입니다."
          hintText="힌트 텍스트 입니다."
          {...args}
        />
      </form>
    </>
  )
}

export const Overview = Template.bind({})
Overview.argTypes = {
  ...createDisabledArgs([
    "props",
    "size",
    "className",
    "prefix",
    "suffixText",
    "suffixIcon",
    "titleText",
    "hintText",
  ]),
}

export default {
  title: "Formula/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>
