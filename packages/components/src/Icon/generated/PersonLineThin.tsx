import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPersonLineThin = (
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
        d="M24.238 23.515c-4.49 0-8.11-3.5-8.42-8.15-.16-2.54.63-4.88 2.24-6.59 1.57-1.67 3.76-2.59 6.18-2.59s4.59.93 6.17 2.61c1.62 1.73 2.42 4.06 2.25 6.57-.31 4.65-3.93 8.15-8.42 8.15Zm0-14.93c-1.75 0-3.32.65-4.43 1.83-1.15 1.22-1.71 2.92-1.59 4.79.26 3.88 3.23 5.91 6.03 5.91 2.8 0 5.77-2.07 6.03-5.91.12-1.84-.45-3.53-1.61-4.77-1.12-1.19-2.68-1.85-4.41-1.85h-.02ZM39.358 41.815H8.638c-.79 0-1.49-.33-1.98-.92-.52-.63-.72-1.49-.54-2.34 1.65-8.99 10.45-13.1 17.93-13.1s16.3 4.11 17.84 13.13c.17.76-.03 1.63-.55 2.28-.49.61-1.21.95-1.98.95Zm-15.31-13.96c-6.52 0-14.18 3.49-15.58 11.15-.04.19 0 .32.04.37.01.02.04.04.12.04h30.72s.07 0 .11-.06c.06-.08.09-.21.07-.31-1.32-7.71-8.95-11.19-15.49-11.19h.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPersonLineThin)
const Memo = memo(ForwardRef)
export default Memo
