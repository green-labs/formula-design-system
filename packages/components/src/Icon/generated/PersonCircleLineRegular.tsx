import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPersonCircleLineRegular = (
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
        d="M24.272 4.5C13.305 4.352 4.352 13.305 4.5 24.272 4.646 34.79 13.21 43.354 23.728 43.5c10.969.15 19.92-8.803 19.77-19.77-.144-10.52-8.709-19.084-19.226-19.23Zm11.852 30.68a.374.374 0 0 1-.576-.03 11.652 11.652 0 0 0-3.033-2.774C30.128 30.844 27.104 30 24 30c-3.104 0-6.129.844-8.515 2.376a11.648 11.648 0 0 0-3.033 2.773.373.373 0 0 1-.576.03A16.436 16.436 0 0 1 7.5 24.28C7.347 15.158 14.833 7.522 23.96 7.5 33.085 7.477 40.5 14.888 40.5 24a16.436 16.436 0 0 1-4.376 11.18Z"
        fill={fill}
      />
      <path
        d="M24 13.5c-1.849 0-3.52.693-4.708 1.952-1.188 1.259-1.782 3-1.647 4.868C17.916 24 20.767 27 24 27c3.232 0 6.078-3 6.355-6.679.139-1.85-.45-3.575-1.657-4.858C27.505 14.198 25.837 13.5 24 13.5Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPersonCircleLineRegular)
const Memo = memo(ForwardRef)
export default Memo
