import { variants } from "./styles.css"

export interface TextProps {
  props: {}
  className: string
  variantKey?: keyof typeof variants
  variant: "body" | "headline" | "caption"
  size: "sm" | "md" | "lg"
  weight: "medium" | "regular" | "bold"
  wrapper: React.ElementType
}

export const Text = ({
  className = "",
  props = {},
  children,
  variant,
  variantKey,
  size,
  weight,
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

export const Body = (args: TextProps) => <Text {...args} variant="body" />
export const Headline = (args: TextProps) => <Text {...args} variant="headline" />
export const Caption = (args: TextProps) => <Text {...args} variant="caption" />
