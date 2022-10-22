import { tokens } from "@greenlabs/formula-design-token"
import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { get_RGBA_WithOpacity } from "../../stateLayers"
import { getDefaultTransitionStyle } from "../../transitionStyles.css"

// NotificationCountBadge Recipe
export const badgeInContainerButtonStyle = recipe({
  base: [
    getDefaultTransitionStyle(["background-color", "color"]),
    { marginRight: 4 },
  ],
  variants: {
    color: {
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
    },
    disabled: {
      true: {
        backgroundColor: get_RGBA_WithOpacity(
          tokens.sys.color["neutral-primary"].contents.value,
          tokens.sys.state.opacity["disabled-contents"].value
        ),
        color: tokens.sys.color.inverse["container-contents"].value,
      },
    },
  },
})

export const buttonTextContainerStyle = style({
  display: "flex",
  alignItems: "center",
})
