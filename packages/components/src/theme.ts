import { colorMap } from "@greenlabs/formula-design-token"
import {
  createGlobalThemeContract,
  createGlobalTheme,
  globalStyle,
} from "@vanilla-extract/css"
import { Namespace } from "./constants"

type colorKeys = keyof typeof colorMap
export const colors = Object.fromEntries(
  Object.keys(colorMap).map((k) => [k, `${Namespace}-color-${k}`])
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

export const initTheme = (themeKey: "basic-light" | "basic-dark") => {
  if (themeKey === "basic-light") {
    createGlobalTheme(":root", theme, {
      ...baseThemeSpec,
      colors: colorMap,
    })
  }
}

initTheme("basic-light") // FIXME
