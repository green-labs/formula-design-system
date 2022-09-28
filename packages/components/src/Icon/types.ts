export type size = "PC" | "XL" | "LG" | "SM" | "XS"

export interface IconProps {
  className?: string
  fill?: string
  size?: size
  sizePx?: number
  style?: React.CSSProperties
}
