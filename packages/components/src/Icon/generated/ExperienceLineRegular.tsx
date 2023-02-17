import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgExperienceLineRegular = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 10.421V9.079a4.5 4.5 0 0 1 4.5-4.5h13a4.5 4.5 0 0 1 4.5 4.5v1.344h3.5a6 6 0 0 1 6 6v21a6 6 0 0 1-6 6h-29a6 6 0 0 1-6-6v-21a6 6 0 0 1 6-6H13Zm3.44-2.403a1.5 1.5 0 0 1 1.06-.44h13a1.5 1.5 0 0 1 1.5 1.5v1.344H16V9.078c0-.397.158-.779.44-1.06Zm25.06 8.404v4.5h-35v-4.5a3 3 0 0 1 3-3h29a3 3 0 0 1 3 3Zm-23 7.5h-12v13.5a3 3 0 0 0 3 3h29a3 3 0 0 0 3-3v-13.5h-12v.75a2.25 2.25 0 0 1-2.25 2.25h-6.5a2.25 2.25 0 0 1-2.25-2.25v-.75Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgExperienceLineRegular)
const Memo = memo(ForwardRef)
export default Memo
