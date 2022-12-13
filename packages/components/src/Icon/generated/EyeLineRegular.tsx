import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgEyeLineRegular = (
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
        d="M45.02 22.37C41.07 16.27 34.21 9 23.97 9 16.14 9 9.29 13.36 3.03 22.33c-.34.49-.52 1.07-.53 1.67 0 .59.16 1.17.48 1.66C8.63 34.51 15.7 39 23.97 39c8.27 0 15.47-4.62 21.05-13.37.31-.49.48-1.05.48-1.63 0-.58-.17-1.14-.48-1.63ZM23.97 36c-7.18 0-13.4-4.02-18.47-11.95C11.15 15.94 17.19 12 23.97 12c8.9 0 14.99 6.52 18.53 12.01C39.01 29.48 32.96 36 23.97 36Z"
        fill={fill}
      />
      <path
        d="M24 15.5c-4.69 0-8.5 3.81-8.5 8.5 0 4.69 3.81 8.5 8.5 8.5 4.69 0 8.5-3.81 8.5-8.5 0-4.69-3.81-8.5-8.5-8.5Zm0 14a5.51 5.51 0 0 1-5.5-5.5c0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgEyeLineRegular)
const Memo = memo(ForwardRef)
export default Memo
