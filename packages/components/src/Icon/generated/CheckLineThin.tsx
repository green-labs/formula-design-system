import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCheckLineThin = (
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
        d="M18.073 37.452c-.4 0-.8-.2-1.1-.4l-9-9c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l7.9 7.9 19.9-22.8c.5-.6 1.5-.7 2.1-.1.6.5.7 1.5.1 2.1l-21 24c-.1.2-.5.4-1 .4Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCheckLineThin)
const Memo = memo(ForwardRef)
export default Memo
