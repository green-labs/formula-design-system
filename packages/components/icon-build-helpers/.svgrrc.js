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
    width: "{size}",
    height: "{size}",
    style: "{style}",
    className: "{className}",
  },
  replaceAttrValues: {
    "#000": "{fill}",
  },
};
