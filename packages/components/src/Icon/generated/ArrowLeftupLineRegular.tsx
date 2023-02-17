import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowLeftupLineRegular = (
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
        d="M32.75 12.159a1.5 1.5 0 0 1 0 3H17.28L35.402 33.28a1.5 1.5 0 1 1-2.121 2.121L15.159 17.28v15.47a1.5 1.5 0 0 1-3 0V13.66a1.5 1.5 0 0 1 1.5-1.5H32.75Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowLeftupLineRegular)
const Memo = memo(ForwardRef)
export default Memo
