import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowRightLineBold = (
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
        d="M25.125 39.2c-.45 0-.88-.18-1.2-.5-.32-.32-.5-.75-.5-1.2 0-.45.18-.88.5-1.2l10.6-10.6H9.375c-.94 0-1.7-.76-1.7-1.7s.76-1.7 1.7-1.7h25.15l-10.6-10.6c-.32-.32-.5-.75-.5-1.2 0-.45.18-.88.5-1.2.32-.32.75-.5 1.2-.5.45 0 .88.18 1.2.5l13.5 13.5c.32.32.5.75.5 1.2 0 .45-.18.88-.5 1.2l-13.5 13.5c-.32.32-.75.5-1.2.5Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowRightLineBold)
const Memo = memo(ForwardRef)
export default Memo
