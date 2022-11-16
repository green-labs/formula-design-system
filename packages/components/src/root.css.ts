import { colorMap as colorMapDict } from "@greenlabs/formula-design-token"
import {
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css"
import { Namespace } from "./constants"

type colorKeys = keyof typeof colorMapDict
export const colors = Object.fromEntries(
  Object.keys(colorMapDict).map((k) => [k, `${Namespace}-color-${k}`])
) as Record<colorKeys, string>

export const theme = createGlobalThemeContract({
  font: {
    body: `${Namespace}-font`,
  },
  colors: colors,
})

createGlobalTheme(":root", theme, {
  font: {
    // FIXME: use token variable
    body: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
  },
  colors: colorMapDict,
})

globalStyle("html, body", {
  fontFamily: theme.font.body,
})
