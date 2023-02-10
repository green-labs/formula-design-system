import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgReUpLineBold = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.292 7.203a1.8 1.8 0 0 0-2.546 0l-7.653 7.653a1.8 1.8 0 0 0 2.546 2.546l4.59-4.59v13.37c0 6.722-5.572 12.543-12.356 12.543-6.689 0-11.372-5.278-11.372-12.1v-5.164a1.8 1.8 0 0 0-3.6 0v5.164c0 8.523 6.02 15.7 14.972 15.7 8.857 0 15.955-7.519 15.955-16.143V12.831L41.4 17.4a1.8 1.8 0 1 0 2.545-2.545l-7.653-7.653ZM8.05 11.692a2.15 2.15 0 1 0-.002-4.298 2.15 2.15 0 0 0 .002 4.298ZM8.05 17.397c1.192 0 2.15-.958 2.15-2.15 0-1.191-.958-2.15-2.15-2.15s-2.15.959-2.15 2.15c0 1.192.958 2.15 2.15 2.15Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgReUpLineBold)
const Memo = memo(ForwardRef)
export default Memo
