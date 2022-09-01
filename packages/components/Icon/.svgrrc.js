module.exports = {
  expandProps: false,
  dimensions: true,
  jsxRuntime: "automatic",
  filenameCase: "pascal",
  outDir: "generated",
  ext: "res",
  template: require("./generators/svgr-cli.template"),
  svgProps: {
    width: "{size}",
    height: "{size}",
    style: "{style}",
    className: "{className}",
    viewBox: "0 0 24 24",
    fill: "none",
  },
  replaceAttrValues: {
    "#000": "{fill}",
  },
};
