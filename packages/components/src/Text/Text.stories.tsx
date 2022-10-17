import { Text } from "./Text"

import type { ComponentMeta } from "@storybook/react"

const Template = (args) => {
  switch (args.component) {
    case "Headline":
      return (
        <>
          <span>Text.Headline (headline-xl-bold) </span>{" "}
          <Text.Headline size="xl" weight="bold" {...args} />
          <hr />
          <span>Text.Headline (headline-lg-bold) </span>
          <Text.Headline size="lg" weight="bold" {...args} />
          <hr />
          <span>Text.Headline (headline-md-bold) </span>
          <Text.Headline size="md" weight="bold" {...args} />
          <hr />
          <span>Text.Headline (headline-sm-bold) </span>
          <Text.Headline size="sm" weight="bold" {...args} />
          <hr />
          <span>Text.Headline (headline-sm-regular) </span>
          <Text.Headline size="sm" weight="regular" {...args} />
        </>
      )
    case "Body":
      return (
        <>
          <span>Text.Body (body-xl-regular) </span>{" "}
          <Text.Body size="xl" weight="regular" {...args} />
          <hr />
          <span>Text.Body (body-xl-bold) </span>{" "}
          <Text.Body size="xl" weight="bold" {...args} />
          <hr />
          <span>Text.Body (body-lg-medium) </span>{" "}
          <Text.Body size="lg" weight="medium" {...args} />
          <hr />
          <span>Text.Body (body-lg-regular) </span>{" "}
          <Text.Body size="lg" weight="regular" {...args} />
          <hr />
          <span>Text.Body (body-lg-bold) </span>{" "}
          <Text.Body size="lg" weight="bold" {...args} />
          <hr />
          <span>Text.Body (body-md-medium) </span>{" "}
          <Text.Body size="md" weight="medium" {...args} />
          <hr />
          <span>Text.Body (body-md-regular) </span>{" "}
          <Text.Body size="md" weight="regular" {...args} />
          <hr />
          <span>Text.Body (body-md-bold) </span>{" "}
          <Text.Body size="md" weight="bold" {...args} />
          <hr />
          <span>Text.Body (body-sm-medium) </span>{" "}
          <Text.Body size="sm" weight="medium" {...args} />
          <hr />
          <span>Text.Body (body-sm-regular) </span>{" "}
          <Text.Body size="sm" weight="regular" {...args} />
          <hr />
          <span>Text.Body (body-sm-bold) </span>{" "}
          <Text.Body size="sm" weight="bold" {...args} />
          <hr />
        </>
      )
    case "Caption":
      return (
        <>
          <span>Text.Caption (caption-xs-regular) </span>{" "}
          <Text.Caption {...args} />
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
  container: {
    table: {
      disable: true,
    },
  },
  size: {
    table: {
      disable: true,
    },
  },
  weight: {
    table: {
      disable: true,
    },
  },
}

// TODO: disable control args
export const Headline = Template.bind({})
Headline.args = {
  component: "Headline",
  variant: "headline",
  children: "Sample Text 샘플 텍스트",
}
Headline.argTypes = {
  ...Body.argTypes,
  size: {
    table: {
      disable: true,
    },
  },
  weight: {
    table: {
      disable: true,
    },
  },
}

export const Caption = Template.bind({})
Caption.args = {
  component: "Caption",
  variant: "caption",
  children: "Sample Text 샘플 텍스트",
}
Caption.argTypes = {
  ...Body.argTypes,
  size: {
    table: {
      disable: true,
    },
  },
  weight: {
    table: {
      disable: true,
    },
  },
}

export default {
  title: "Example/Text",
  component: Text,
} as ComponentMeta<typeof Text>
