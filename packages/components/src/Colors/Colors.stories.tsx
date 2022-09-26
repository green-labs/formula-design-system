import { useState } from "react"
import { Text } from "../Text/Text"
import { lightTheme, darkTheme } from "../theme.css"
import { textStyle } from "./styles.css"

import type { ComponentMeta } from "@storybook/react"

const Template = (args) => {
  const [dark, setDark] = useState(false)
  const theme = dark ? darkTheme : lightTheme

  return (
    <div className={theme}>
      <label htmlFor="checkbox">
        Toggle
        <input
          id="checkbox"
          type="checkbox"
          onChange={(e) => {
            setDark((val) => !val)
          }}
        />
      </label>
      <Text className={textStyle} variant="body" weight="bold" size="lg">
        {dark ? "Dark" : "Light"}
      </Text>
    </div>
  )
}

export const Generic = Template.bind({})
Generic.title = "asdf"
Generic.args = {
  variantKey: "body-lg-medium",
  children: "Sample Text 샘플 텍스트",
}
Generic.argTypes = {
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
}

export const Body = Template.bind({})
Body.args = {
  component: "Body",
  variant: "body",
  size: "sm",
  weight: "medium",
  children: "Sample Text 샘플 텍스트",
}
Body.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
  variantKey: {
    table: {
      disable: true,
    },
  },
  component: {
    table: {
      disable: true,
    },
  },
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
  wrapper: {
    table: {
      disable: true,
    },
  },
}

export default {
  title: "Base/Color",
  component: Text,
} as ComponentMeta<typeof Text>
