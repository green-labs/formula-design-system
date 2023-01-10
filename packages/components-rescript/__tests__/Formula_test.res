open Formula

module TestTextContainer = {
  @react.component
  let make = (~className=?, ~children=?) => {
    <span ?className> {children->Belt.Option.getWithDefault(React.null)} </span>
  }
}

let testText = () => {
  <>
    <Text
      variant=#body
      size=#lg
      weight=#bold
      container={({?className, ?children}) => {
        <TestTextContainer ?className ?children />
      }}
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
  <>
    <Icon.CalendarLineBold />
    <Icon.CalendarLineRegular color=#"lightblue-90" />
    <Icon.CalendarLineThin size=#pc />
    <Icon.CalendarFill sizePx=32 /> // for custom size
    <Icon.CalendarFill className="test-class__name" />
    <Icon.CalendarFill style={ReactDOMStyle.make(~fill="red", ())} />
  </>
}

let testDivider = () => {
  <>
    <Divider />
    <Divider className="some-className" variant=#large props={{"id": "id-of-divider"}} />
  </>
}

let testButton = () => {
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
    <TextField inputTag="textarea" />
    <TextField
      renderInput={({?onChange, id, className, inputRef}) => {
        <input ?onChange id className ref={inputRef} />
      }}
    />
    <TextField
      options={{
        showHintOnFocusOnly: true,
      }}
    />
  </>
}

let textTextTab = () => {
  let triggerTestRef = React.useRef(Js.Nullable.null)

  <TextTab.List
    defaultValue="a"
    fullWidth={true}
    onValueChange={_ => ()}
    contents={<>
      <TextTab.Content value="a"> {`this is a`->React.string} </TextTab.Content>
      <TextTab.Content value="b"> {`this is b`->React.string} </TextTab.Content>
      <TextTab.Content value="c"> {`this is c`->React.string} </TextTab.Content>
    </>}>
    <TextTab.Trigger title="텍스트 a" value="a" icon={Icon.ArrowDownLineBold.make} />
    <TextTab.Trigger
      ref={ReactDOM.Ref.domRef(triggerTestRef)}
      title="텍스트 "
      value="b"
      badge={{
        type_: #countSimple,
        value: 9,
      }}
    />
    <TextTab.Trigger
      value="c"
      badge={{
        type_: #simple,
      }}>
      <Icon.ArrowDownLineBold />
    </TextTab.Trigger>
  </TextTab.List>
}

let testCommon = () => {
  <div style={ReactDOM.Style.make(~color=Formula.Theme.themeColors["blue-100"], ())} />
}
