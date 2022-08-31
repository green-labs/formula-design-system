type thickness =
  | Thin
  | Thick
  | Custom(int)

@react.component
let make = (~color, ~thickness) => {
  let baseStyle = ReactDOMStyle.make(~width="100%", ~backgroundColor=color, ())
  let variantStyle = switch thickness {
  | Thin => ReactDOMStyle.make(~height="1px", ())

  | Thick => ReactDOMStyle.make(~height="10px", ())

  | Custom(height) => ReactDOMStyle.make(~height=`${height->Belt.Int.toString}px`, ())
  }
  <div style={ReactDOMStyle.combine(baseStyle, variantStyle)} />
}
