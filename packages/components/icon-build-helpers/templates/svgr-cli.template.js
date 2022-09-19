const template = (
  { jsx, imports, interfaces, componentName, props, exports },
  { tpl }
) => {
  return tpl`
  ${imports}
  ${interfaces}

  const ${componentName} =(${props}) => (
    ${jsx}
  )
  ${exports}
`;
};

module.exports = template;
