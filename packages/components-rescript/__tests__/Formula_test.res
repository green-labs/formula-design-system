module TestTextContainer = {
  @react.component
  let make = (~props, ~className, ~children) => {
    props->ignore
    <span className> {children} </span>
  }
}

let testText = () => {
  open Formula
  <>
    <Text variant=#body size=#lg weight=#bold container={TestTextContainer.make}>
      {`Test string`->React.string}
    </Text>
    <Text.TextVariant variantKey={#"body-lg-medium"}>
      {`Test string`->React.string}
    </Text.TextVariant>
    <Text.Caption> {`Test string`->React.string} </Text.Caption>
    <Text.Headline size=#lg weight=#bold color=#white>
      {`Test string`->React.string}
    </Text.Headline>
    <Text variant=#body size=#lg weight=#bold color=#white> {`Test string`->React.string} </Text>
    <Text variant=#body size=#lg weight=#bold color=#"gray-90">
      {`Test string`->React.string}
    </Text>
  </>
}

let testIcon = () => {
  <>
    <Formula.Icon.CalendarLineBold />
    <Formula.Icon.CalendarLineRegular fill=#"lightblue-90" />
    <Formula.Icon.CalendarLineThin size=#PC />
    <Formula.Icon.CalendarFill sizePx=32 /> // for custom size
    <Formula.Icon.CalendarFill classname="test-class__name" />
    <Formula.Icon.CalendarFill style={ReactDOMStyle.make(~fill="red", ())} />
  </>
}
