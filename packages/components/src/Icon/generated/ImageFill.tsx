import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgImageFill = (
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
        d="M35.845 6h-23.68c-5.05 0-9.16 4.11-9.16 9.16v17.68c0 5.05 4.11 9.16 9.16 9.16h23.67c5.05 0 9.16-4.11 9.16-9.16V15.16c0-5.05-4.11-9.16-9.16-9.16h.01Zm-4.34 7c2.52 0 4.5 1.98 4.5 4.5s-1.98 4.5-4.5 4.5-4.5-1.98-4.5-4.5 1.98-4.5 4.5-4.5Zm-12.79 26h-6.55c-3.4 0-6.16-2.76-6.16-6.16v-1.11l8.39-6.66a5.32 5.32 0 0 1 6.74.12l6.16 5.25a717.61 717.61 0 0 0-8.19 7.85c-.21.2-.32.45-.38.71h-.01Zm17.13 0h-13.17c2.45-2.36 7.35-7.08 10.23-9.67 1.11-1 2.77-1.15 4.03-.35 2.14 1.35 4.73 3.86 4.76 3.88.09.09.2.14.3.2-.12 3.3-2.83 5.94-6.15 5.94Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgImageFill)
const Memo = memo(ForwardRef)
export default Memo
