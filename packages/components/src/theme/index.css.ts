import { colorMap } from "@greenlabs/formula-design-token"
import {
  createGlobalThemeContract,
  createGlobalTheme,
  globalStyle,
} from "@vanilla-extract/css"
import { Namespace } from "../constants"
import { getThemeClass } from "./shared"

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

const baseThemeSpec = {
  font: {
    // FIXME: use token variable
    body: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
  },
}

globalStyle("html, body", {
  fontFamily: theme.font.body,
})

export const themeImpls = {
  basic: {
    light: createGlobalTheme(
      `:root.${getThemeClass("basic")}, :root .${getThemeClass("basic")}`,
      theme,
      {
        ...baseThemeSpec,
        colors: colorMap,
      }
    ),
  },
}
