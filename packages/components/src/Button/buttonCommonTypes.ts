import type React from "react"
import type { Property } from "csstype"

type normal =
  | "primary"
  | "secondary-gray"
  | "secondary-color"
  | "tertiary-gray"
  | "tertiary-color"

type negative = "negative-primary" | "negative-secondary"

type custom = "custom"

export type buttonColor = normal | negative | custom

export type buttonSize = "xs" | "sm" | "md" | "lg" | "xl"

export interface ButtonCustomStyleProps {
  backgroundColor: string
  color: string
  borderStyle?: Property.BorderStyle
  borderColor?: string
  borderWidth?: string
  fill?: string
  countBackgroundColor?: string
  countColor?: string
}

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: buttonSize
  color: buttonColor
  customStyle?: ButtonCustomStyleProps
  props?: {} // escape hatch for rescript
}
