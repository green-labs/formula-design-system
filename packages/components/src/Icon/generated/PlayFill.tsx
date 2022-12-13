import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPlayFill = (
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
        d="m38.438 21.195-23.12-13.85c-1.01-.7-2.26-.78-3.34-.22-1.18.62-1.91 1.87-1.91 3.25v27.2c0 1.36.71 2.6 1.86 3.24.51.29 1.07.43 1.62.43.59 0 1.17-.16 1.69-.48l23.24-13.92c.98-.62 1.56-1.76 1.52-2.97-.04-1.17-.64-2.18-1.55-2.68h-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPlayFill)
const Memo = memo(ForwardRef)
export default Memo
