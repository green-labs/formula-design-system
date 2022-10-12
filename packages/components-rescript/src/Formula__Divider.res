type variant = [
  | #small
  | #large
  | #verticalSmall
]

type dividerProps<'a> = {"props": 'a, "className": string, "children": React.element}

@module("@greenlabs/formula-components") @react.component
external make: (~props: {..}=?, ~className: string=?, ~variant: variant=?) => React.element =
  "Divider"
