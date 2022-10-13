module.exports = function ({ dictionary }) {
  return (
    "export default " + JSON.stringify(dictionary.tokens, null, 2) + " as const"
  )
}
