import { variants } from "./style.css"

const variantMap = {
  small: "horizontal-small",
  large: "horizontal-large",
  verticalSmall: "vertical-small",
} as const

export interface DividerProps {
  props?: {}
  className?: string
  variant?: keyof typeof variantMap
}

export const Divider = ({
  props,
  variant = "small",
  className,
}: DividerProps) => {
  const variantKey = variantMap[variant]
  return <div className={`${variants[variantKey]} ${className}`} {...props} />
}

Divider.displayName = "Divider"
