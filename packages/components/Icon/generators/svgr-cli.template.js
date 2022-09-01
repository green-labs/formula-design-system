function template({ jsx }, { tpl }) {
  const props = `(~size, ~style, ~className, ~fill)`;
  const rescriptComponentDecorator = `@react.component`;
  const rescriptComponentConverter = `let make = ${props} =>`;

  const rescriptComponentInterface = `
  ${rescriptComponentDecorator}
  ${rescriptComponentConverter}
`;

  return tpl`${rescriptComponentInterface} 
  (${jsx})
  `;
}

module.exports = template;
