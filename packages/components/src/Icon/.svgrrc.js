// https://react-svgr.com/docs/options/

module.exports = {
  template: require("./templates/svgr-cli.template"),
  // descProp:true,
  expandProps: true,
  dimensions: true,
  jsxRuntime: "classic",
  filenameCase: "pascal",
  outDir: "generated",
  ext: "tsx",
  ref: true,
  memo: true,
  typescript: true,
  svgProps: {
    width: "{finalSize}",
    height: "{finalSize}",
    style: "{style}",
    fill: "{fill}",
    viewBox: "0 0 48 48",
    className: "{className}",
  },
  replaceAttrValues: {
    "#1F2024": "{fill}",
  },
};
