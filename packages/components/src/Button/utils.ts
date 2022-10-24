import type {
  buttonSize,
  buttonColor,
  ButtonCustomStyleProps,
} from "./buttonCommonTypes"
import { buttonColors, customStyles, stateStyles } from "./commonStyle.css"
import { getBlendLayerColor, getBlendedLayerColor } from "../stateLayers"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { isProduction } from "../util"

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

export const getDynamicStyle = (
  color: buttonColor,
  customStyle?: ButtonCustomStyleProps
) => {
  const { hoverBackgroundColor, activeBackgroundColor } = stateStyles

  if (color === "custom" && !!customStyle) {
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
  } else if (color === "custom" && !!!customStyle) {
    if (!isProduction) {
      console.error(
        "color가 custom type인 경우에는 customStyle prop이 필요합니다."
      )
    }
    return {}
  } else {
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
}
