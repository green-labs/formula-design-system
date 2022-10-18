import type { ReactElement } from "react"
import type { IconProps } from "../Icon/types"

export type normal =
  | "primary"
  | "secondary-gray"
  | "secondary-color"
  | "tertiary-gray"
  | "tertiary-color"

export type negative = "negative-primary" | "negative-secondary"

export type buttonVariants = normal | negative

export type buttonSize = "xs" | "sm" | "md" | "lg" | "xl"

export interface ContainerButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: buttonSize
  variant: buttonVariants
  text: string
  props: {} // escape hatch for rescript
}

export interface ContainerButtonIconProps {
  leftIcon?: ReactElement<IconProps>
  rightIcon?: ReactElement<IconProps>
}

export interface ContainerButtonCountProps {
  count?: number
}

export type ContainerButtonProps = ContainerButtonBaseProps &
  ContainerButtonIconProps &
  ContainerButtonCountProps
