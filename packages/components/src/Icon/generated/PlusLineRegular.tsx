import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPlusLineRegular = (
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
        d="M9.7 25.8h12.5v12.5c0 .99.81 1.8 1.8 1.8s1.8-.81 1.8-1.8V25.8h12.5c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8H25.8V9.7c0-.99-.81-1.8-1.8-1.8s-1.8.81-1.8 1.8v12.5H9.7c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPlusLineRegular)
const Memo = memo(ForwardRef)
export default Memo
