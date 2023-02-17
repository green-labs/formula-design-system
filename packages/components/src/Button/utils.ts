import type { buttonColorTypes, buttonSize } from "./commonTypes"
import { buttonColors, stateStyles } from "./commonStyles.css"
import { getBlendLayerColor, getBlendedLayerColor } from "../stateLayers"
import { assignInlineVars } from "@vanilla-extract/dynamic"

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
    case "md":
      return 20
    case "lg":
    case "xl":
      return 24
  }
}

export const getStateStyle = (color: buttonColorTypes) => {
  const { hoverBackgroundColor, activeBackgroundColor } = stateStyles

  const backgroundColorCss = buttonColors[color].backgroundColor
  const labelColorCss = buttonColors[color].color

  const hoverLayerColor = getBlendedLayerColor(
    backgroundColorCss,
    getBlendLayerColor(labelColorCss, "hover")
  )

  const activeLayerColor = getBlendedLayerColor(
    backgroundColorCss,
    getBlendLayerColor(labelColorCss, "pressed")
  )

  return assignInlineVars({
    [hoverBackgroundColor]: hoverLayerColor,
    [activeBackgroundColor]: activeLayerColor,
  })
}
