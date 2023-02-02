import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowTriangleDownLineBold = (
  { size = "xl", sizePx, color, ...props }: IconProps,
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
        d="M24.01 35c-.4 0-.76-.09-1.07-.27-.36-.16-.6-.4-.72-.52l-.1-.11L8.98 18.76c-.6-.75-.72-1.74-.31-2.59.4-.84 1.26-1.37 2.24-1.37h26.2c.99 0 1.88.61 2.27 1.56.36.86.2 1.83-.41 2.48L25.81 34.2c-.16.16-.31.26-.43.33l-.36.37h-.4c-.16.05-.37.1-.6.1h-.01ZM12.98 18.2l11.03 12.89L35.04 18.2H12.98Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowTriangleDownLineBold)
const Memo = memo(ForwardRef)
export default Memo
