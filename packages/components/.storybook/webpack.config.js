const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin")

module.exports = ({ config }) => {
  const plugins = [new VanillaExtractPlugin(), ...config.plugins]
  config.plugins = plugins

  return config
}
