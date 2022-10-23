import { buttonColors, dynamicStyles } from "./commonStyle.css"
import type { buttonSize, buttonVariants } from "./buttonCommonTypes"
import { getBlendLayerColor, getBlendedLayerColor } from "../stateLayers"

export const getNotificationCountBadgeSize = (size: buttonSize) => {
  switch (size) {
    case "xs":
    case "sm":
    case "md":
      return "sm"
    case "lg":
    case "xl":
      return "md"
  }
}

export const getIconSize = (size: buttonSize) => {
  switch (size) {
    case "xs":
      return 16
    case "sm":
      return 20
    case "md":
      return 24
    case "lg":
      return 28
    case "xl":
      return 32
  }
}

// todo - split function 내부에서 CSSVarFunction에 의존하지않고, (variant, CSSVarFunction)을 각각 받아 처리하도록 한다.
export const getButtonStyleFromVariant = (variant: buttonVariants) => {
  const { hoverBackgroundColor, activeBackgroundColor } = dynamicStyles

  const backgroundColorCss = buttonColors[variant].backgroundColor
  const labelColorCss = buttonColors[variant].color

  return {
    [hoverBackgroundColor]: getBlendedLayerColor(
      backgroundColorCss,
      getBlendLayerColor(labelColorCss, "hover")
    ),
    [activeBackgroundColor]: getBlendedLayerColor(
      backgroundColorCss,
      getBlendLayerColor(labelColorCss, "pressed")
    ),
  }
}
