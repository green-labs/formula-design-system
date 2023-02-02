import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPlusLineBold = (
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
        d="M38.3 22H26V9.7c0-1.1-.9-2-2-2s-2 .9-2 2V22H9.7c-1.1 0-2 .9-2 2s.9 2 2 2H22v12.3c0 1.1.9 2 2 2s2-.9 2-2V26h12.3c1.1 0 2-.9 2-2s-.9-2-2-2Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPlusLineBold)
const Memo = memo(ForwardRef)
export default Memo
