import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCheckLineRegular = (
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
        d="M17.8 37.6c-.48 0-.93-.19-1.27-.53l-9-9c-.7-.7-.7-1.84 0-2.55.7-.7 1.84-.7 2.54 0l7.64 7.64 19.74-22.55c.65-.75 1.79-.82 2.54-.17.75.65.82 1.79.17 2.54L19.15 36.99c-.33.37-.8.6-1.29.61h-.06Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCheckLineRegular)
const Memo = memo(ForwardRef)
export default Memo
