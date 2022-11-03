type normal =
  | "primary"
  | "secondary-gray"
  | "secondary-color"
  | "tertiary-gray"
  | "tertiary-color"

type negative = "negative-primary" | "negative-secondary"

export type buttonColorTypes = normal | negative

export type buttonSize = "xs" | "sm" | "md" | "lg" | "xl"

export type ButtonCommonProps = {
  color: buttonColorTypes
  size: buttonSize
  props?: {}
}
