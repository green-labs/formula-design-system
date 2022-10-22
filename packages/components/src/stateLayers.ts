import chroma from "chroma-js"
import { overlay } from "color-blend"
import { tokens } from "@greenlabs/formula-design-token"
import type { RGBA } from "color-blend/dist/types"

const whiteOverlayColor =
  tokens.sys.state.color["container-contents-white"].value

const get_RGBA_Array = (color: string | number | chroma.Color) => {
  return get_RGBA_Object(chroma(color).rgba())
}

const get_RGBA_Object = ([r, g, b, a]: chroma.ColorSpaces["rgba"]): RGBA => {
  return { r, g, b, a }
}

const get_RGBA_CSS = ({ r, g, b, a }: RGBA) => {
  return `rgba(${r},${g},${b},${a})`
}

/**
 * 대상 컬러에 opacity를 적용한 컬러를 계산합니다.
 * @param {string | number | chroma.Color} color - opacity를 적용할 대상의 색상을 표현하는 값 입니다.
 * @param {number} opacity - 적용할 opacity로, 0과 1 사이의 값 입니다.
 */
export const get_RGBA_WithOpacity = (
  color: string | number | chroma.Color,
  opacity: number
) => {
  return chroma(color).alpha(opacity).css()
}

/**
 * 해당 컬러가 white(#FFF)인지 확인합니다.
 * @param {string | number | chroma.Color} color - hex(digit - 3 or 6), rgb, rgba, colorname("white") 형태의 string입니다.
 */
const checkWhiteColor = (color: string | number | chroma.Color) => {
  const trimmedString =
    typeof color === "string" ? color.toLowerCase().split(" ").join("") : color
  const isWhite = chroma(trimmedString).name() === "white"
  return isWhite
}

/**
 * 대상에 적용할 레이어의 상태에 따라, stateLayer의 opacity를 혼합한 blendedLayerColor를 반환합니다.
 * blendLayerColor가 opacity에 관계없이 white(#fff)인 경우, tokens.sys.state.color["container-contents-white"].value값을 적용합니다.
 * opacity는 token.sys.state.opacity값을 적용합니다.
 * @param {string | number | chroma.Color} blendLayerColor - blendLayerColor를 계산할 컬러입니다.
 * @param {"hover" | "pressed"} stateType - stateLayer를 적용할 대상의 상태입니다.
 */
export const getBlendLayerColor = (
  blendLayerColor: string | number | chroma.Color,
  stateType: "hover" | "pressed"
) => {
  const isWhite = checkWhiteColor(blendLayerColor)
  const whitePostfix = isWhite ? "-white" : ""
  const opacity = tokens.sys.state.opacity[`${stateType}${whitePostfix}`].value

  const blendedLayerColor = isWhite
    ? get_RGBA_WithOpacity(whiteOverlayColor, opacity)
    : get_RGBA_WithOpacity(blendLayerColor, opacity)

  return blendedLayerColor
}

/**
 * StateLayer를 적용하는 방식인 Overlay 블렌드 모드로 색상을 계산합니다.
 * @param {string | number | chroma.Color} baseLayerColor - 베이스 레이어의 색상입니다.
 * @param {string | number | chroma.Color} blendLayerColor - 상위 레이어의 색상입니다.
 */
export const getBlendedLayerColor = (
  baseLayerColor: string | number | chroma.Color,
  blendLayerColor: string | number | chroma.Color
) => {
  const layeredColor = overlay(
    get_RGBA_Array(blendLayerColor),
    get_RGBA_Array(baseLayerColor)
  )

  return get_RGBA_CSS(layeredColor)
}
