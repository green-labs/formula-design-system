import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgHomeFill = (
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
        d="m5.248 21.152 16.7-15.98c1.2-1.1 3-1.1 4.1 0l16.7 15.98c1.5 1.4.5 3.9-1.5 3.9v15.6c0 1.66-1.34 3-3 3h-10.44c-.91 0-1.65-.74-1.65-1.65v-8.96c0-.77-.62-1.39-1.39-1.39h-1.67c-.69 0-1.25.56-1.25 1.25v9.1c0 .91-.74 1.65-1.65 1.65H9.848c-1.66 0-3-1.34-3-3v-15.6c-2.1 0-3.1-2.5-1.6-3.9Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgHomeFill)
const Memo = memo(ForwardRef)
export default Memo
