import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMinusLineBold = (
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
        d="M38.3 22H9.7c-1.1 0-2 .9-2 2s.9 2 2 2h28.6c1.1 0 2-.9 2-2s-.9-2-2-2Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMinusLineBold)
const Memo = memo(ForwardRef)
export default Memo
