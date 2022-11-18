import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgInfoLineBold = (
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
        d="M24 4.3C13.1 4.3 4.3 13.1 4.3 24c0 10.9 8.8 19.7 19.7 19.7 10.9 0 19.7-8.8 19.7-19.7 0-10.9-8.8-19.7-19.7-19.7Zm0 36C15 40.3 7.7 33 7.7 24S15 7.7 24 7.7 40.3 15 40.3 24 33 40.3 24 40.3Z"
        fill={fill}
      />
      <path
        d="M24.9 14.2c-.4-.2-.8-.2-1.2-.1-.4.1-.8.3-1.1.6-.3.3-.5.6-.6 1-.1.4 0 .8.1 1.2.2.3.4.6.8.8.3.2.7.4 1.1.4.6 0 1.2-.2 1.5-.6.4-.4.6-.9.6-1.4 0-.4-.1-.8-.3-1.1-.1-.3-.4-.6-.9-.8ZM24.5 20.4h-1c-.6 0-1 .5-1 1.1v11c0 .7.5 1.1 1 1.1h1c.6 0 1-.5 1-1.1v-11c0-.6-.5-1.1-1-1.1Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgInfoLineBold)
const Memo = memo(ForwardRef)
export default Memo
