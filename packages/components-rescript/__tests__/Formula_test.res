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
    <Text.TextVariant variantKey={#"body-lg-medium"}>
      {`Test string`->React.string}
    </Text.TextVariant>
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
    <Icon.CalendarLineThin size=#PC />
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
    <Button.AnchorButton
      leftIcon={Icon.WebRegular.make}
      count={4100}
      block={true} // 해당 컴포넌트의 스타일이 { width "100%" , display: "flex" }로 적용됩니다.
      color=#primary
      size=#xl
      text="I'm Anchor Button"
    />
    <Button.ContainerButton
      color=#"negative-secondary" size=#sm text="I'm ContainerButton" block={true}
    />
    <Button.ContainerButton
      leftIcon={Icon.ArrowTriangleDownLineBold.make}
      rightIcon={Icon.VideoLineBold.make}
      color=#"negative-secondary"
      count={40}
      size=#sm
      text="I'm ContainerButton and include icon and count"
    />
    <Button.ContainerButton
      leftIcon={Icon.ArrowTriangleDownLineBold.make}
      rightIcon={Icon.VideoLineBold.make}
      // 버튼 속성이 #custom이지만, customStyle prop이 없는 경우 런타임 에러가 발생합니다.
      color=#custom
      customStyle={{
        backgroundColor: "#34e7e4",
        color: "white",
        countBackgroundColor: "#1e272e",
        countColor: "white",
        borderStyle: "solid",
        borderColor: "#1e272e",
        borderWidth: "3px",
        fill: "#ef5777",
      }}
      count={40}
      size=#sm
      text="I'm CustomButton"
    />
    <Button.IconButton icon={Icon.ArrowRightLineBold.make} color=#"negative-secondary" size=#sm />
  </>
}
