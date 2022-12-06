import type { ReactNode, PropsWithChildren } from "react"
import * as React from "react"
import { useRef } from "react"
import { TextVariant } from "../Text/Text"
import type { variantKeyType as textVariantKey } from "../Text/Text"
import type { textFieldSizeVariants } from "./styles.css"
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
} from "./styles.css"
import type { IconProps } from "../Icon"
import { DeleteFill } from "../Icon"
import { COMPONENT_CLASS, stateClass } from "./common"

type sizeVariantKey = keyof typeof textFieldSizeVariants
type variantKey = keyof typeof textFieldVariants
type InputElement = HTMLInputElement | HTMLTextAreaElement

type TextFieldProps = PropsWithChildren<{
  props?: {}
  id?: string
  inputContainer?: React.ComponentType // FIXME: correct prop type
  inputTag?: "input" | "textarea"
  type?: "text" | "password"
  className?: string
  name?: string
  placeholder?: string
  size?: sizeVariantKey
  variant?: "boxOutline" | "boxFill" | "line"
  prefix?: ReactNode
  prefixIcon?: React.ComponentType<IconProps>
  suffix?: ReactNode
  suffixIcon?: React.ComponentType<IconProps> // suffix element to be shown
  titleText?: string // title text to be shown upper side
  hintText?: string // hint text to be shown below
  state?: "normal" | "error" // visual states (focused, readonly or disabled is separated as prop/attr)
  readOnly?: boolean
  disabled?: boolean
  onChange?: React.ChangeEventHandler<InputElement>
  onFocus?: React.FocusEventHandler<InputElement>
}>

export const TextField = React.forwardRef<InputElement, TextFieldProps>(
  (
    {
      id,
      className = "",
      name,
      inputContainer,
      inputTag = "input",
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
      readOnly = false,
      disabled = false,
      state,
      onChange,
      onFocus,
    },
    forwardedRef
  ) => {
    const InputContainer = inputContainer ?? inputTag
    const variantKey = `${variant}.${size}` as variantKey

    if (
      process.env.NODE_ENV !== "production" &&
      !(variantKey in textFieldVariants)
    ) {
      console.error(`You have used non-exist variant key ${size}.`)
    }
    const containerClass = textFieldVariants[variantKey] ?? ""
    const componentClass = componentStyle[variantKey] ?? ""
    const inputRef: React.Ref<HTMLInputElement> &
      React.Ref<HTMLTextAreaElement> = useRef(null)

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
          <InputContainer
            id={id ?? innerId}
            ref={inputRef}
            name={name}
            type={type}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            className={inputStyle}
            readOnly={readOnly}
            disabled={disabled}
            {...props}
          />
          <span
            className={clearButtonStyle}
            onClick={(_) => {
              const inputEl = inputRef.current
              if (inputEl) {
                inputEl.value = ""
              }
            }}
          >
            <DeleteFill
              size={size === "xsmall" ? "sm" : "lg"}
              color="neutral-tertiary-contents"
            />
          </span>
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
