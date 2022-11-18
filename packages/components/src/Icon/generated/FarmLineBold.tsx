import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgFarmLineBold = (
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
        d="M36.95 40.35c-.8 0-1.5-.7-1.5-1.5v-14.9c0-6.2-3.5-12.3-8.9-15.4l-.4-.2.4-.1c1.4-.4 2.9-.7 4.4-.7 1.4 0 2.7.2 4.1.6 7.3 2 12.3 8.9 12.3 16.8v11.1c0 2.4-2 4.4-4.4 4.4h-6v-.1Zm6-3.4c.5 0 1-.5 1-1v-11.1c0-6.2-3.8-11.6-9.3-13.4 2.7 3.7 4.1 8.1 4.1 12.5v13h4.2Zm-20 3.4c-.8 0-1.5-.7-1.5-1.5v-5.7c0-2.4-2-4.4-4.4-4.4h-.5c-2.1.3-3.9 2.5-3.9 4.7v5.4c0 .8-.7 1.5-1.5 1.5h-6.1c-2.4 0-4.4-2-4.4-4.4v-11.3c0-9.1 7.1-16.8 15.9-17.1h.5c9 0 16.4 7.4 16.5 16.4v14.9c0 .8-.7 1.5-1.5 1.5h-9.1Zm7.2-3.4v-13c-.1-7.2-5.9-13-13.1-13h-.4c-7 .2-12.6 6.4-12.6 13.7v11.3c0 .5.5 1 1 1h4.2v-3.5c0-3.9 3.1-7.6 6.9-8.1.4 0 .7-.1.9-.1 4.3 0 7.8 3.5 7.8 7.8v3.8h5.3v.1Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgFarmLineBold)
const Memo = memo(ForwardRef)
export default Memo
