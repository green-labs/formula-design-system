import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPlusLineThin = (
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
        d="M24 39.8c.83 0 1.5-.67 1.5-1.5V25.5h12.8c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H25.5V9.7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v12.8H9.7c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h12.8v12.8c0 .83.67 1.5 1.5 1.5Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPlusLineThin)
const Memo = memo(ForwardRef)
export default Memo
