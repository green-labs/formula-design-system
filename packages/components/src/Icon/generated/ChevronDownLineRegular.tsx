import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgChevronDownLineRegular = (
  { size = "xl", sizePx, style, className, color, ...props }: IconProps,
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M24.004 34.046c-.46 0-.92-.18-1.27-.53l-13.5-13.5a1.78 1.78 0 0 1 0-2.54c.7-.71 1.84-.71 2.54 0l12.23 12.22 12.23-12.22c.7-.7 1.84-.7 2.54 0s.7 1.84 0 2.55l-13.5 13.5c-.35.35-.81.53-1.27.53v-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgChevronDownLineRegular)
const Memo = memo(ForwardRef)
export default Memo
