import { TextField } from "./TextField"
import { SearchLineBold, EyeLineBold } from "../Icon"

import type { ComponentMeta } from "@storybook/react"

const Template = (args) => {
  return (
    <>
      <form style={{ margin: "20px 0" }}>
        <TextField size="xsmall" placeholder="플레이스홀더 텍스트" {...args} />
      </form>
      <form style={{ margin: "20px 0" }}>
        <TextField size="small" placeholder="플레이스홀더 텍스트" {...args} />
      </form>
      <form style={{ margin: "20px 0" }}>
        <TextField size="medium" placeholder="플레이스홀더 텍스트" {...args} />
      </form>
      <form style={{ margin: "20px 0" }}>
        <TextField size="large" placeholder="플레이스홀더 텍스트" {...args} />
      </form>
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
    </>
  )
}

export const Outline = Template.bind({})
Outline.argTypes = {
  props: {
    table: {
      disable: true,
    },
  },
  className: {
    table: {
      disable: true,
    },
  },
  prefix: {
    table: {
      disable: true,
    },
  },
  suffixText: {
    table: {
      disable: true,
    },
  },
  suffixIcon: {
    table: {
      disable: true,
    },
  },
  titleText: {
    table: {
      disable: true,
    },
  },
  hintText: {
    table: {
      disable: true,
    },
  },
}

export default {
  title: "Example/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>
