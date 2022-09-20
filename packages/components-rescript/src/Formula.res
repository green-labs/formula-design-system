module Text = {
  type size = [#sm | #md | #lg]
  type weight = [#medium | #regular | #bold]
  type variant = [#body | #headline | #caption]

  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~props: {..}=?,
    ~className: string=?,
    ~variant: variant=?,
    ~size: size=?,
    ~weight: weight=?,
    @as("wrapper") ~wrapperEl: string=?,
  ) => React.element = "Text"

  module TextVariant = {
    @module("@greenlabs/formula-components") @react.component
    external make: (
      ~props: {..}=?,
      ~className: string=?,
      ~variantKey: [
        | #"caption-xs-regular"
        | #"body-lg-medium"
        | #"body-lg-regular"
        | #"body-lg-bold"
        | #"body-md-medium"
        | #"body-md-regular"
        | #"body-md-bold"
        | #"body-sm-medium"
        | #"body-sm-regular"
        | #"body-sm-bold"
        | #"body-xl-regular"
        | #"body-xl-bold"
        | #"headline-sm-bold"
        | #"headline-sm-regular"
        | #"headline-md-bold"
        | #"headline-lg-bold"
        | #"headline-xl-bold"
      ],
      @as("wrapper") ~wrapperEl: string=?,
    ) => React.element = "Text"
  }

  module Body = {
    @module("@greenlabs/formula-components") @react.component
    external make: (
      ~props: {..}=?,
      ~className: string=?,
      ~size: size=?,
      ~weight: weight=?,
      @as("wrapper") ~wrapperEl: string=?,
    ) => React.element = "TextBody"
  }

  module Headline = {
    @module("@greenlabs/formula-components") @react.component
    external make: (
      ~props: {..}=?,
      ~className: string=?,
      ~size: size=?,
      ~weight: weight=?,
      @as("wrapper") ~wrapperEl: string=?,
    ) => React.element = "TextHeadline"
  }

  module Caption = {
    @module("@greenlabs/formula-components") @react.component
    external make: (
      ~props: {..}=?,
      ~className: string=?,
      ~size: size=?,
      ~weight: weight=?,
      @as("wrapper") ~wrapperEl: string=?,
    ) => React.element = "TextCaption"
  }
}
