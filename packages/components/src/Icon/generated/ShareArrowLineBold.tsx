import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShareArrowLineBold = (
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
        d="M5.06 40.2a1.695 1.695 0 0 1-1.69-1.53c-.62-6.16 1.06-11.8 4.73-15.91 3.7-4.13 9.29-6.5 16.26-6.91V9.5a1.706 1.706 0 0 1 2.81-1.29l17 14.5c.39.33.61.82.6 1.32 0 .51-.25.99-.64 1.3l-17 13.5c-.51.41-1.21.48-1.8.2-.59-.28-.96-.88-.96-1.53v-5.44c-7.15-.39-13.93 2.4-17.97 7.5-.33.41-.82.64-1.33.64h-.01Zm22.7-27.02v4.32a1.7 1.7 0 0 1-1.68 1.7c-6.87.08-12.06 2.04-15.45 5.83-2.23 2.5-3.57 5.72-3.91 9.33 5.11-4.31 12.25-6.4 19.53-5.54.86.1 1.5.83 1.5 1.69v3.48l12.62-10.03-12.61-10.78Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShareArrowLineBold)
const Memo = memo(ForwardRef)
export default Memo
