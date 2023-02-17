export default {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|cjs|mjs|jsx|ts|tsx)",
  ],
  babel: async (options) => ({
    // Update your babel configuration here
    ...options,
  }),
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-webpack5",
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config
  },
  core: {
    builder: "webpack5",
  },
}
