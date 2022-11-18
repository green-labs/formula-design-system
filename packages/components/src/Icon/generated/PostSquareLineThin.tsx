import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPostSquareLineThin = (
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
        d="m21.85 23.7-.8 2.3c-.1.1-.1.5 0 .6 0 .1.2.1.3.1.1 0 .2 0 .3-.1l2.3-.8c.2-.1.3-.1.5-.3l16.9-16.9c.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7l-.9-.9c-.1-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-16.9 16.9c-.1.2-.2.3-.3.5Z"
        fill={fill}
      />
      <path
        d="M11.35 42h22.4c.6 0 1.1-.1 1.8-.4l.3-.1c.4-.2 1-.5 1.4-1 .4-.4.8-.9 1-1.5.3-.6.4-1.2.4-1.9V19.9c0-.7-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2v17.2c0 .4-.1.7-.2.9v.1c-.1.3-.3.6-.5.8l-.1.1c-.1.1-.3.2-.6.3l-.1.1c-.4.1-.6.2-.9.2h-22.5c-.7 0-1.3-.3-1.9-.8-.4-.4-.7-1.1-.7-1.7V14.6c0-.7.2-1.4.7-1.9.5-.4 1.2-.7 1.9-.7h15.7c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2h-15.7c-1.3 0-2.6.6-3.5 1.5-1 .9-1.5 2.2-1.5 3.5v22.5c0 1.2.5 2.5 1.5 3.5 1.1.9 2.2 1.4 3.5 1.4Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPostSquareLineThin)
const Memo = memo(ForwardRef)
export default Memo
