import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMeatLine = (
  { size = "xl", sizePx, color = "gray-90", ...props }: IconProps,
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
        d="M9.419 38.953c2.544 2.545 5.83 4.538 9.015 5.46 3.556 1.031 6.531.61 8.414-1.162.02-.01.04-.02.05-.04 5.87-5.009 9.236-11.15 9.476-17.3.09-2.283-.28-4.427-1.042-6.35l1.753-1.783c.401-.43.992-.601 1.523-.44a4.61 4.61 0 0 0 4.728-1.223 4.805 4.805 0 0 0 1.242-2.153c.691-2.555-.761-5.22-3.236-5.94a2.075 2.075 0 0 1-1.392-1.453 4.86 4.86 0 0 0-1.242-2.153 4.63 4.63 0 0 0-3.305-1.383h-.07a4.644 4.644 0 0 0-3.316 1.463 4.888 4.888 0 0 0-1.202 4.758c.16.61-.01 1.262-.461 1.703l-1.653 1.652a14.225 14.225 0 0 0-5.73-1.182c-.22 0-.45 0-.67.01-6.06.25-12.23 3.737-17.36 9.817-.02.02-.03.04-.04.06-3.736 4.007-.66 12.44 4.518 17.62v.02Zm12.611 3.005c-.821 0-1.753-.14-2.765-.44-2.714-.782-5.529-2.495-7.723-4.688-4.437-4.438-6.65-11.259-4.387-13.523 2.264-2.264 9.085-.05 13.523 4.388 2.194 2.193 3.906 5.018 4.688 7.722.72 2.505.54 4.548-.511 5.59-.631.63-1.603.941-2.835.941l.01.01ZM32.478 13.11c1.202-1.182 1.682-2.945 1.242-4.638a1.926 1.926 0 0 1 .47-1.883c.321-.34.742-.53 1.182-.53h.02c.441 0 .852.18 1.172.5.22.22.381.511.471.832.481 1.702 1.763 3.025 3.436 3.525.922.27 1.462 1.293 1.192 2.274-.08.31-.25.591-.49.842-.442.46-1.083.63-1.694.44a4.495 4.495 0 0 0-4.567 1.232l-1.082 1.102c-.41-.58-.852-1.132-1.352-1.632-.351-.351-.722-.671-1.112-.972l1.102-1.102.01.01ZM22.43 14.462c3.165-.13 5.96.882 7.923 2.845 2.074 2.074 3.145 5.089 3.015 8.494-.15 3.837-1.763 7.713-4.628 11.25-.08-.782-.24-1.603-.49-2.465-.922-3.185-2.905-6.47-5.46-9.015-3.275-3.276-7.863-5.71-11.81-6.11 3.657-3.065 7.653-4.838 11.44-4.999h.01Z"
        fill={fill}
      />
      <path
        d="M15.209 29.307a2.05 2.05 0 0 0-1.463.581c-.57.571-.74 1.422-.44 2.314.19.57.54 1.132 1.031 1.623.491.49 1.052.851 1.623 1.041.892.3 1.743.13 2.314-.44.972-.972.721-2.625-.591-3.937-.751-.751-1.653-1.182-2.474-1.182Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMeatLine)
const Memo = memo(ForwardRef)
export default Memo