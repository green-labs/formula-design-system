import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgDownloadLineBold = (
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
        d="M40 30.8c-.9 0-1.7.8-1.7 1.7v4c0 .6-.2 1.1-.7 1.6l-.1.1c-.4.5-1.1.6-1.5.6H12c-.6 0-1.1-.2-1.6-.7l-.1-.1c-.5-.4-.6-1.1-.6-1.5v-4c0-.9-.8-1.7-1.7-1.7-.9 0-1.7.8-1.7 1.7v4c0 1.6.6 3 1.7 4 1.1 1.1 2.5 1.7 4 1.7h24c1.6 0 3-.6 4-1.7 1.1-1.1 1.7-2.5 1.7-4v-4c0-.9-.8-1.7-1.7-1.7Z"
        fill={fill}
      />
      <path
        d="M22.8 32.7c.1.1.2.2.3.2 0 0 .1 0 .1.1.1 0 .1.1.2.1s.1 0 .2.1h.8c.067 0 .133-.033.2-.1.1 0 .1-.1.2-.1 0 0 .1 0 .1-.1.1-.1.2-.1.3-.2l10-10c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 7.1V7.5c0-.9-.8-1.7-1.7-1.7-.9 0-1.7.8-1.7 1.7v19.9l-7.1-7.1c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 10Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgDownloadLineBold)
const Memo = memo(ForwardRef)
export default Memo
