import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCheckLineBold = (
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
        d="M18.016 37.984c-.5 0-1-.2-1.4-.6l-9-9c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l7.5 7.5 19.6-22.4c.7-.8 2-.9 2.8-.2.8.7.9 2 .2 2.8l-21 24c-.4.4-.9.7-1.5.7Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCheckLineBold)
const Memo = memo(ForwardRef)
export default Memo
