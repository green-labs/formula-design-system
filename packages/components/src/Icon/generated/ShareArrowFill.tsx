import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShareArrowFill = (
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
        d="M4.658 38.325a1.57 1.57 0 0 1-.766-.495 1.235 1.235 0 0 1-.292-.788c0-6.197 1.44-11.153 4.281-14.732 3.433-4.324 8.848-6.652 16.12-6.94V8.555c0-.265.09-.525.259-.747.169-.221.41-.395.692-.5.283-.104.595-.135.897-.087.302.047.582.17.804.353l17.262 14.243c.153.127.275.28.359.448a1.2 1.2 0 0 1 0 1.067c-.084.168-.206.32-.36.447l-17.26 14.243a1.67 1.67 0 0 1-.805.354 1.797 1.797 0 0 1-.897-.088 1.536 1.536 0 0 1-.692-.5 1.228 1.228 0 0 1-.26-.747V30.28c-4.413.116-7.748.734-10.403 1.92-2.869 1.282-4.949 3.197-7.19 5.68a1.596 1.596 0 0 1-.792.466c-.313.08-.648.072-.957-.02Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShareArrowFill)
const Memo = memo(ForwardRef)
export default Memo
