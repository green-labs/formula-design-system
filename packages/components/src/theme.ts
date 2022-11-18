import { colorMap as colorMapDict } from "@greenlabs/formula-design-token"
import { createGlobalThemeContract, globalStyle } from "@vanilla-extract/css"
import { Namespace } from "./constants"

import { colorMap } from "@greenlabs/formula-design-token"
import { createGlobalTheme } from "@vanilla-extract/css"

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

globalStyle("html, body", {
  fontFamily: theme.font.body,
})

const baseThemeSpec = {
  font: {
    // FIXME: use token variable
    body: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
  },
}

export const initTheme = (
  themeKey: "farmmorning-light" | "farmmorning-dark"
) => {
  if (themeKey === "farmmorning-light") {
    createGlobalTheme(":root", theme, {
      ...baseThemeSpec,
      colors: colorMap,
    })
  }
}

initTheme("farmmorning-light")
