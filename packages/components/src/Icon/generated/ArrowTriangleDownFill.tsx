import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowTriangleDownFill = (
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
        d="M37.11 15.2h-26.2c-.9 0-1.69.48-2.06 1.26-.38.78-.26 1.69.29 2.38l13.13 15.34.09.09c.12.12.35.34.68.49.42.24.82.24.98.24.23 0 .42-.05.57-.1h.35l.32-.32c.11-.06.26-.16.42-.32l13.14-15.35c.55-.6.7-1.48.37-2.27-.36-.87-1.18-1.43-2.09-1.43l.01-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowTriangleDownFill)
const Memo = memo(ForwardRef)
export default Memo
