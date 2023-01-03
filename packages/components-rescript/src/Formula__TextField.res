type renderInputProps<'a> = {
  inputRef: ReactDOM.domRef,
  // common attrs
  props?: 'a,
  name?: string,
  onChange?: ReactEvent.Form.t => unit,
  onFocus?: ReactEvent.Focus.t => unit,
  onBlur?: ReactEvent.Focus.t => unit,
  placeholder?: string,
  readOnly?: bool,
  disabled?: bool,
  minLength?: int,
  maxLength?: int,
  pattern?: string,
  // common attrs, but unlike TextField these are non-optional
  id: string,
  className: string,
  _type: [#text | #password],
}

type options = {
  showHintOnFocusOnly?: bool,
  hideClearButton?: bool,
}

@module("@greenlabs/formula-components") @react.component
external make: (
  // common attrs for renderInput
  ~id: string=?,
  ~className: string=?,
  ~props: {..}=?,
  ~name: string=?,
  ~_type: [#text | #password | #search]=?,
  ~placeholder: string=?,
  ~readOnly: bool=?,
  ~disabled: bool=?,
  ~onChange: ReactEvent.Form.t => unit=?,
  ~onFocus: ReactEvent.Focus.t => unit=?,
  ~onBlur: ReactEvent.Focus.t => unit=?,
  ~minLength: int=?,
  ~maxLength: int=?,
  ~pattern: string=?,
  // common attrs end
  ~inputTag: string=?,
  ~renderInput: renderInputProps<{..}> => React.element=?,
  ~variant: [#boxOutline | #boxFill | #line]=?,
  ~size: [#xsmall | #small | #medium | #large]=?,
  ~prefix: React.element=?,
  ~prefixIcon: React.componentLike<{..}, React.element>=?, // FIXME: Icon component type
  ~suffix: React.element=?,
  ~suffixIcon: React.componentLike<{..}, React.element>=?, // FIXME: Icon component type
  ~titleText: string=?,
  ~hintText: string=?,
  ~state: [#normal | #error]=?,
  ~options: options=?,
  ~ref: ReactDOM.Ref.t=?,
) => React.element = "TextField"
