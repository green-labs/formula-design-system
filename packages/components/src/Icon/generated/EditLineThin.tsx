import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgEditLineThin = (
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
        d="M7.5 41.924h33c.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2h-33c-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2ZM12.06 35.884c.09 0 .19 0 .28-.02l6.63-.69c.35-.02.85-.15 1.33-.63l18.81-18.71c.41-.41.64-.95.64-1.51s-.23-1.1-.64-1.51l-6.1-6.1c-.85-.85-2.18-.85-3.03 0l-18.69 18.8c-.49.49-.62.98-.63 1.34l-.7 6.66v.12c0 .68.3 1.34.81 1.77.38.32.83.49 1.29.49v-.01Zm25.31-21.56-2.8 2.78-5.86-5.86 2.78-2.8 5.88 5.88Zm-24.43 12.79 14.09-14.17 5.85 5.85-14.17 14.09-6.45.67.67-6.45.01.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgEditLineThin)
const Memo = memo(ForwardRef)
export default Memo
