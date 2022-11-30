import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCloseLineBold = (
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
        d="M12.43 37.57c-.53 0-1.04-.21-1.41-.58-.78-.79-.77-2.06 0-2.84L21.16 24 11.02 13.85c-.77-.79-.77-2.05 0-2.83a1.983 1.983 0 0 1 2.82 0l10.15 10.15 10.15-10.15c.38-.38.88-.59 1.41-.59.53 0 1.04.21 1.42.58.78.79.77 2.06 0 2.84L26.83 24l10.14 10.15c.38.37.59.87.59 1.41 0 .54-.21 1.04-.59 1.41a1.983 1.983 0 0 1-2.82 0L24 26.83 13.86 36.98c-.38.38-.89.59-1.43.59Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCloseLineBold)
const Memo = memo(ForwardRef)
export default Memo
