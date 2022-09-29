import { variants } from "./style.css"

export interface DividerProps {
  props: {}
  className: string
  variantKey?: keyof typeof variants
  variant: "small" | "large" | "verticalSmall"
}

const variantMap = {
  small: "horizontal-small",
  large: "horizontal-large",
  verticalSmall: "vertical-small",
}

export const Divider = ({
  props,
  variantKey,
  variant,
  className,
}: DividerProps) => {
  const variantClass = variantMap[variantKey || variant]

  if (
    process.env.NODE_ENV !== "production" &&
    !(variantClass && variantClass in variants)
  ) {
    console.error(`You have used non-exist variant key ${variant}.`)
  }

  return <div className={variants[variantClass]} {...props} />
}
Divider.displayName = "Divider"
