import { colorMap } from "@greenlabs/formula-design-token"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { variants, textColorVar, textStyle } from "./styles.css"
import { sprinkles } from "../sprinkles.css"
import type { Sprinkles } from "../sprinkles.css"

export interface TextProps {
  props: {}
  className: string
  variantKey?: keyof typeof variants
  variant: "body" | "headline" | "caption"
  size: "sm" | "md" | "lg"
  weight: "regular" | "medium" | "bold"
  align?: Sprinkles["textAlign"]
  color?: keyof typeof colorMap
  container: React.ElementType
}

export const Text = ({
  className = "",
  props = {},
  children,
  variantKey,
  variant = "body",
  size = "md",
  weight = "regular",
  color,
  align,
  container = "div",
}: React.PropsWithChildren<TextProps>) => {
  const Container = container
  const _variantKey =
    variantKey ?? (`${variant}-${size}-${weight}` as keyof typeof variants)
  const variantClass = variants[_variantKey]
  const colorProp =
    color && colorMap[color]
      ? assignInlineVars({ [textColorVar]: colorMap[color] })
      : undefined

  if (process.env.NODE_ENV !== "production" && !(_variantKey in variants)) {
    console.error(`You have used non-exist variant key ${_variantKey}.`)
  }

  return (
    <Container
      className={`${variantClass} ${sprinkles({
        textAlign: align,
      })} ${textStyle} ${className}`}
      style={colorProp}
      {...props}
    >
      {children}
    </Container>
  )
}
Text.displayName = "Text"

export const TextBody = (args: TextProps) => <Text {...args} variant="body" />
export const TextHeadline = (args: TextProps) => (
  <Text {...args} variant="headline" />
)
export const TextCaption = (args: TextProps) => (
  <Text {...args} variant="caption" />
)

Text.Body = TextBody
Text.Headline = TextHeadline
Text.Caption = TextCaption
