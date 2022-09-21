module Text = {
  type size = [#sm | #md | #lg]
  type weight = [#medium | #regular | #bold]
  type variant = [#body | #headline | #caption]
  @deriving(jsConverter)
  type variantKey = [
    | @as("caption-xs-regular") #captionXsRegular
    | @as("body-lg-medium") #bodyLgMedium
    | @as("body-lg-regular") #bodyLgRegular
    | @as("body-lg-bold") #bodyLgBold
    | @as("body-md-medium") #bodyMdMedium
    | @as("body-md-regular") #bodyMdRegular
    | @as("body-md-bold") #bodyMdBold
    | @as("body-sm-medium") #bodySmMedium
    | @as("body-sm-regular") #bodySmRegular
    | @as("body-sm-bold") #bodySmBold
    | @as("body-xl-regular") #bodyXlRegular
    | @as("body-xl-bold") #bodyXlBold
    | @as("headline-sm-bold") #headlineSmBold
    | @as("headline-sm-regular") #headlineSmRegular
    | @as("headline-md-bold") #headlineMdBold
    | @as("headline-lg-bold") #headlineLgBold
    | @as("headline-xl-bold") #headlineXlBold
  ]

  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~props: {..}=?,
    ~className: string=?,
    ~variant: variant=?,
    ~size: size=?,
    ~weight: weight=?,
    @as("wrapper") ~wrapperEl: string=?,
    ~children: React.element,
  ) => React.element = "Text"

  module TextVariant = {
    @module("@greenlabs/formula-components") @react.component
    external make: (
      ~props: {..}=?,
      ~className: string=?,
      ~variantKey: variantKey,
      @as("wrapper") ~wrapperEl: string=?,
      ~children: React.element,
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
      ~children: React.element,
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
      ~children: React.element,
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
      ~children: React.element,
    ) => React.element = "TextCaption"
  }
}
