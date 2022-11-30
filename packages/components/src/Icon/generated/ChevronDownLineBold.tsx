import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgChevronDownLineBold = (
  { size = "xl", sizePx, color = "gray-90", ...props }: IconProps,
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
      viewBox="0 0 48 48"
      ref={ref}
      {...props}
    >
      <path
        d="M24 34.8c-.5 0-1-.2-1.4-.6L9.1 20.7c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0L24 30l12.1-12.2c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8L25.4 34.2c-.4.4-.9.6-1.4.6Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgChevronDownLineBold)
const Memo = memo(ForwardRef)
export default Memo
