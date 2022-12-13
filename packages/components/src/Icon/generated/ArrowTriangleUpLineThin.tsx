import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowTriangleUpLineThin = (
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
        d="M37.085 32.2h-26.2c-.79 0-1.5-.49-1.81-1.25-.3-.72-.16-1.48.36-2l13.04-15.23c.19-.2.35-.3.45-.35l.27-.27h.28a1.595 1.595 0 0 1 1.35.11c.3.12.5.33.62.45l13.19 15.4c.48.6.58 1.39.26 2.06-.32.67-1.01 1.09-1.79 1.09l-.02-.01Zm-25.85-1.67-.04.05s.03-.03.04-.05Zm.63-.73h24.24l-12.12-14.16-12.12 14.16Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowTriangleUpLineThin)
const Memo = memo(ForwardRef)
export default Memo
