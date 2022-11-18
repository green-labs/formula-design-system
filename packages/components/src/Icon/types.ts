import type { SVGProps } from "react"
import type { colorMap } from "@greenlabs/formula-design-token"
export type size = "pc" | "xl" | "lg" | "sm" | "xs"

export interface IconBaseProps {
  className?: string
  color?: keyof typeof colorMap
  size?: size
  sizePx?: number
  style?: React.CSSProperties
}

export type IconProps = IconBaseProps & SVGProps<SVGSVGElement>
