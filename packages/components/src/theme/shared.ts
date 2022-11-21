import { Namespace } from "../constants"

const THEME_PREFIX = `${Namespace}-theme-`
/**
 * expected example) "fmc-theme-basic-light"
 */
export type brand = "basic"
export type themeName = "light"
export const getThemeClass = (
  brand: brand = "basic",
  themeName: "light" = "light"
) => `${THEME_PREFIX}-${brand}-${themeName}`
