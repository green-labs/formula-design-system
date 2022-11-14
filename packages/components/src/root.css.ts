import {
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css"

export const theme = createGlobalThemeContract({
  font: {
    body: "fmc--font",
  },
})

createGlobalTheme(":root", theme, {
  font: {
    // FIXME: use token variable
    body: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
  },
})

globalStyle("html, body", {
  fontFamily: theme.font.body,
})
