import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgChevronDownLineThin = (
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
        d="M24.1 34.275c-.4 0-.8-.2-1.1-.4l-13.5-13.5c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l12.4 12.4 12.4-12.5c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1L25 33.875c-.1.2-.5.4-.9.4Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgChevronDownLineThin)
const Memo = memo(ForwardRef)
export default Memo
