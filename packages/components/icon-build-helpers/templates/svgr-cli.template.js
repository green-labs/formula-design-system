function template({ jsx }, { tpl }) {
  const props = `(~size=XL, ~style=ReactDOMStyle.make(), ~className="", ~fill="#1F2024")`; // Todo - get color from color token
  const rescriptComponentDecorator = `@react.component`;
  const rescriptComponentConverter = `let make = ${props} =>`;

  const rescriptComponentInterface = `
    ${rescriptComponentDecorator}
    ${rescriptComponentConverter}
  `;

  return tpl`${rescriptComponentInterface} (${jsx})`;
}

module.exports = template;
