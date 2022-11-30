import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowTriangleUpFill = (
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
        d="m38.859 29.17-13.13-15.34-.07-.08c-.12-.12-.35-.36-.7-.51-.42-.24-.81-.24-.97-.24-.23 0-.42.05-.57.1h-.35l-.33.32c-.11.06-.27.17-.42.32L9.179 29.1c-.55.6-.7 1.48-.37 2.27.36.87 1.18 1.43 2.09 1.43h26.19c.9 0 1.69-.48 2.06-1.26.37-.78.26-1.69-.29-2.38v.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowTriangleUpFill)
const Memo = memo(ForwardRef)
export default Memo
