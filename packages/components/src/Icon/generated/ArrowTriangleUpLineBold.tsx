import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowTriangleUpLineBold = (
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
        d="M37.088 33.2h-26.2c-.99 0-1.88-.61-2.27-1.56-.36-.86-.2-1.83.41-2.48l13.16-15.37c.16-.16.31-.26.43-.33l.36-.36h.4c.16-.05.37-.1.6-.1.4 0 .76.09 1.07.26.37.17.62.42.74.54l.09.09 13.14 15.34c.6.75.72 1.74.32 2.59-.41.85-1.27 1.37-2.24 1.37l-.01.01Zm-24.13-3.4h22.06l-11.03-12.89-11.03 12.89Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowTriangleUpLineBold)
const Memo = memo(ForwardRef)
export default Memo
