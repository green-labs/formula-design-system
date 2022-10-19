import { colorMap } from "@greenlabs/formula-design-token"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { variants, textColorVar, textStyle } from "./styles.css"
import { sprinkles } from "../sprinkles.css"
import type { Sprinkles } from "../sprinkles.css"

interface TextBaseProps extends React.PropsWithChildren {
  props?: {}
  className?: string
  align?: Sprinkles["textAlign"]
  color?: keyof typeof colorMap
  container?: React.ComponentType
  tag?: React.ElementType
}

type variantKey = keyof typeof variants
export interface TextProps extends TextBaseProps {
  variantKey?: variantKey
  variant: "body" | "headline" | "caption"
  size: "xs" | "sm" | "md" | "lg" | "xl"
  weight: "regular" | "medium" | "bold"
}

interface TextVariantProps extends TextBaseProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  weight?: "regular" | "medium" | "bold"
}

export const Text = ({
  className = "",
  props = {},
  children,
  variantKey,
  variant,
  size,
  weight,
  color,
  align,
  container,
  tag = "span",
}: TextProps) => {
  const Container = container ?? tag
  const variantKeyStr = variantKey ?? `${variant}-${size}-${weight}`

  if (process.env.NODE_ENV !== "production" && !(variantKeyStr in variants)) {
    console.error(`You have used non-exist variant key ${variantKeyStr}.`)
  }

  const variantClass = variants[variantKeyStr as keyof typeof variants] ?? ""
  const colorCssVar =
    color && colorMap[color]
      ? assignInlineVars({ [textColorVar]: colorMap[color] })
      : undefined

  return (
    <Container
      className={`${variantClass} ${
        align
          ? sprinkles({
              textAlign: align,
            })
          : ""
      } ${textStyle} ${className}`}
      style={colorCssVar}
      {...props}
    >
      {children}
    </Container>
  )
}
Text.displayName = "Text"

export const TextBody = ({
  weight = "regular",
  size = "sm",
  ...props
}: TextVariantProps) => (
  <Text weight={weight} size={size} {...props} variant="body" />
)

export const TextHeadline = ({
  size = "sm",
  weight = "bold",
  tag = "h3",
  ...props
}: TextVariantProps) => (
  <Text weight={weight} size={size} tag={tag} {...props} variant="headline" />
)

export const TextCaption = ({
  weight = "regular",
  ...props
}: Omit<TextVariantProps, "size">) => (
  <Text weight="regular" {...props} variant="caption" size="xs" />
)

Text.Body = TextBody
Text.Headline = TextHeadline
Text.Caption = TextCaption
