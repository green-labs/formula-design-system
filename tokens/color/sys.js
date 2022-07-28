const primary = 'green'
const secondary = 'green'
const neutral = 'gray'
const error = 'red'

module.exports = {
  primary: {
    contents: { value: `{color.ref.${primary}.60}` },
    container: { value: `{color.ref.${primary}.60}` },
    'container-contents': { value: `{color.ref.white}` }
  },
  secondary: {
    contents: { value: `{color.ref.${secondary}.90}` },
    container: { value: `{color.ref.${secondary}.10}` },
    'container-contents': { value: `{color.ref.${primary}.60}` }
  },
  'neutral-primary': {
    contents: { value: `{color.ref.${neutral}.90}` },
    container: { value: `{color.ref.white}` },
  },
  'neutral-secondary': {
    contents: { value: `{color.ref.${neutral}.60}` },
    container: { value: `{color.ref.${neutral}.20}` },
  },
  'neutral-tertiary': {
    contents: { value: `{color.ref.${neutral}.40}` },
    container: { value: `{color.ref.${neutral}.10}` },
  },
  inverse: {
    container: { value: `{color.ref.${secondary}.90}` },
    'container-contents': { value: `{color.ref.white}` }
  },
  error: {
    contents: { value: `{color.ref.${neutral}.60}` },
    container: { value: `{color.ref.${neutral}.10}` },
  },
}
