import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPersonFill = (
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
        d="M24.24 23.815c4.65 0 8.4-3.62 8.72-8.43.17-2.59-.66-5.01-2.33-6.79-1.63-1.74-3.9-2.7-6.38-2.7s-4.78.95-6.4 2.68c-1.66 1.77-2.49 4.19-2.32 6.81.32 4.81 4.07 8.43 8.72 8.43h-.01ZM42.18 38.525c-1.57-9.19-10.5-13.38-18.14-13.38-7.64 0-16.55 4.18-18.22 13.34-.19.95.03 1.89.61 2.59.54.66 1.34 1.03 2.21 1.03h30.72c.86 0 1.67-.39 2.21-1.07.58-.72.8-1.69.61-2.52v.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPersonFill)
const Memo = memo(ForwardRef)
export default Memo
