import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowLeftLineBold = (
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
        d="M22.872 39.195c-.45 0-.88-.18-1.2-.5l-13.5-13.5c-.66-.66-.66-1.74 0-2.41l13.5-13.49c.32-.32.75-.5 1.2-.5.45 0 .88.18 1.2.5.66.66.66 1.74 0 2.41l-10.6 10.59h25.15c.94 0 1.7.76 1.7 1.7s-.76 1.7-1.7 1.7h-25.15l10.6 10.6c.66.66.66 1.74 0 2.41-.32.32-.75.5-1.2.5v-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowLeftLineBold)
const Memo = memo(ForwardRef)
export default Memo
