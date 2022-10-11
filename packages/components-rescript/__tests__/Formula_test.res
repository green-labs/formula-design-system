module TestTextContainer = {
  @react.component
  let make = (~props, ~className, ~children) => {
    props->ignore
    <span className> {children} </span>
  }
}

let testText = () => {
  <>
    <Formula.Text container={TestTextContainer.make}> {`Test string`->React.string} </Formula.Text>
    <Formula.Text.TextVariant variantKey={#"body-lg-medium"}>
      {`Test string`->React.string}
    </Formula.Text.TextVariant>
    <Formula.Text.Caption> {`Test string`->React.string} </Formula.Text.Caption>
    <Formula.Text color=#white> {`Test string`->React.string} </Formula.Text>
    <Formula.Text color=#"gray-90"> {`Test string`->React.string} </Formula.Text>
  </>
}
