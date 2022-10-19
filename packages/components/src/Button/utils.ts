import chroma from "chroma-js"
import { overlay } from "color-blend"
import { colorMap, tokens } from "@greenlabs/formula-design-token"
import {
  buttonVariantColors,
  dynamicStyles,
} from "./ContainerButton/styles.css"
import type { buttonSize, buttonVariants } from "./buttonCommonTypes"

const { color } = tokens.sys
const OPACITY_VALUES = { HOVER: 0.04, ACTIVE: 0.08 } as const

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

type RGBA = { r: number; g: number; b: number; a: number }
const get_RGBA_Object = ([r, g, b, a]: number[]): RGBA => ({ r, g, b, a })
const get_RGBA_CSS = ({ r, g, b, a }: RGBA) => `rgba(${r},${g},${b},${a})`

// opacity - number(0 ~ 1)
const get_RGBA_WithOpacity = (
  color: string | number | chroma.Color,
  opacity: number
) => {
  return chroma(color).alpha(opacity).css()
}

const change_RGBA_From_CSS = (color: string | number | chroma.Color) => {
  return get_RGBA_Object(chroma(color).rgba())
}

// todo - split layer function for other components
const getLayeredColor = (
  backdrop: string,
  source: string,
  layerOpacity: number
) => {
  const backdropString = backdrop.toLowerCase().split(" ").join("")

  // todo - fix white color
  const isBackdropWhite =
    backdropString === "white" ||
    backdropString === "#fff" ||
    backdropString === "#ffffff" ||
    backdropString === "rgba(255,255,255)" ||
    backdropString === "rgba(255,255,255,1)"

  const backdropColor = isBackdropWhite
    ? get_RGBA_WithOpacity(colorMap["gray-90"], layerOpacity * 3)
    : get_RGBA_WithOpacity(backdrop, layerOpacity)

  const layeredColor = overlay(
    change_RGBA_From_CSS(backdropColor),
    change_RGBA_From_CSS(source)
  )

  return get_RGBA_CSS(layeredColor)
}

export const getButtonStyleFromVariant = (variant: buttonVariants) => {
  const { hoverBackgroundColor, activeBackgroundColor } = dynamicStyles

  const backgroundColorCss = buttonVariantColors[variant].backgroundColor
  const labelColorCss = buttonVariantColors[variant].color

  return {
    [hoverBackgroundColor]: getLayeredColor(
      labelColorCss,
      backgroundColorCss,
      OPACITY_VALUES.HOVER
    ),
    [activeBackgroundColor]: getLayeredColor(
      labelColorCss,
      backgroundColorCss,
      OPACITY_VALUES.ACTIVE
    ),
  }
}
