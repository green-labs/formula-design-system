@module("@greenlabs/formula-components") @react.component
external make: (
  ~props: {..}=?,
  ~className: string=?,
  ~variant: [#small | #large | #verticalSmall]=?,
) => React.element = "Divider"
