import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCartLineThin = (
  { size = "xl", sizePx, style, className, color, ...props }: IconProps,
  ref: Ref<SVGSVGElement>
) => {
  const finalSize = sizePx ? sizePx : convertSizeToPx(size)
  const fill = color && colorMap[color]
  return (
    <svg
      width={finalSize}
      height={finalSize}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M13.2 38.4c0 2 1.7 3.7 3.7 3.7s3.7-1.7 3.7-3.7-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7Zm5.2 0c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5ZM36.9 34.7c-2 0-3.7 1.7-3.7 3.7s1.7 3.7 3.7 3.7 3.7-1.7 3.7-3.7-1.7-3.7-3.7-3.7Zm0 5.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5ZM4.9 8.1h5l4.3 24.5c.1.6.6 1 1.2 1h24c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2h-23l-.6-3.6h22c.5 0 .8-.2 1-.3.1-.1.2-.1.3-.2.1-.1.2-.2.3-.4.2-.2.3-.4.3-.6l2.7-13.5v-.5c0-.3-.1-.5-.1-.6-.1-.2-.2-.4-.3-.5-.1-.1-.4-.4-.9-.5-.1-.1-.3-.1-.6-.1H12.6L12 6.9c-.1-.6-.6-1-1.2-1h-6c-.7 0-1.2.5-1.2 1.2s.6 1 1.3 1ZM40 12.6l-2.5 12.6H15.3l-2.2-12.6H40Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCartLineThin)
const Memo = memo(ForwardRef)
export default Memo
