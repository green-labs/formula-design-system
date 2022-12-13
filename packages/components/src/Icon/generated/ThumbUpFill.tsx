import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgThumbUpFill = (
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
        d="M7.344 20.522c-2.11.42-2.75 1.37-2.75 2.54v15.43c0 1.37 1.27 2.54 2.75 2.54h2.54c.53 0 .95-.32.95-.85v-18.92c0-.53-.42-.95-1.06-.95-.53-.11-1.27 0-2.43.21ZM41.794 34.992c-1.69 4.12-4.44 5.92-8.98 6.97-5.92 1.37-13.53.11-17.44-1.27-.95-.32-1.48-1.27-1.48-2.22v-15.85c0-1.69 1.06-3.17 2.54-3.7 10.04-3.8 10.25-7.71 10.57-11.52.11-2.32 1.16-3.28 2.01-3.7.63-.32 1.37-.32 2.11-.11 5.18 1.37 4.02 8.77 2.75 11.84-.85 2.11.63 2.22 1.48 2.32 4.54.42 6.55 1.59 7.71 6.24.85 3.17 0 8.14-1.27 10.99v.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgThumbUpFill)
const Memo = memo(ForwardRef)
export default Memo
