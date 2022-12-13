import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgInfoLineThin = (
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
        d="M24 43.2c10.6 0 19.2-8.6 19.2-19.2S34.6 4.8 24 4.8 4.8 13.4 4.8 24 13.4 43.2 24 43.2Zm0-36c9.3 0 16.8 7.5 16.8 16.8S33.3 40.8 24 40.8 7.2 33.3 7.2 24 14.7 7.2 24 7.2Z"
        fill={fill}
      />
      <path
        d="M22.3 17.1c.1.1.3.4.6.6.3.1.6.3 1 .3.5 0 1-.2 1.3-.5.4-.4.6-.9.6-1.4 0-.4-.2-.8-.3-1-.2-.4-.5-.6-.8-.8-.3-.1-.8-.4-1.5-.1-.2.1-.4.2-.6.4-.4.3-.7.8-.7 1.3 0 .3 0 .6.2 1l.2.2ZM24.5 20.5h-1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-11c0-.6-.4-1-1-1Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgInfoLineThin)
const Memo = memo(ForwardRef)
export default Memo
