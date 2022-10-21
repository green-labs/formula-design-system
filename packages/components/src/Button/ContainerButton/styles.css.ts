import { tokens } from "@greenlabs/formula-design-token"
import { style, styleVariants } from "@vanilla-extract/css"

export const buttonNotificationContainerStyle = style({ marginRight: 4 })

export const buttonNotificationColorVariants = styleVariants({
  primary: {
    backgroundColor: tokens.sys.color.secondary.container.value,
    color: tokens.sys.color.secondary["container-contents"].value,
  },
  "secondary-color": {
    backgroundColor: tokens.sys.color.primary.container.value,
    color: tokens.sys.color.primary["container-contents"].value,
  },
  "secondary-gray": {
    backgroundColor: tokens.sys.color["neutral-primary"].contents.value,
    color: tokens.sys.color["neutral-primary"].container.value,
  },
  "tertiary-color": {
    backgroundColor: tokens.sys.color.secondary["container-contents"].value,
    color: tokens.sys.color.secondary.container.value,
  },
  "tertiary-gray": {
    backgroundColor: tokens.sys.color["neutral-primary"].contents.value,
    color: tokens.sys.color["neutral-secondary"].container.value,
  },
  "negative-primary": {
    backgroundColor: tokens.sys.color.primary["container-contents"].value,
    color: tokens.sys.color.error.contents.value,
  },
  "negative-secondary": {
    backgroundColor: tokens.sys.color.error.contents.value,
    color: tokens.sys.color.error.container.value,
  },
})

export const buttonTextContainerStyle = style({
  display: "flex",
  alignItems: "center",
})
