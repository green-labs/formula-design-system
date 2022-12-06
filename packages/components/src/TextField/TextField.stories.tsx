import * as React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"

import { TextField } from "./TextField"
import { SearchLineBold, EyeLineBold } from "../Icon"
import { createDisabledArgs } from "../utils/storybook"
import * as IconComponents from "../Icon/generated"
import { ThemeScope } from "../theme"

const Template: ComponentStory<typeof TextField> = (args) => {
  return (
    <ThemeScope>
      {args.variant !== "line" && (
        <>
          <h5>xsmall</h5>
          <form style={{ margin: "20px 0" }}>
            <TextField
              prefixIcon={SearchLineBold}
              suffixIcon={EyeLineBold}
              {...args}
              size="xsmall"
            />
          </form>
          <hr />
          <h5>small</h5>
          <form style={{ margin: "20px 0" }}>
            <TextField
              prefixIcon={SearchLineBold}
              suffixIcon={EyeLineBold}
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
          prefixIcon={SearchLineBold}
          suffixIcon={EyeLineBold}
          {...args}
          size="medium"
        />
      </form>
      <hr />
      <h5>large</h5>
      <form style={{ margin: "20px 0" }}>
        <TextField
          prefixIcon={SearchLineBold}
          suffixIcon={EyeLineBold}
          {...args}
          size="large"
        />
      </form>
    </ThemeScope>
  )
}

const textControl = {
  defaultValue: "",
  control: { type: "text" },
}

export const Overview = Template.bind({})
Overview.args = {
  placeholder: "플레이스홀더 텍스트",
  titleText: "타이틀 텍스트 입니다.",
  hintText: "힌트 텍스트 입니다.",
  type: "text",
  state: "normal",
  variant: "boxOutline",
  readOnly: false,
  disabled: false,
}

const commonDisabled = createDisabledArgs([
  "props",
  "className",
  "prefixIcon",
  "suffixIcon",
  "onChange",
  "onFocus",
])

Overview.argTypes = {
  ...commonDisabled,
  ...createDisabledArgs(["size"]),
  suffix: textControl,
  prefix: textControl,
  hintText: textControl,
  titleText: textControl,
}

const SingleTemplate: ComponentStory<typeof TextField> = (args) => {
  return (
    <ThemeScope
      render={({ className }) => (
        <form className={className} style={{ margin: "20px 0" }}>
          <TextField {...args} />
        </form>
      )}
    />
  )
}

const iconControlMapping = Object.entries(IconComponents).reduce(
  (p, [key, component]) => {
    p[key] = component
    return p
  },
  {}
)
iconControlMapping["none"] = undefined
const iconControl = {
  defaultValue: "none",
  control: { type: "select" },
  options: ["none", ...Object.keys(IconComponents)],
  mapping: iconControlMapping,
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
  suffix: textControl,
  prefix: textControl,
  hintText: textControl,
  titleText: textControl,
  prefixIcon: iconControl,
  suffixIcon: iconControl,
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

export const Textarea_and_Ref: ComponentStory<typeof TextField> = (args) => {
  const ref = React.useRef<HTMLInputElement>(null)

  React.useLayoutEffect(() => {
    setInterval(() => {
      if (ref.current) {
        ref.current.value = String(+new Date())
      }
    }, 1_000)
  })

  return (
    <ThemeScope
      render={({ className }) => (
        <form className={className} style={{ margin: "20px 0" }}>
          <TextField name="inputName" inputTag="textarea" {...args} />
          <br />
          using ref, print timestamp every 1s
          <TextField ref={ref} {...args} />
          <br />
          <TextField
            titleText="label works if id is provided"
            id="some-id"
            {...args}
          />
        </form>
      )}
    />
  )
}

export default {
  title: "Formula/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>
