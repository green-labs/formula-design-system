import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgEyeLineThin = (
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
        d="M3.24 25.44c5.58 8.8 12.54 13.26 20.71 13.26 10.21 0 16.92-7.14 20.76-13.17.44-.53.44-1.15.44-1.53a2.931 2.931 0 0 0-.39-1.44C40.87 16.51 34.13 9.3 24.05 9.3c-7.73 0-14.48 4.3-20.64 13.15-.36.41-.56.97-.56 1.55 0 .58.21 1.09.33 1.34.02.04.04.07.06.1Zm2.1-1.56c5.69-8.19 11.81-12.18 18.71-12.18 8.96 0 15.08 6.55 18.65 12.08.03.08.05.17.05.22v.13s0 .01-.01.02c-3.51 5.54-9.62 12.14-18.79 12.14-7.27 0-13.55-4.06-18.65-12.08-.03-.07-.06-.16-.1-.17.05-.05.1-.11.14-.16Z"
        fill={fill}
      />
      <path
        d="M24.05 32.2c4.6 0 8.2-3.6 8.2-8.2s-3.6-8.2-8.2-8.2-8.2 3.6-8.2 8.2 3.6 8.2 8.2 8.2Zm0-14c3.25 0 5.8 2.55 5.8 5.8s-2.55 5.8-5.8 5.8-5.8-2.55-5.8-5.8 2.55-5.8 5.8-5.8Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgEyeLineThin)
const Memo = memo(ForwardRef)
export default Memo
