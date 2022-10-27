import { tokens } from "@greenlabs/formula-design-token"
import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { getDefaultTransitionStyle } from "../../transitionStyles.css"

const { color } = tokens.sys

export const buttonTextContainerStyle = style({
  display: "flex",
  alignItems: "center",
  minWidth: 0,
})

export const buttonTextStyle = style({
  paddingLeft: 4,
  paddingRight: 4,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
})

// NotificationCountBadge Component Recipe
export const badgeInContainerButtonStyle = recipe({
  base: [
    getDefaultTransitionStyle(["background-color", "color"]),
    { marginRight: 4 },
  ],
  variants: {
    color: {
      primary: {
        backgroundColor: color.secondary.container.value,
        color: color.secondary["container-contents"].value,
      },
      "secondary-color": {
        backgroundColor: color.primary.container.value,
        color: color.primary["container-contents"].value,
      },
      "secondary-gray": {
        backgroundColor: color["neutral-primary"].contents.value,
        color: color["neutral-primary"].container.value,
      },
      "tertiary-color": {
        backgroundColor: color.secondary["container-contents"].value,
        color: color.secondary.container.value,
      },
      "tertiary-gray": {
        backgroundColor: color["neutral-primary"].contents.value,
        color: color["neutral-secondary"].container.value,
      },
      "negative-primary": {
        backgroundColor: color.primary["container-contents"].value,
        color: color.error.contents.value,
      },
      "negative-secondary": {
        backgroundColor: color.error.contents.value,
        color: color.error.container.value,
      },
    },
  },
})
