import type { ReactNode, PropsWithChildren } from "react"

export type size = "small" | "medium"
export interface BadgeProps {
  className?: string
  props?: {}
  size?: size
  icon?: ReactNode
  count?: ReactNode
}
