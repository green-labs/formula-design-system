// todo - type from recipe
type normal =
  | "primary"
  | "secondary-gray"
  | "secondary-color"
  | "tertiary-gray"
  | "tertiary-color"

type negative = "negative-primary" | "negative-secondary"
type custom = "custom"

export type buttonVariants = normal | negative | custom
export type buttonSize = "xs" | "sm" | "md" | "lg" | "xl"
export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: buttonSize
  color: buttonVariants
  props?: {} // escape hatch for rescript
  customStyle?: { backgroundColor: string; color: string }
}
