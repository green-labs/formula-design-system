import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPeopleFill = (
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
        d="M3.584 40.408h25.411a2.672 2.672 0 0 0 2.12-1.028 2.913 2.913 0 0 0 .507-2.486c-.811-3.259-2.822-5.961-5.813-7.815-2.656-1.644-6.036-2.55-9.52-2.55-3.551 0-6.842.867-9.513 2.51-2.999 1.844-5.012 4.562-5.82 7.86a2.917 2.917 0 0 0 .513 2.485 2.668 2.668 0 0 0 2.115 1.024ZM28.177 26.862c1.696-.83 3.896-1.244 6.328-1.244 2.84 0 5.597.74 7.765 2.084 2.46 1.526 4.113 3.748 4.781 6.43a2.64 2.64 0 0 1-.462 2.252 2.441 2.441 0 0 1-1.936.94H33.955a.77.77 0 0 1-.759-.633 2.35 2.35 0 0 0-.04-.181c-.817-3.283-2.732-6.057-5.562-8.08a.772.772 0 0 1 .06-1.29c.152-.088.326-.182.523-.278ZM16.004 24.052c-4.3 0-7.65-3.27-7.98-7.78-.17-2.38.56-4.58 2.07-6.19 1.49-1.6 3.59-2.49 5.91-2.49 2.32 0 4.44.88 5.92 2.47 1.5 1.61 2.23 3.81 2.06 6.21-.32 4.51-3.68 7.78-7.98 7.78ZM34.574 23.492c-3.55 0-6.43-2.83-6.7-6.58-.14-1.99.48-3.83 1.75-5.2 1.26-1.35 3.02-2.1 4.95-2.1 1.93 0 3.71.74 4.96 2.08 1.26 1.36 1.88 3.21 1.74 5.21-.26 3.75-3.15 6.58-6.7 6.58v.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPeopleFill)
const Memo = memo(ForwardRef)
export default Memo
