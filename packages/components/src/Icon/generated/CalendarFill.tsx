import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCalendarFill = (
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
        d="M36.46 6.15V4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V6H15.2V4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.55a8.59 8.59 0 0 0-7.7 8.54v.5h39v-.5c0-4.21-3.04-7.71-7.04-8.44ZM4.5 36.41c0 4.74 3.85 8.59 8.59 8.59h21.82c4.74 0 8.59-3.85 8.59-8.59V17.77h-39v18.64Zm11.64-10.29a1.49 1.49 0 0 1 2.12 0l3.92 3.92 8.54-8.9c.57-.6 1.52-.62 2.12-.04.6.57.62 1.52.04 2.12l-9.6 10c-.28.29-.66.46-1.07.46h-.02c-.4 0-.78-.16-1.06-.44l-5-5a1.49 1.49 0 0 1 0-2.12h.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCalendarFill)
const Memo = memo(ForwardRef)
export default Memo
