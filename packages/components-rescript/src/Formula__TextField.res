type renderInputProps<'a> = {
  id: string,
  className: string,
  inputRef: ReactDOM.domRef,
  _type: [#text | #password],
  props?: 'a,
  name?: string,
  onChange?: ReactEvent.Form.t => unit,
  onFocus?: ReactEvent.Focus.t => unit,
  onBlur?: ReactEvent.Focus.t => unit,
  placeholder?: string,
  readOnly?: bool,
  disabled?: bool,
}

type options = {
  showHintOnFocusOnly?: bool,
  hideClearButton?: bool,
}

@module("@greenlabs/formula-components") @react.component
external make: (
  ~props: {..}=?,
  ~name: string=?,
  ~inputTag: string=?,
  ~renderInput: renderInputProps<{..}> => React.element=?,
  ~className: string=?,
  ~variant: [#boxOutline | #boxFill | #line]=?,
  ~size: [#xsmall | #samll | #medium | #large]=?,
  ~_type: [#text | #password]=?,
  ~placeholder: string=?,
  ~prefix: React.element=?,
  ~prefixIcon: React.componentLike<{..}, React.element>=?, // FIXME: Icon component type
  ~suffix: React.element=?,
  ~suffixIcon: React.componentLike<{..}, React.element>=?, // FIXME: Icon component type
  ~titleText: string=?,
  ~hintText: string=?,
  ~state: [#normal | #error]=?,
  ~readOnly: bool=?,
  ~disabled: bool=?,
  ~onChange: ReactEvent.Form.t => unit=?,
  ~onFocus: ReactEvent.Focus.t => unit=?,
  ~onBlur: ReactEvent.Focus.t => unit=?,
  ~ref: ReactDOM.Ref.t=?,
  ~options: options=?,
) => React.element = "TextField"
