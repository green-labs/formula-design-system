module Text = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~props: {..}=?,
    ~className: string=?,
    ~variant: [#body | #headline | #caption]=?,
    ~size: [#sm | #md | #lg]=?,
    ~weight: [#medium | #regular | #bold]=?,
    @as("wrapper") ~wrapperEl: string=?,
  ) => React.element = "Text"

  module Body = {
    @module("@greenlabs/formula-components") @react.component
    external make: (
      ~props: {..}=?,
      ~className: string=?,
      ~size: [#sm | #md | #lg]=?,
      ~weight: [#medium | #regular | #bold]=?,
      @as("wrapper") ~wrapperEl: string=?,
    ) => React.element = "Body"
  }

  module Headline = {
    @module("@greenlabs/formula-components") @react.component
    external make: (
      ~props: {..}=?,
      ~className: string=?,
      ~size: [#sm | #md | #lg]=?,
      ~weight: [#medium | #regular | #bold]=?,
      @as("wrapper") ~wrapperEl: string=?,
    ) => React.element = "Headline"
  }

  module Caption = {
    @module("@greenlabs/formula-components") @react.component
    external make: (
      ~props: {..}=?,
      ~className: string=?,
      ~size: [#sm | #md | #lg]=?,
      ~weight: [#medium | #regular | #bold]=?,
      @as("wrapper") ~wrapperEl: string=?,
    ) => React.element = "Caption"
  }
}
