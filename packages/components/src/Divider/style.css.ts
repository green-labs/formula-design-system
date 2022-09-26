import { styleVariants, style } from '@vanilla-extract/css'
import json from '@greenlabs/formula-design-token'

const { color } = json.sys

export const variants = styleVariants({
  'horizontal-small': {
    backgroundColor: color.divider.value,
    width: '100%',
    height: '1px'
  },
  'horizontal-large': {
    backgroundColor: color.divider.value,
    width: '100%',
    height: '10px'
  },
  'vertical-small': {
    backgroundColor: color.divider.value,
    width: '1px',
    height: '100%'
  }
})
