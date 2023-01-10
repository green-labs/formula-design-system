import type { ReactNode, PropsWithChildren } from "react"
import * as React from "react"
import { useRef } from "react"
import { TextVariant } from "../Text/Text"
import type { variantKeyType as textVariantKey } from "../Text/Text"
import type { textFieldSizeVariants } from "./styles.css"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import {
  textFieldVariants,
  inputStyle,
  prefixStyle,
  prefixIconStyle,
  suffixTextStyle,
  suffixIconStyle,
  titleStyle,
  hintStyle,
  clearButtonStyle,
  componentStyle,
  vars,
} from "./styles.css"
import type { IconProps } from "../Icon"
import { DeleteFill } from "../Icon"
import { COMPONENT_CLASS, stateClass } from "./common"
import { triggerNativeEventFor } from "../utils/event"

type sizeVariantKey = keyof typeof textFieldSizeVariants
type variantKey = keyof typeof textFieldVariants
export type InputElement = HTMLInputElement | HTMLTextAreaElement
type InputRefType = React.Ref<HTMLInputElement> & React.Ref<HTMLTextAreaElement>

type InputAttributes = React.InputHTMLAttributes<InputElement>

type inputProps = {
  props?: {}
  name?: InputAttributes["name"]
  readOnly?: InputAttributes["readOnly"]
  disabled?: InputAttributes["disabled"]
  placeholder?: InputAttributes["placeholder"]
  onBlur?: InputAttributes["onBlur"]
  onChange?: InputAttributes["onChange"]
  onFocus?: InputAttributes["onFocus"]
  onInput?: InputAttributes["onInput"]
  onKeyDown?: InputAttributes["onKeyDown"]
  onKeyUp?: InputAttributes["onKeyUp"]
  onPaste?: InputAttributes["onPaste"]
  defaultValue?: InputAttributes["defaultValue"]
  value?: InputAttributes["value"]
  inputMode?: InputAttributes["inputMode"]
  minLength?: InputAttributes["minLength"]
  maxLength?: InputAttributes["maxLength"]
  pattern?: InputAttributes["pattern"]
  required?: InputAttributes["required"]
  form?: InputAttributes["form"]
  type?: "text" | "password" | "search" | "tel"
}

// FIXME: make input/textarea compatible
export type renderInputProps = inputProps & {
  id: string
  className: string
  type: "text" | "password" | "search" | "tel" // FIXME: fix case for <textarea />
  inputRef: InputRefType
}
type TextFieldProps = PropsWithChildren<
  inputProps & {
    id?: string
    className?: string
    renderInput?: (props: renderInputProps) => ReactNode
    inputTag?: "input" | "textarea"
    size?: sizeVariantKey
    variant?: "boxOutline" | "boxFill" | "line"
    prefix?: ReactNode
    prefixIcon?: React.ComponentType<IconProps>
    suffix?: ReactNode
    suffixIcon?: React.ComponentType<IconProps> // suffix element to be shown
    titleText?: string // title text to be shown upper side
    hintText?: string // hint text to be shown below
    state?: "normal" | "error" // visual states (focused, readonly or disabled is separated as prop/attr)
    options?: {
      showHintOnFocusOnly?: boolean
      hideClearButton?: boolean
    }
  }
>

export const TextField = React.forwardRef<InputElement, TextFieldProps>(
  (
    {
      id,
      className = "",
      name,
      renderInput,
      inputTag: InputTag = "input",
      props = {},
      placeholder,
      size = "medium",
      prefix,
      prefixIcon,
      suffix,
      suffixIcon,
      titleText,
      hintText,
      variant = "boxOutline",
      type = "text",
      readOnly,
      disabled,
      state,
      minLength,
      maxLength,
      pattern,
      defaultValue,
      value,
      inputMode,
      onInput,
      onKeyDown,
      onKeyUp,
      onPaste,
      onBlur,
      onChange,
      onFocus,
      required,
      form,
      options = {
        hideClearButton: false,
        showHintOnFocusOnly: false,
      },
    },
    forwardedRef
  ) => {
    const variantKey = `${variant}.${size}` as variantKey

    if (
      process.env.NODE_ENV !== "production" &&
      !(variantKey in textFieldVariants)
    ) {
      console.error(`You have used non-exist variant key ${size}.`)
    }
    const containerClass = textFieldVariants[variantKey] ?? ""
    const componentClass = componentStyle[variantKey] ?? ""
    const inputRef: InputRefType = useRef(null)

    React.useImperativeHandle(
      forwardedRef,
      () => inputRef.current as InputElement
    )

    // TODO: refactor
    let titleVariantKey =
      size !== "xsmall" ? "body-md-bold" : ("body-sm-bold" as textVariantKey)
    if (variant === "line") {
      titleVariantKey = "body-sm-medium"
    }
    const hintVariantKey =
      size === "large" || size === "medium"
        ? "body-sm-regular"
        : "caption-xs-regular"

    const PrefixIcon = prefixIcon
    const SuffixIcon = suffixIcon
    const inaccesibleIconColor = readOnly || disabled ? "gray-40" : undefined
    const iconSize = size === "large" || size === "medium" ? "xl" : "lg"
    const innerId = React.useId()

    const inputProps = {
      id: id ?? innerId,
      className: inputStyle,
      name,
      type,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      readOnly,
      disabled,
      minLength,
      maxLength,
      pattern,
      defaultValue,
      value,
      inputMode,
      required,
      form,
      onInput,
      onKeyDown,
      onKeyUp,
      onPaste,
      ...props,
    }

    return (
      <label
        className={`${COMPONENT_CLASS} ${componentClass} ${className} ${stateClass(
          {
            disabled,
            readOnly,
            error: state === "error",
            variantLine: variant === "line",
          }
        )}`}
        htmlFor={id ?? innerId}
        style={
          options.showHintOnFocusOnly
            ? assignInlineVars({ [vars.optionalHintColor]: "transparent" })
            : undefined
        }
      >
        {titleText ? (
          <TextVariant variantKey={titleVariantKey} className={titleStyle}>
            {titleText}
          </TextVariant>
        ) : null}
        <span className={containerClass}>
          {prefix ? (
            <span className={prefixStyle}>{prefix}</span>
          ) : PrefixIcon ? (
            <span className={prefixIconStyle}>
              <PrefixIcon
                color={inaccesibleIconColor ?? "gray-50"}
                size={iconSize}
              />
            </span>
          ) : null}
          {renderInput ? (
            renderInput({ ...inputProps, inputRef })
          ) : (
            <InputTag ref={inputRef} {...inputProps} />
          )}

          {!options.hideClearButton && (
            <span
              className={clearButtonStyle}
              onClick={(_) => {
                const inputEl = inputRef.current
                if (inputEl) {
                  triggerNativeEventFor(inputEl, { event: "input", value: "" })
                }
              }}
            >
              <DeleteFill
                size={size === "xsmall" ? "sm" : "lg"}
                color="neutral-tertiary-contents"
              />
            </span>
          )}
          {suffix ? (
            <span className={suffixTextStyle}>{suffix}</span>
          ) : SuffixIcon ? (
            <span className={suffixIconStyle}>
              <SuffixIcon
                color={inaccesibleIconColor ?? "neutral-primary-contents"}
                size={iconSize}
              />
            </span>
          ) : null}
        </span>
        {hintText ? (
          <TextVariant variantKey={hintVariantKey} className={hintStyle}>
            {hintText}
          </TextVariant>
        ) : null}
      </label>
    )
  }
)
TextField.displayName = "TextField"
