import type { colorMap } from "@greenlabs/formula-design-token"
export type size = "PC" | "XL" | "LG" | "SM" | "XS"

export interface IconProps {
  className?: string
  fill?: keyof typeof colorMap
  size?: size
  sizePx?: number
  style?: React.CSSProperties
}
