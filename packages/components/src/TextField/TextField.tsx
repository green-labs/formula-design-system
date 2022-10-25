import type { ReactNode, MouseEvent, PropsWithChildren } from "react"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { TextVariant } from "../Text/Text"
import {
  textFieldSizeVariants,
  textFieldVariants,
  inputStyle,
  prefixIconStyle,
  suffixIconStyle,
  titleStyle,
  hintStyle,
  backgroundColor,
} from "./styles.css"
import { colorMap } from "@greenlabs/formula-design-token"
// import { sprinkles } from "../sprinkles.css"
// import type { Sprinkles } from "../sprinkles.css"

type sizeVariantKey = keyof typeof textFieldSizeVariants

interface TextFieldProps extends PropsWithChildren {
  props?: {}
  type?: "text" | "password"
  className?: string
  placeholder?: string
  size: sizeVariantKey
  prefix?: ReactNode
  suffixText?: ReactNode
  variant?: "outline" | "fill" | "line"
  suffixIcon?: ReactNode // suffix element to be shown
  titleText?: string // title text to be shown upper side
  hintText?: string // hint text to be shown below
  state?: "readonly" | "error"
  onClear?: (event: MouseEvent) => void
}

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
  variant = "outline",
  type = "text",
}: // state,
// onClear,
TextFieldProps) => {
  if (
    process.env.NODE_ENV !== "production" &&
    !(size in textFieldSizeVariants)
  ) {
    console.error(`You have used non-exist variant key ${size}.`)
  }

  const variantClass = textFieldVariants[`${variant}.${size}`] ?? ""

  let inlineVars
  if (variant === "fill") {
    inlineVars = assignInlineVars({
      [backgroundColor]: colorMap["neutral-secondary-container"],
    })
  }

  // TODO: refactor
  const titleVariantKey = size !== "xsmall" ? "body-md-bold" : "body-sm-bold"
  const hintVariantKey =
    size === "large" || size === "medium"
      ? "body-sm-regular"
      : "caption-xs-regular"

  return (
    <div style={inlineVars} className={className}>
      {titleText ? (
        <TextVariant variantKey={titleVariantKey} className={titleStyle}>
          {titleText}
        </TextVariant>
      ) : null}
      <div className={variantClass}>
        {prefix ? <div className={prefixIconStyle}>{prefix}</div> : null}
        <input
          type={type}
          placeholder={placeholder}
          className={inputStyle}
          {...props}
        />
        {/* TODO: put clear button here */}
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
