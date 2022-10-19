// Button Common Types
// - size
// - variants

export type normal =
  | "primary"
  | "secondary-gray"
  | "secondary-color"
  | "tertiary-gray"
  | "tertiary-color"

export type negative = "negative-primary" | "negative-secondary"

export type buttonVariants = normal | negative

export type buttonSize = "xs" | "sm" | "md" | "lg" | "xl"
