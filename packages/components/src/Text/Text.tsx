import { variants } from "./styles.css"

export interface TextProps {
  props: {}
  className: string
  variant: keyof typeof variants
  wrapper: React.ElementType
}

export const Text = ({
  className = "",
  props = {},
  children,
  variant,
  wrapper = "div",
}: React.PropsWithChildren<TextProps>) => {
  const Wrapper = wrapper

  return (
    <Wrapper className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Wrapper>
  )
}

Text.displayName = "foo"
