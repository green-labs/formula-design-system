type size = [#xs | #sm | #md | #lg | #xl]

type color = [
  | #primary
  | #"secondary-gray"
  | #"secondary-color"
  | #"tertiary-gray"
  | #"tertiary-color"
  | #"negative-primary"
  | #"negative-secondary"
]

type iconComponentProps = React.componentLike<
  {
    "classname": option<string>,
    "color": option<Formula__ColorMap.t>,
    "ref": option<ReactDOM.Ref.t>,
    "size": option<Formula__Icon.size>,
    "sizePx": option<int>,
    "style": option<ReactDOMStyle.t>,
  },
  React.element,
>

module Container = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    // React Synthetic Events
    @as("type") ~type_: string=?,
    ~onClick: ReactEvent.Mouse.t => unit=?,
    // Formula Button Props
    ~color: color,
    ~size: size,
    ~text: string,
    ~leftIcon: iconComponentProps=?,
    ~rightIcon: iconComponentProps=?,
    ~count: int=?,
    ~disabled: bool=?,
    ~className: string=?,
    ~style: ReactDOMStyle.t=?,
    ~children: React.element=?,
    ~block: bool=?,
    ~props: {..}=?,
  ) => React.element = "ContainerButton"
}

module Icon = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    // React Synthetic Events
    @as("type") ~type_: string=?,
    ~onClick: ReactEvent.Mouse.t => unit=?,
    // Formula Button Props
    ~color: color,
    ~size: size,
    ~icon: iconComponentProps=?,
    ~disabled: bool=?,
    ~className: string=?,
    ~style: ReactDOMStyle.t=?,
    ~block: bool=?,
    ~props: {..}=?,
  ) => React.element = "IconButton"
}

module Anchor = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~color: color,
    ~size: size,
    ~text: string,
    ~leftIcon: iconComponentProps=?,
    ~rightIcon: iconComponentProps=?,
    ~count: int=?,
    ~className: string=?,
    ~style: ReactDOMStyle.t=?,
    ~children: React.element=?,
    ~block: bool=?,
    ~props: {..}=?,
  ) => React.element = "AnchorButton"
}
