import type { ReactNode } from "react"
import type { IconProps } from "../Icon"

export type size = "small" | "medium"
export interface BadgeProps {
  className?: string
  props?: {}
  size?: size
  icon?: React.ComponentType<IconProps>
  count?: ReactNode
  color?: string
  backgroundColor?: string
}
