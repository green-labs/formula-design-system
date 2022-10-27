import { createVar, style, styleVariants } from "@vanilla-extract/css"
import { tokens } from "@greenlabs/formula-design-token"
import { extract } from "../util"

const { font } = tokens.sys

const keyMaps = [
  ["typeface", "fontFamily"],
  ["font-size", "fontSize"],
  ["leading", "lineHeight"],
  ["tracking", "letterSpacing"],
  ["weight", "fontWeight"],
]

export const variants = styleVariants({
  "caption-xs-regular": extract(font.caption.xs.regular, keyMaps),
  "caption-xs-medium": extract(font.caption.xs.medium, keyMaps),
  "caption-xs-bold": extract(font.caption.xs.bold, keyMaps),
  "body-lg-medium": extract(font.body.lg.medium, keyMaps),
  "body-lg-regular": extract(font.body.lg.regular, keyMaps),
  "body-lg-bold": extract(font.body.lg.bold, keyMaps),
  "body-md-medium": extract(font.body.md.medium, keyMaps),
  "body-md-regular": extract(font.body.md.regular, keyMaps),
  "body-md-bold": extract(font.body.md.bold, keyMaps),
  "body-sm-medium": extract(font.body.sm.medium, keyMaps),
  "body-sm-regular": extract(font.body.sm.regular, keyMaps),
  "body-sm-bold": extract(font.body.sm.bold, keyMaps),
  "body-xl-regular": extract(font.body.xl.regular, keyMaps),
  "body-xl-bold": extract(font.body.xl.bold, keyMaps),
  "headline-sm-bold": extract(font.headline.sm.bold, keyMaps),
  "headline-sm-regular": extract(font.headline.sm.regular, keyMaps),
  "headline-md-bold": extract(font.headline.md.bold, keyMaps),
  "headline-lg-bold": extract(font.headline.lg.bold, keyMaps),
  "headline-xl-bold": extract(font.headline.xl.bold, keyMaps),
})

export const textColorVar = createVar()
export const textStyle = style({
  color: textColorVar,
})
