import { Text } from "./Text"

import type { ComponentMeta } from "@storybook/react"

const Template = (args) => {
  switch (args.component) {
    case "Headline":
      return (
        <>
          <Text.Headline {...args} />
          <hr />
          <div>
            variants: <br />
            headline-sm-bold | headline-sm-regular | headline-md-bold |
            headline-lg-bold | headline-xl-bold
          </div>
        </>
      )
    case "Body":
      return (
        <>
          <Text.Body {...args} />
          <hr />
          <div>
            variants: <br />
            body-lg-medium | body-lg-regular | body-lg-bold | body-md-medium |
            body-md-regular | body-md-bold | body-sm-medium | body-sm-regular |
            body-sm-bold | body-xl-regular | body-xl-bold
          </div>
        </>
      )
    case "Caption":
      return (
        <>
          <Text.Caption {...args} />
          <hr />
          <div>
            variants: <br />
            caption-xs-regular
          </div>
        </>
      )
    default:
      return <Text {...args} />
  }
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

// TODO: disable control args
export const Headline = Template.bind({})
Headline.args = { ...Body.args, component: "Headline", variant: "headline" }
Headline.argTypes = { ...Body.argTypes }

export const Caption = Template.bind({})
Caption.args = { ...Body.args, component: "Caption", variant: "caption" }
Caption.argTypes = { ...Body.argTypes }

export default {
  title: "Example/Text",
  component: Text,
} as ComponentMeta<typeof Text>
