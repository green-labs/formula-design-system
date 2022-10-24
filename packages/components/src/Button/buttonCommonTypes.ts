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

export type buttonColorTypes = normal | negative

type buttonCustomColorType = "custom"

export type buttonColorProps =
  | {
      color: buttonColorTypes
      customStyle: never
    }
  | {
      color: buttonCustomColorType
      customStyle: ButtonCustomStyleProps
    }

export type buttonSize = "xs" | "sm" | "md" | "lg" | "xl"

export type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  buttonColorProps & {
    size: buttonSize
    props: {}
  }
