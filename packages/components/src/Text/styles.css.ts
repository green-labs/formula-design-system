import { styleVariants } from '@vanilla-extract/css'
import json from '@greenlabs/formula-design-token'

const { font } = json.sys

let keyMaps = [
  ['typeface', 'fontFamily'],
  ['font-size', 'fontSize'],
  ['leading', 'lineHeight'],
  ['tracking', 'letterSpacing'],
  ['weight', 'fontWeight']
]

let extract = (obj: any) => {
  return keyMaps.reduce((nextObj, [objKey, cssKey]) => {
    // @ts-expect-error FIXME
    nextObj[cssKey] = obj[objKey].value
    return nextObj
  }, {})
}

export const variants = styleVariants({
  'caption-xs-regular': extract(font.caption.xs.regular),
  'body-lg-medium': extract(font.body.lg.medium),
  'body-lg-regular': extract(font.body.lg.regular),
  'body-lg-bold': extract(font.body.lg.bold),
  'body-md-medium': extract(font.body.md.medium),
  'body-md-regular': extract(font.body.md.regular),
  'body-md-bold': extract(font.body.md.bold),
  'body-sm-medium': extract(font.body.sm.medium),
  'body-sm-regular': extract(font.body.sm.regular),
  'body-sm-bold': extract(font.body.sm.bold),
  'body-xl-regular': extract(font.body.xl.regular),
  'body-xl-bold': extract(font.body.xl.bold),
  'headline-sm-bold': extract(font.headline.sm.bold),
  'headline-sm-regular': extract(font.headline.sm.regular),
  'headline-md-bold': extract(font.headline.md.bold),
  'headline-lg-bold': extract(font.headline.lg.bold),
  'headline-xl-bold': extract(font.headline.xl.bold)
})
