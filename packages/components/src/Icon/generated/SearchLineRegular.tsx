import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgSearchLineRegular = (
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
        d="m42.265 40.65-9-9.1c.5-.6 1-1.1 1.4-1.8 1.8-2.7 2.7-5.8 2.7-9 0-4.3-1.7-8.4-4.7-11.4s-7.1-4.7-11.4-4.7c-3.2 0-6.3.9-9 2.7-2.7 1.8-4.7 4.3-5.9 7.2-1.2 3-1.5 6.2-.9 9.3.6 3.1 2.2 6 4.4 8.3 2.3 2.3 5.1 3.8 8.3 4.4 1 .2 2.1.3 3.2.3 2.1 0 4.2-.4 6.2-1.2 1.2-.5 2.4-1.2 3.5-2l9.1 9.2c.3.3.7.5 1.2.5.4 0 .8-.2 1.2-.5.4-.5.4-1.6-.3-2.2Zm-16.1-7.9c-2.4 1-4.9 1.2-7.4.7s-4.8-1.7-6.6-3.5c-1.8-1.8-3-4.1-3.5-6.6s-.2-5.1.7-7.4c1-2.4 2.6-4.4 4.7-5.8 2.1-1.4 4.6-2.2 7.1-2.2 3.4 0 6.7 1.3 9.1 3.8 2.4 2.4 3.8 5.7 3.8 9.1 0 2.6-.8 5-2.2 7.1-1.3 2.2-3.3 3.8-5.7 4.8Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgSearchLineRegular)
const Memo = memo(ForwardRef)
export default Memo
