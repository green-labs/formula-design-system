import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPeopleAddFill = (
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
        d="M31.667 14.167h4.166v4.166c0 .917.75 1.667 1.667 1.667s1.667-.75 1.667-1.667v-4.166h4.166c.917 0 1.667-.75 1.667-1.667s-.75-1.667-1.667-1.667h-4.166V6.667C39.167 5.75 38.417 5 37.5 5s-1.667.75-1.667 1.667v4.166h-4.166c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667ZM7.715 42.816h25.412a2.672 2.672 0 0 0 2.12-1.028 2.913 2.913 0 0 0 .507-2.486c-.811-3.259-2.822-5.961-5.813-7.815-2.656-1.644-6.036-2.55-9.52-2.55-3.551 0-6.842.867-9.513 2.51-2.999 1.845-5.012 4.563-5.82 7.86a2.917 2.917 0 0 0 .513 2.486 2.668 2.668 0 0 0 2.114 1.023ZM20.136 26.46c-4.3 0-7.65-3.27-7.98-7.78-.17-2.38.56-4.58 2.07-6.19 1.49-1.6 3.59-2.49 5.91-2.49 2.32 0 4.44.88 5.92 2.47 1.5 1.61 2.23 3.81 2.06 6.21-.32 4.51-3.68 7.78-7.98 7.78Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPeopleAddFill)
const Memo = memo(ForwardRef)
export default Memo
