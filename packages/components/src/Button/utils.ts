import type {
  buttonColorTypes,
  ButtonCustomStyleProps,
  buttonSize,
} from "./buttonCommonTypes"
import { buttonColors, customStyles, stateStyles } from "./commonStyle.css"
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
      return 20
    case "md":
      return 24
    case "lg":
      return 28
    case "xl":
      return 32
  }
}

export const getCustomStyle = (customStyle: ButtonCustomStyleProps) => {
  const { hoverBackgroundColor, activeBackgroundColor } = stateStyles
  const {
    customBackgroundColor,
    customFontColor,
    customFillColor,
    customBorderColor,
    customBorderWidth,
    customBorderStyle,
    customCountBackgroundColor,
    customCountColor,
  } = customStyles

  const hoverLayerColor = getBlendedLayerColor(
    customStyle.backgroundColor,
    getBlendLayerColor(customStyle.color, "hover")
  )

  const activeLayerColor = getBlendedLayerColor(
    customStyle.backgroundColor,
    getBlendLayerColor(customStyle.color, "pressed")
  )

  return assignInlineVars({
    [customBackgroundColor]: customStyle.backgroundColor,
    [customFontColor]: customStyle.color,
    [customFillColor]: customStyle.fill || "",
    [customBorderColor]: customStyle.borderColor || "",
    [customBorderWidth]: customStyle.borderWidth || "",
    [customBorderStyle]: customStyle.borderStyle || "",
    [customCountBackgroundColor]: customStyle.countBackgroundColor || "",
    [customCountColor]: customStyle.countColor || "",
    [hoverBackgroundColor]: hoverLayerColor,
    [activeBackgroundColor]: activeLayerColor,
  })
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
