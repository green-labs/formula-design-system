import type React from "react"
import type { Property } from "csstype"

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

type normal =
  | "primary"
  | "secondary-gray"
  | "secondary-color"
  | "tertiary-gray"
  | "tertiary-color"

type negative = "negative-primary" | "negative-secondary"

type buttonCustomColorType = "custom"

export type buttonColorTypes = normal | negative

export type buttonSize = "xs" | "sm" | "md" | "lg" | "xl"

export type buttonColorProps =
  | {
      color: buttonColorTypes
      customStyle?: never
    }
  | {
      color: buttonCustomColorType
      customStyle: ButtonCustomStyleProps
    }

export type ButtonCommonProps = buttonColorProps & {
  size: buttonSize
  props?: {}
}
