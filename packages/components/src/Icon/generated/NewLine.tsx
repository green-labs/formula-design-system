import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgNewLine = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.799 11.959a3.4 3.4 0 0 1 3.705.737L29.5 24.692V15.1a3.4 3.4 0 1 1 6.8 0v17.8a3.4 3.4 0 0 1-5.804 2.404L18.5 23.308V32.9a3.4 3.4 0 1 1-6.8 0V15.1A3.4 3.4 0 0 1 13.8 11.96Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgNewLine)
const Memo = memo(ForwardRef)
export default Memo
