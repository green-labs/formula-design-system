import { styleVariants } from "@vanilla-extract/css"

export const sizeVariants = styleVariants({
  xs: { width: 32, height: 32 },
  sm: { width: 40, height: 40 },
  md: { width: 48, height: 48 },
  lg: { width: 56, height: 56 },
  xl: { width: 64, height: 64 },
})
