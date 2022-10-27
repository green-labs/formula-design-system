import type { ReactNode, MouseEvent, PropsWithChildren } from "react"
import { useRef } from "react"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { TextVariant } from "../Text/Text"
import type { variantKeyType as textVariantKey } from "../Text/Text"
import type { textFieldSizeVariants } from "./styles.css"
import {
  textFieldVariants,
  inputStyle,
  prefixIconStyle,
  suffixIconStyle,
  titleStyle,
  hintStyle,
  vars,
  clearButtonStyle,
  componentStyle,
} from "./styles.css"
import { colorMap } from "@greenlabs/formula-design-token"
import { DeleteFill } from "../Icon"

type sizeVariantKey = keyof typeof textFieldSizeVariants
type variantKey = keyof typeof textFieldVariants
interface TextFieldProps extends PropsWithChildren {
  props?: {}
  type?: "text" | "password"
  className?: string
  placeholder?: string
  size: sizeVariantKey
  prefix?: ReactNode
  suffixText?: ReactNode
  variant?: "boxOutline" | "boxFill" | "line"
  suffixIcon?: ReactNode // suffix element to be shown
  titleText?: string // title text to be shown upper side
  hintText?: string // hint text to be shown below
  state?: "normal" | "readonly" | "error"
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
}

const COMPONENT_CLASS = "fmc-textfield"

export const TextField = ({
  className = "",
  props = {},
  placeholder,
  size,
  prefix,
  suffixText,
  suffixIcon,
  titleText,
  hintText,
  variant = "boxOutline",
  type = "text",
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

  const inlineVarsObj: Record<string, string> = {}
  if (state === "error") {
    inlineVarsObj[vars.stateColor] = colorMap["error-contents"]
  }
  if (variant === "boxFill") {
    inlineVarsObj[vars.backgroundColor] =
      colorMap["neutral-secondary-container"]
  } else if (variant === "line") {
    inlineVarsObj[vars.titleColor] = colorMap["neutral-secondary-contents"]
  }
  const inlineVars = assignInlineVars(inlineVarsObj)

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

  return (
    <div
      style={inlineVars}
      className={`${COMPONENT_CLASS} ${componentClass} ${className}`}
    >
      {titleText ? (
        <TextVariant variantKey={titleVariantKey} className={titleStyle}>
          {titleText}
        </TextVariant>
      ) : null}
      <div className={containerClass}>
        {prefix ? <div className={prefixIconStyle}>{prefix}</div> : null}
        <input
          ref={inputRef}
          type={type}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          className={inputStyle}
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
          <DeleteFill size="SM" color="neutral-tertiary-contents" />
        </div>
        {suffixText ? (
          <div className={suffixIconStyle}>{suffixText}</div>
        ) : suffixIcon ? (
          <div className={suffixIconStyle}>{suffixIcon}</div>
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
