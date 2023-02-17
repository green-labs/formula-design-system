import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowLeftupLineThin = (
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
        d="M12.811 33.6a1.187 1.187 0 0 1-.354-.849V13.66c0-.665.538-1.202 1.202-1.202h19.092c.326 0 .623.127.849.354a1.201 1.201 0 0 1-.849 2.05H16.56L35.19 33.493c.467.467.467 1.23 0 1.698a1.204 1.204 0 0 1-1.697 0L14.862 16.558v16.193a1.201 1.201 0 0 1-2.051.849Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowLeftupLineThin)
const Memo = memo(ForwardRef)
export default Memo
