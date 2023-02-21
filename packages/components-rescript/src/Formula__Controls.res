module Checkbox = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~id: string=?,
    ~className: string=?,
    ~props: {..}=?,
    ~name: string=?,
    ~onChange: ReactEvent.Form.t => unit=?,
    ~onFocus: ReactEvent.Focus.t => unit=?,
    ~onBlur: ReactEvent.Focus.t => unit=?,
    ~onInput: ReactEvent.Form.t => unit=?,
    ~onKeyDown: ReactEvent.Keyboard.t => unit=?,
    ~onKeyUp: ReactEvent.Keyboard.t => unit=?,
    ~asChild: bool=?,
    ~defaultChecked: bool=?,
    ~checked: bool=?,
    ~onCheckedChange: bool => unit=?,
    ~disabled: bool=?,
    ~required: bool=?,
    ~value: [#on]=?, // "on"
    ~label: string=?,
    ~autoFocus: bool=?,
    // TODO: data-state, data-disabled
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "Checkbox"
}

module Toggle = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~id: string=?,
    ~className: string=?,
    ~props: {..}=?,
    ~name: string=?,
    ~onChange: ReactEvent.Form.t => unit=?,
    ~onFocus: ReactEvent.Focus.t => unit=?,
    ~onBlur: ReactEvent.Focus.t => unit=?,
    ~onInput: ReactEvent.Form.t => unit=?,
    ~onKeyDown: ReactEvent.Keyboard.t => unit=?,
    ~onKeyUp: ReactEvent.Keyboard.t => unit=?,
    ~asChild: bool=?,
    ~forceMount: bool=?,
    ~defaultChecked: bool=?,
    ~checked: bool=?,
    ~onCheckedChange: bool => unit=?,
    ~disabled: bool=?,
    ~required: bool=?,
    ~value: [#on]=?, // "on"
    ~label: string=?,
    ~autoFocus: bool=?,
    // TODO: data-state, data-disabled
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "Toggle"
}

module RadioGroup = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~id: string=?,
    ~className: string=?,
    ~props: {..}=?,
    ~name: string=?,
    ~onChange: ReactEvent.Form.t => unit=?,
    ~onFocus: ReactEvent.Focus.t => unit=?,
    ~onBlur: ReactEvent.Focus.t => unit=?,
    ~onInput: ReactEvent.Form.t => unit=?,
    ~onKeyDown: ReactEvent.Keyboard.t => unit=?,
    ~onKeyUp: ReactEvent.Keyboard.t => unit=?,
    ~asChild: bool=?,
    ~defaultValue: string=?,
    ~value: string=?,
    ~onValueChange: string => unit=?,
    ~disabled: bool=?,
    ~required: bool=?,
    ~orientation: [#horizontal | #vertical]=?,
    ~dir: [#ltr | #rtl]=?,
    ~loop: bool=?,
    ~children: React.element,
    // TODO: data-state, data-disabled
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "RadioGroup"
}

module RadioItem = {
  @module("@greenlabs/formula-components") @react.component
  external make: (
    ~id: string=?,
    ~className: string=?,
    ~props: {..}=?,
    ~onChange: ReactEvent.Form.t => unit=?,
    ~onFocus: ReactEvent.Focus.t => unit=?,
    ~onBlur: ReactEvent.Focus.t => unit=?,
    ~onInput: ReactEvent.Form.t => unit=?,
    ~onKeyDown: ReactEvent.Keyboard.t => unit=?,
    ~onKeyUp: ReactEvent.Keyboard.t => unit=?,
    ~asChild: bool=?,
    ~value: string=?,
    ~disabled: bool=?,
    ~required: bool=?,
    ~label: string=?,
    ~autoFocus: bool=?,
    // TODO: data-disabled
    ~ref: ReactDOM.Ref.t=?,
  ) => React.element = "RadioItem"
}
