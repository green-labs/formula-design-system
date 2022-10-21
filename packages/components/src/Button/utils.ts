import { buttonVariantColors, dynamicStyles } from "./commonStyle.css"
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

export const getButtonStyleFromVariant = (variant: buttonVariants) => {
  const { hoverBackgroundColor, activeBackgroundColor } = dynamicStyles

  const backgroundColorCss = buttonVariantColors[variant].backgroundColor
  const labelColorCss = buttonVariantColors[variant].color

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
