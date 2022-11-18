import type { SVGProps } from "react"
import type { colorMap } from "@greenlabs/formula-design-token"
export type size = "pc" | "xl" | "lg" | "sm" | "xs"

export interface IconBaseProps {
  color?: keyof typeof colorMap
  size?: size
  sizePx?: number
}

export type IconProps = IconBaseProps & SVGProps<SVGSVGElement>
