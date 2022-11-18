import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCommentFill = (
  { size = "xl", sizePx, style, className, color, ...props }: IconProps,
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M42.385 9.78a6.53 6.53 0 0 0-4.26-1.89c-.1-.02-.21-.03-.31-.03h-27.64c-1.71 0-3.33.67-4.55 1.89a6.486 6.486 0 0 0-1.89 4.55v16.46c0 1.72.67 3.33 1.89 4.55a6.436 6.436 0 0 0 4.55 1.89h1.19v4.61c0 .58.32 1.11.83 1.39a1.586 1.586 0 0 0 1.62-.09l8.74-5.89h15.27c1.71 0 3.33-.67 4.55-1.89 1.2-1.2 1.89-2.86 1.89-4.55V14.33c0-1.72-.67-3.33-1.89-4.55h.01Zm-26.38 14.47c-1.25 0-2.26-1.01-2.26-2.26 0-1.25 1.01-2.26 2.26-2.26 1.25 0 2.26 1.01 2.26 2.26 0 1.25-1.01 2.26-2.26 2.26Zm7.99 0c-1.25 0-2.26-1.01-2.26-2.26 0-1.25 1.01-2.26 2.26-2.26 1.25 0 2.26 1.01 2.26 2.26 0 1.25-1.01 2.26-2.26 2.26Zm7.96 0c-1.25 0-2.26-1.01-2.26-2.26 0-1.25 1.01-2.26 2.26-2.26 1.25 0 2.26 1.01 2.26 2.26 0 1.25-1.01 2.26-2.26 2.26Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCommentFill)
const Memo = memo(ForwardRef)
export default Memo
