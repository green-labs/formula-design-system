import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgTouchLineThin = (
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
        d="M11.79 33.4s2.9 3.1 3.8 4.1c3.5 3.9 6.5 6.7 12.7 6.7 3.8 0 6.5-.9 8.4-2.8 2.4-2.4 2.6-5.9 2.5-8.3v-4.4c0-3.5-2.8-6.2-6.5-6.2h-5.3v-6.8c0-2.5-2-4.5-4.4-4.5-2.4 0-4.3 2-4.3 4.5v12c-.5-.5-1-.9-1.4-1.2-1.9-1.4-4.7-1.3-6.5-.4-1.3.7-2 1.7-2 2.9s.8 2.1 2.5 3.8l.5.6Zm.1-5.2c.5-.3 1.2-.4 1.9-.4s1.5.2 2 .6c.5.4 1.6 1.4 2.5 2.4.5.5 1.2.6 1.8.4.6-.2 1-.8 1-1.5V15.8c0-1.2.8-2.1 1.9-2.1 1.1 0 2 .9 2 2.1V23c0 1.1.9 2 2 2h5.7c2.4 0 4.1 1.6 4.1 3.8v4.4c.1 3.2-.5 5.3-1.8 6.6-1.3 1.4-3.6 2.1-6.7 2.1-5.2 0-7.6-2.2-10.9-5.9-.9-1-3.8-4.1-3.8-4.1l-.6-.6c-.6-.7-1.8-1.9-1.8-2.2 0-.2 0-.5.7-.9Z"
        fill={fill}
      />
      <path
        d="M12.89 16.2c.7 0 1.2-.6 1.2-1.2 0-4.8 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8c0 .7.6 1.2 1.2 1.2s1.2-.6 1.2-1.2c0-6.2-5-11.2-11.2-11.2-6.2 0-11.2 5-11.2 11.2-.1.7.5 1.2 1.2 1.2Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgTouchLineThin)
const Memo = memo(ForwardRef)
export default Memo
