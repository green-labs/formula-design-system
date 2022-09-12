// https://react-svgr.com/docs/options/

module.exports = {
  expandProps: false,
  dimensions: true,
  jsxRuntime: "automatic",
  filenameCase: "pascal",
  outDir: "generated",
  ext: "res",
  template: require("./templates/svgr-cli.template"),
  svgProps: {
    width: "{toString(size)}",
    height: "{toString(size)}",
    style: "{style}",
    className: "{className}",
    viewBox: "0 0 24 24",
    fill: "none",
  },
  replaceAttrValues: {
    "#000": "{fill}",
  },
};
