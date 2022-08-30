type size = [#small | #medium | #large]
type props = {"size": size, "label": string}

@react.component
let make = (~size, ~label) => {
  let style = switch size {
  | #small => ReactDOMStyle.make(~width="100px", ~height="30px", ~fontSize="12px", ())
  | #medium => ReactDOMStyle.make(~width="150px", ~height="40px", ~fontSize="14px", ())
  | #large => ReactDOMStyle.make(~width="200px", ~height="50px", ~fontSize="16px", ())
  }

  <button style> {label->React.string} </button>
}
