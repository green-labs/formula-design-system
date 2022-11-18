import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCopyContentsLineBold = (
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
        d="M36.15 9.8h-1.41s.01-.07.01-.1c0-1.9-.7-3.6-1.9-4.8-1.3-1.3-2.9-2-4.5-2h-16.1c-2 0-3.9.9-5 2.3-1.3 1.4-2 3.3-2 5.3v19.9c0 1.8.7 3.6 1.8 4.7 1.3 1.4 2.8 2.1 4.6 2.1h.7v.8c0 3.9 3 7.1 6.6 7.1h17.2c3.6 0 6.6-3.2 6.6-7.1V16.9c0-3.9-3-7.1-6.6-7.1Zm-24.5 24c-.8 0-1.5-.3-2.1-1-.6-.6-.9-1.4-.9-2.4V10.5c0-1.1.4-2.2 1.2-3.1.6-.7 1.5-1.1 2.4-1.1h16.1c.7 0 1.4.3 2.1 1 .6.6.9 1.4.9 2.4 0 .03 0 .07.01.1H18.95c-3.6 0-6.6 3.2-6.6 7.1v16.9h-.7Zm27.7 4.2c0 2-1.4 3.7-3.2 3.7h-17.2c-1.8 0-3.2-1.7-3.2-3.7V16.9c0-2 1.4-3.7 3.2-3.7h17.2c1.8 0 3.2 1.7 3.2 3.7V38Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCopyContentsLineBold)
const Memo = memo(ForwardRef)
export default Memo
