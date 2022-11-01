import type { ReactNode, PropsWithChildren } from "react"
import { useRef } from "react"
import { TextVariant } from "../Text/Text"
import type { variantKeyType as textVariantKey } from "../Text/Text"
import type { textFieldSizeVariants } from "./styles.css"
import {
  textFieldVariants,
  inputStyle,
  prefixIconStyle,
  suffixStyle,
  suffixIconStyle,
  titleStyle,
  hintStyle,
  clearButtonStyle,
  componentStyle,
} from "./styles.css"
import type { IconProps } from "../Icon"
import { DeleteFill } from "../Icon"
import { COMPONENT_CLASS, stateClass } from "./common"
import { colorMap } from "@greenlabs/formula-design-token"

type sizeVariantKey = keyof typeof textFieldSizeVariants
type variantKey = keyof typeof textFieldVariants
interface TextFieldProps extends PropsWithChildren {
  props?: {}
  type?: "text" | "password"
  className?: string
  placeholder?: string
  size: sizeVariantKey
  prefix?: ReactNode
  prefixIcon?: React.ComponentType<IconProps>
  variant?: "boxOutline" | "boxFill" | "line"
  suffix?: ReactNode
  suffixIcon?: React.ComponentType<IconProps> // suffix element to be shown
  titleText?: string // title text to be shown upper side
  hintText?: string // hint text to be shown below
  state?: "normal" | "error" // visual states (focused, readonly or disabled is separated as prop/attr)
  readOnly?: boolean
  disabled?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
}

export const TextField = ({
  className = "",
  props = {},
  placeholder,
  size,
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
}: TextFieldProps) => {
  const variantKey = `${variant}.${size}` as variantKey

  if (
    process.env.NODE_ENV !== "production" &&
    !(variantKey in textFieldVariants)
  ) {
    console.error(`You have used non-exist variant key ${size}.`)
  }
  const containerClass = textFieldVariants[variantKey] ?? ""
  const componentClass = componentStyle[variantKey] ?? ""
  const inputRef = useRef<HTMLInputElement>(null)

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

  return (
    <div
      className={`${COMPONENT_CLASS} ${componentClass} ${className} ${stateClass(
        {
          disabled,
          readOnly,
          error: state === "error",
          variantLine: variant === "line",
        }
      )}`}
    >
      {titleText ? (
        <TextVariant variantKey={titleVariantKey} className={titleStyle}>
          {titleText}
        </TextVariant>
      ) : null}
      <div className={containerClass}>
        {prefix ? (
          <div className={prefixIconStyle}>{prefix}</div>
        ) : PrefixIcon ? (
          <div className={prefixIconStyle}>
            <PrefixIcon color={inaccesibleIconColor ?? "gray-50"} size="lg" />
          </div>
        ) : null}
        <input
          ref={inputRef}
          type={type}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          className={inputStyle}
          readOnly={readOnly}
          disabled={disabled}
          {...props}
        />
        <div
          className={clearButtonStyle}
          onClick={(_) => {
            const inputEl = inputRef.current
            if (inputEl) {
              inputEl.value = ""
            }
          }}
        >
          <DeleteFill size="sm" color="neutral-tertiary-contents" />
        </div>
        {suffix ? (
          <div className={suffixStyle}>{suffix}</div>
        ) : SuffixIcon ? (
          <div className={suffixIconStyle}>
            <SuffixIcon
              color={inaccesibleIconColor ?? "neutral-primary-contents"}
              size="lg"
            />
          </div>
        ) : null}
      </div>
      {hintText ? (
        <TextVariant variantKey={hintVariantKey} className={hintStyle}>
          {hintText}
        </TextVariant>
      ) : null}
    </div>
  )
}
TextField.displayName = "TextField"
