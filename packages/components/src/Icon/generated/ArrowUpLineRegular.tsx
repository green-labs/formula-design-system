import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowUpLineRegular = (
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
        d="M25.06 8.314a1.5 1.5 0 0 0-2.12 0l-13.5 13.5a1.5 1.5 0 0 0 2.12 2.122l10.94-10.94v25.629a1.5 1.5 0 0 0 3 0V12.996l10.94 10.94a1.5 1.5 0 0 0 2.12-2.122l-13.5-13.5Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowUpLineRegular)
const Memo = memo(ForwardRef)
export default Memo
