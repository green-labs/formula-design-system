import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCalendarLineRegular = (
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
        d="M38.625 6h-2.62V4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V6h-19V4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V6h-1.62c-3.24 0-5.88 2.69-5.88 6v27c0 3.31 2.64 6 5.88 6h29.23c3.25 0 5.88-2.69 5.88-6V12c0-3.31-2.64-6-5.88-6h.01ZM9.385 9h29.23c1.59 0 2.88 1.35 2.88 3v1.5H6.505V12c0-1.65 1.29-3 2.88-3Zm0 33c-1.59 0-2.88-1.35-2.88-3V16.5h35V39c0 1.65-1.29 3-2.88 3H9.385Z"
        fill={fill}
      />
      <path
        d="m31.025 20.96-8.54 8.9-3.92-3.92a1.49 1.49 0 0 0-2.12 0 1.49 1.49 0 0 0 0 2.12l5 5c.28.28.66.44 1.06.44h.02c.4 0 .79-.17 1.07-.46l9.6-10c.57-.6.55-1.55-.04-2.12a1.5 1.5 0 0 0-2.12.04h-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCalendarLineRegular)
const Memo = memo(ForwardRef)
export default Memo
