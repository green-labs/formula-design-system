import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgEditLineBold = (
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
        d="M40.5 39.027h-33c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h33c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7ZM29.63 6.367l-18.7 18.8c-.59.6-.76 1.21-.78 1.65l-.69 6.64v.17c0 .82.36 1.63.99 2.16.46.39 1.04.61 1.63.61.11 0 .22 0 .33-.02l6.61-.69c.44-.02 1.06-.19 1.65-.78l18.8-18.71c.51-.51.78-1.17.78-1.87 0-.7-.28-1.36-.78-1.87l-6.1-6.1a2.623 2.623 0 0 0-3.74 0v.01Zm-11.15 26.05-5.66.59.59-5.66 13.61-13.69 5.14 5.14-13.69 13.61.01.01Zm16.1-16.02-5.15-5.15 2.08-2.09 5.16 5.16-2.09 2.08Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgEditLineBold)
const Memo = memo(ForwardRef)
export default Memo
