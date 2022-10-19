type size = [#xs | #sm | #md | #lg | #xl]
type weight = [#medium | #regular | #bold]
type variant = [#body | #headline | #caption]
type align = [
  | #center
  | #inherit
  | #justify
  | #left
  | #right
  | #start
  | #end
]

// FIXME: find better way to make optionalize props.
type textComponentProps<'a> = {"props": 'a, "className": string, "children": React.element}

type variantKey = [
  | #"caption-xs-regular"
  | #"caption-xs-medium"
  | #"caption-xs-bold"
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
]

@module("@greenlabs/formula-components") @react.component
external make: (
  ~props: {..}=?,
  ~className: string=?,
  ~variant: variant,
  ~size: size,
  ~weight: weight,
  ~color: Formula__ColorMap.t=?,
  ~align: align=?,
  ~tag: string=?,
  ~container: React.componentLike<textComponentProps<{..}>, React.element>=?,
  ~children: React.element,
) => React.element = "Text"

module TextVariant = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~props: {..}=?,
    ~className: string=?,
    ~variantKey: variantKey,
    ~color: Formula__ColorMap.t=?,
    ~align: align=?,
    ~tag: string=?,
    ~container: React.componentLike<textComponentProps<{..}>, React.element>=?,
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
    ~color: Formula__ColorMap.t=?,
    ~align: align=?,
    ~tag: string=?,
    ~container: React.componentLike<textComponentProps<{..}>, React.element>=?,
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
    ~color: Formula__ColorMap.t=?,
    ~align: align=?,
    ~tag: string=?,
    ~container: React.componentLike<textComponentProps<{..}>, React.element>=?,
    ~children: React.element,
  ) => React.element = "TextHeadline"
}

module Caption = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~props: {..}=?,
    ~className: string=?,
    ~weight: weight=?,
    ~color: Formula__ColorMap.t=?,
    ~align: align=?,
    ~tag: string=?,
    ~container: React.componentLike<textComponentProps<{..}>, React.element>=?,
    ~children: React.element,
  ) => React.element = "TextCaption"
}
