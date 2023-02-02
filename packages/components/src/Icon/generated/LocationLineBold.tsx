import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgLocationLineBold = (
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
        d="M24.23 42.402c-.17 0-.35-.02-.53-.05a2.675 2.675 0 0 1-2.19-2.66v-13.2H8.31c-1.29 0-2.35-.82-2.64-2.05-.29-1.23.32-2.49 1.48-3.07L36.6 7.852c.96-.48 2.19-.27 3.01.54.81.81 1.02 2.02.53 3.03l-13.49 29.38c-.39.97-1.35 1.6-2.43 1.6h.01Zm-.67-3s-.02.04-.02.05l.02-.05Zm-12.01-16.31h10.96c.63 0 1.27.26 1.71.7.43.43.69 1.07.69 1.7v10.97l11.34-24.72-24.7 11.35Zm26.52-12.18-.04.02s.03-.01.04-.02Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgLocationLineBold)
const Memo = memo(ForwardRef)
export default Memo
