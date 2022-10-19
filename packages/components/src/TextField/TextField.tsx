import type { ReactNode, MouseEvent, PropsWithChildren } from "react"
import { Text } from "../Text/Text"
import {
  textFieldSizeVariants,
  inputStyle,
  prefixIconStyle,
  suffixIconStyle,
  titleStyle,
  hintStyle,
} from "./styles.css"
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

  const variantClass = textFieldSizeVariants[size] ?? ""

  return (
    <div>
      {titleText ? (
        // FIXME: need to be changed according to size change
        <Text.Body size="md" weight="bold" className={titleStyle}>
          {titleText}
        </Text.Body>
      ) : null}
      <div className={`${variantClass} ${className}`}>
        {prefix ? <div className={prefixIconStyle}>{prefix}</div> : null}
        <input
          type={type}
          placeholder={placeholder}
          className={`
          ${inputStyle}
          ${
            /*
            align
              ? sprinkles({
                  textAlign: align,
                })
              : ""
              */ ""
          }`}
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
        // FIXME: need to be changed according to size change
        <Text.Caption weight="bold" className={hintStyle}>
          {hintText}
        </Text.Caption>
      ) : null}
    </div>
  )
}
TextField.displayName = "TextField"
