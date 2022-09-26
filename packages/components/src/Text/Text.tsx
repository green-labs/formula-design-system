import { variants } from "./styles.css"

export interface TextProps {
  props?: {}
  className?: string
  variantKey?: keyof typeof variants
  variant?: "body" | "headline" | "caption"
  size?: "sm" | "md" | "lg"
  weight?: "regular" | "medium" | "bold"
  wrapper?: React.ElementType
}

export const Text = ({
  className = "",
  props = {},
  children,
  variantKey,
  variant = "body",
  size = "md",
  weight = "regular",
  wrapper = "div",
}: React.PropsWithChildren<TextProps>) => {
  const Wrapper = wrapper
  const _variantKey = variantKey ?? (`${variant}-${size}-${weight}` as keyof typeof variants)
  const variantClass = variants[_variantKey]

  if (process.env.NODE_ENV !== "production" && !(_variantKey in variants)) {
    console.error(`You have used non-exist variant key ${_variantKey}.`)
  }

  return (
    <Wrapper className={`${variantClass} ${className}`} {...props}>
      {children}
    </Wrapper>
  )
}
Text.displayName = "Text"

export const TextBody = (args: TextProps) => <Text {...args} variant="body" />
export const TextHeadline = (args: TextProps) => <Text {...args} variant="headline" />
export const TextCaption = (args: TextProps) => <Text {...args} variant="caption" />

Text.Body = TextBody
Text.Headline = TextHeadline
Text.Caption = TextCaption
