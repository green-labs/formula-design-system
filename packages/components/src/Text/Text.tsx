import { colorMap } from "@greenlabs/formula-design-token"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { variants, textColorVar, textStyle } from "./styles.css"
import { sprinkles } from "../sprinkles.css"
import type { Sprinkles } from "../sprinkles.css"

interface TextBaseProps {
  props: {}
  className: string
  align?: Sprinkles["textAlign"]
  color?: keyof typeof colorMap
  container?: React.ComponentType
  tag?: React.ElementType
}

export interface TextProps extends TextBaseProps {
  variantKey?: keyof typeof variants
  variant: "body" | "headline" | "caption"
  size: "xs" | "sm" | "md" | "lg" | "xl"
  weight: "regular" | "medium" | "bold"
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
}: React.PropsWithChildren<TextProps>) => {
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

export const TextBody = (args: TextProps) => <Text {...args} variant="body" />
export const TextHeadline = ({ tag = "h3", ...props }: TextProps) => (
  <Text tag={tag} {...props} variant="headline" />
)

export const TextCaption = (args: TextBaseProps) => (
  <Text {...args} variant="caption" size="xs" weight="regular" />
)

Text.Body = TextBody
Text.Headline = TextHeadline
Text.Caption = TextCaption
