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
    <Text
      variant=#body
      size=#lg
      weight=#bold
      container={TestTextContainer.make}
      props={{"id": "id-of-text"}}>
      {`Test string`->React.string}
    </Text>
    <Text.Caption> {`Test string`->React.string} </Text.Caption>
    <Text.Headline size=#lg weight=#bold color=#white>
      {`Test string`->React.string}
    </Text.Headline>
    <Text.Headline size=#lg weight=#bold tag="h6"> {`Test string`->React.string} </Text.Headline>
    <Text variant=#body size=#lg weight=#bold color=#white> {`Test string`->React.string} </Text>
    <Text variant=#body size=#lg weight=#bold color=#"gray-90">
      {`Test string`->React.string}
    </Text>
  </>
}

let testIcon = () => {
  open Formula
  <>
    <Icon.CalendarLineBold />
    <Icon.CalendarLineRegular color=#"lightblue-90" />
    <Icon.CalendarLineThin size=#pc />
    <Icon.CalendarFill sizePx=32 /> // for custom size
    <Icon.CalendarFill classname="test-class__name" />
    <Icon.CalendarFill style={ReactDOMStyle.make(~fill="red", ())} />
  </>
}

let testDivider = () => {
  open Formula
  <>
    <Divider />
    <Divider className="some-className" variant=#large props={{"id": "id-of-divider"}} />
  </>
}

let testButton = () => {
  open Formula
  <>
    <Button.Container color=#primary size=#sm text="I'm ContainerButton" />
    <Button.Container color=#"secondary-gray" size=#sm block=true text="I'm full width button" />
    <Button.Container
      leftIcon={Icon.ArrowTriangleDownLineBold.make}
      rightIcon={Icon.VideoLineBold.make}
      color=#"negative-secondary"
      count={40}
      size=#sm
      text="I'm ContainerButton and include icon and count"
    />
    <Button.Icon icon={Icon.ArrowRightLineBold.make} color=#"negative-secondary" size=#sm />
    <Button.Anchor color=#primary size=#xl text="I'm Anchor button" />
  </>
}

let testTextField = () => {
  open Formula
  <>
    <TextField />
    <TextField _type=#password size=#large />
    <TextField
      prefix={"$"->React.string}
      suffix={"인증하기"->React.string}
      titleText={"타이틀"}
      hintText={"힌트"}
      placeholder={"플레이스홀더"}
      readOnly={true}
      disabled={true}
      onChange={_ => {
        ()
      }}
      onFocus={_ => {
        ()
      }}
    />
    <TextField prefixIcon={Icon.ArrowDownLineBold.make} suffixIcon={Icon.ArrowDownLineBold.make} />
  </>
}
