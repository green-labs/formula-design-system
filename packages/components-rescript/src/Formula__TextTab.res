module List = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~props: {..}=?,
    ~rootProps: {..}=?, // TODO: RadixUI props
    ~contents: React.element=?,
    ~fullWidth: bool=?,
    ~onValueChange: string => unit=?,
    ~children: React.element,
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "TextTab"
}

module Trigger = {
  type badgeType = {
    type_: [#count | #simple | #countSimple],
    value?: int,
  }

  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~icon: React.componentLike<{..}, React.element>=?, // FIXME: Icon component type
    ~title: string=?,
    ~badge: badgeType=?,
    ~value: string,
    ~children: React.element=?,
  ) => React.element = "TextTab"
}

module Content = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~value: string,
    ~children: React.element=?,
    ~props: ReactDOM.domProps=?,
  ) => React.element = "TextTab"
}
