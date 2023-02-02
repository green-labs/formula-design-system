import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgImageLineThin = (
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
        d="M35.845 6.1h-23.68c-4.99 0-9.06 4.07-9.06 9.06v17.68c0 5 4.07 9.06 9.06 9.06h23.67c5 0 9.06-4.07 9.06-9.06V15.16c0-5-4.07-9.06-9.06-9.06h.01Zm-23.68 2.8h23.67a6.27 6.27 0 0 1 6.26 6.26v16.15c-1.01-.89-2.36-1.99-3.63-2.79a6.28 6.28 0 0 0-7.52.66c-.46.41-.95.87-1.47 1.35-.03-.03-.04-.06-.07-.09l-6.39-5.46c-2.98-2.54-7.36-2.62-10.42-.19l-6.69 5.31V15.16a6.27 6.27 0 0 1 6.26-6.26Zm-6.2 24.73 8.38-6.65c2.02-1.6 4.9-1.55 6.86.12l6.24 5.32c-2.9 2.72-5.93 5.64-7 6.67h-8.28c-3.18 0-5.81-2.39-6.21-5.47l.01.01Zm29.88 5.47h-11.54c2.36-2.19 6.03-5.59 8.53-7.84a3.463 3.463 0 0 1 4.15-.36c2.15 1.35 4.75 3.87 4.77 3.89 0 0 .02 0 .02.02-.83 2.49-3.18 4.3-5.94 4.3l.01-.01Z"
        fill={fill}
      />
      <path
        d="M31.505 21.8c2.41 0 4.3-1.89 4.3-4.3s-1.89-4.3-4.3-4.3-4.3 1.89-4.3 4.3 1.89 4.3 4.3 4.3Zm0-6c.99 0 1.7.71 1.7 1.7s-.71 1.7-1.7 1.7-1.7-.71-1.7-1.7.71-1.7 1.7-1.7Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgImageLineThin)
const Memo = memo(ForwardRef)
export default Memo
