type size = [#xs | #sm | #md | #lg | #xl]

type color = [
  | #primary
  | #"secondary-gray"
  | #"secondary-color"
  | #"tertiary-gray"
  | #"tertiary-color"
  | #"negative-primary"
  | #"negative-secondary"
  | #custom
]

type buttonCustomStyleProps = {
  backgroundColor: string,
  color: string,
  borderStyle?: string,
  borderColor?: string,
  borderWidth?: string,
  fill?: string,
  countBackgroundColor?: string,
  countColor?: string,
}

@module("@greenlabs/formula-components") @react.component
external make: (
  // React Synthetic Events
  @as("type") ~type_: string=?,
  ~onClick: ReactEvent.Mouse.t => unit=?,
  // Formula Button Props
  ~color: color,
  ~size: size,
  ~text: string,
  ~leftIcon: React.element=?,
  ~rightIcon: React.element=?,
  ~count: int=?,
  ~disabled: bool=?,
  ~customStyle: buttonCustomStyleProps=?,
  ~className: string=?,
  ~style: ReactDOMStyle.t=?,
  ~children: React.element=?,
  ~props: {..}=?,
) => React.element = "ContainerButton"

@module("@greenlabs/formula-components") @react.component
external make: (
  // React Synthetic Events
  @as("type") ~type_: string=?,
  ~onClick: ReactEvent.Mouse.t => unit=?,
  // Formula Button Props
  ~color: color,
  ~size: size,
  ~icon: React.element,
  ~disabled: bool=?,
  ~customStyle: buttonCustomStyleProps=?,
  ~className: string=?,
  ~style: ReactDOMStyle.t=?,
  ~props: {..}=?,
) => React.element = "IconButton"
