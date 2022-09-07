type size =
  | Small
  | Large

@react.component
let make = (~size) => {
  let baseStyle = ReactDOMStyle.make(~width="100%", ~backgroundColor="#fff", ())
  let variantStyle = switch size {
  | Small => ReactDOMStyle.make(~height="1px", ())

  | Large => ReactDOMStyle.make(~height="10px", ())
  }
  <div style={ReactDOMStyle.combine(baseStyle, variantStyle)} />
}
