import { colorMap } from "@greenlabs/formula-design-token"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { variants, textColorVar, textStyle } from "./styles.css"
import { sprinkles } from "../sprinkles.css"
import type { Sprinkles } from "../sprinkles.css"

export type variantKeyType = keyof typeof variants

type TextBaseProps<T extends {} = {}> = T &
  React.PropsWithChildren<{
    props?: {}
    className?: string
    align?: Sprinkles["textAlign"]
    color?: keyof typeof colorMap
    container?: React.ComponentType
    tag?: React.ElementType
  }>

export type TextProps = TextBaseProps<{
  variant: "body" | "headline" | "caption"
  size: "xs" | "sm" | "md" | "lg" | "xl"
  weight: "regular" | "medium" | "bold"
}>

type TextPartialProps = TextBaseProps<{
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  weight?: "regular" | "medium" | "bold"
}>

type TextVariantProps = TextBaseProps<{
  variantKey: variantKeyType
}>
const TextBase = ({
  className = "",
  props = {},
  children,
  variantKey,
  color,
  align,
  container,
  tag = "span",
}: TextVariantProps) => {
  const Container = container ?? tag

  if (
    process.env.NODE_ENV !== "production" &&
    !((variantKey as variantKeyType) in variants)
  ) {
    console.error(`You have used non-exist variant key ${variantKey}.`)
  }

  const variantClass = variants[variantKey as variantKeyType] ?? ""
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

/**
 * variantKey를 직접 넘길 수 있는 형태의 Text 베이스 컴포넌트
 */
export const TextVariant = ({ variantKey, ...props }: TextVariantProps) => {
  return <TextBase variantKey={variantKey} {...props} />
}

/**
 * Body, Headline, Caption의 기초가 되는 컴포넌트
 */
export const Text = ({ variant, size, weight, ...props }: TextProps) => {
  const variantKey = `${variant}-${size}-${weight}` as variantKeyType

  return <TextVariant variantKey={variantKey} {...props} />
}
Text.displayName = "Text"

export const TextBody = ({
  weight = "regular",
  size = "sm",
  ...props
}: TextPartialProps) => (
  <Text weight={weight} size={size} {...props} variant="body" />
)

export const TextHeadline = ({
  size = "sm",
  weight = "bold",
  tag = "h3",
  ...props
}: TextPartialProps) => (
  <Text weight={weight} size={size} tag={tag} {...props} variant="headline" />
)

export const TextCaption = ({
  weight = "regular",
  ...props
}: Omit<TextPartialProps, "size">) => (
  <Text weight={weight} {...props} variant="caption" size="xs" />
)

Text.Body = TextBody
Text.Headline = TextHeadline
Text.Caption = TextCaption
