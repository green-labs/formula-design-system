import chroma from "chroma-js"
import { overlay } from "color-blend"
import { colorMap, tokens } from "@greenlabs/formula-design-token"
import type { buttonSize, buttonVariants } from "./types"
import { dynamicStyles } from "./ContainerButton/styles.css"

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

export const getButtonStyle = (variant: buttonVariants) => {
  const {
    backgroundColor,
    borderColor,
    borderStyle,
    labelColor,
    fillColor,
    hoverBackgroundColor,
    activeBackgroundColor,
  } = dynamicStyles

  let backgroundColorCss
  let borderColorCss
  let borderStyleCss
  let labelColorCss
  let fillColorCss

  switch (variant) {
    case "primary":
      backgroundColorCss = color.primary.container.value
      borderColorCss = color.primary.container.value
      borderStyleCss = "none"
      labelColorCss = color.primary["container-contents"].value
      fillColorCss = color.secondary.container.value
      break
    case "secondary-color":
      backgroundColorCss = color["neutral-primary"].container.value
      borderColorCss = color.primary.container.value
      borderStyleCss = "solid"
      labelColorCss = color.primary.contents.value
      fillColorCss = color.primary.container.value
      break
    case "secondary-gray":
      backgroundColorCss = color["neutral-primary"].container.value
      borderColorCss = color.outline.value
      borderStyleCss = "solid"
      labelColorCss = color["neutral-primary"].contents.value
      fillColorCss = color["neutral-primary"].contents.value
      break
    case "tertiary-color":
      backgroundColorCss = color.secondary.container.value
      borderColorCss = color.secondary.container.value
      borderStyleCss = "none"
      labelColorCss = color.secondary["container-contents"].value
      fillColorCss = color.secondary["container-contents"].value
      break
    case "tertiary-gray":
      backgroundColorCss = color["neutral-secondary"].container.value
      borderColorCss = color["neutral-secondary"].container.value
      borderStyleCss = "none"
      labelColorCss = color["neutral-primary"].contents.value
      fillColorCss = color["neutral-primary"].contents.value
      break
    case "negative-primary":
      backgroundColorCss = color.error.contents.value
      borderColorCss = color.error.contents.value
      borderStyleCss = "none"
      labelColorCss = color.primary["container-contents"].value
      fillColorCss = color.primary["container-contents"].value
      break
    case "negative-secondary":
      backgroundColorCss = color.error.container.value
      borderColorCss = color.error.container.value
      borderStyleCss = "none"
      labelColorCss = color.error.contents.value
      fillColorCss = color.error.contents.value
      break
  }

  return {
    [backgroundColor]: backgroundColorCss,
    [borderColor]: borderColorCss,
    [borderStyle]: borderStyleCss,
    [labelColor]: labelColorCss,
    [fillColor]: fillColorCss,
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
