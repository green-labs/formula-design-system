import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgImageLineRegular = (
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
        d="M35.845 6h-23.68c-5.05 0-9.16 4.11-9.16 9.16v17.82c0 .07 0 .14.01.21.19 4.89 4.21 8.81 9.15 8.81h23.67c5.05 0 9.16-4.11 9.16-9.16V15.16c0-5.05-4.11-9.16-9.16-9.16h.01Zm-.01 3c3.4 0 6.16 2.76 6.16 6.16v15.93c-1-.86-2.28-1.9-3.48-2.65-2.39-1.51-5.54-1.23-7.64.67-.43.39-.9.82-1.39 1.27l-.02-.02-6.39-5.46a8.32 8.32 0 0 0-10.55-.19l-6.53 5.18V15.16c0-3.4 2.76-6.16 6.16-6.16h23.68ZM6.065 33.67l8.33-6.61a5.32 5.32 0 0 1 6.74.12l6.15 5.25c-2.85 2.68-5.81 5.52-6.89 6.57h-8.23c-3.11 0-5.69-2.32-6.1-5.33ZM35.835 39h-11.12c2.37-2.27 5.8-5.53 8.17-7.67 1.11-1 2.77-1.15 4.03-.35 2.04 1.29 4.49 3.63 4.73 3.86a6.164 6.164 0 0 1-5.82 4.16h.01Z"
        fill={fill}
      />
      <path
        d="M31.505 22c2.52 0 4.5-1.98 4.5-4.5s-1.98-4.5-4.5-4.5-4.5 1.98-4.5 4.5 1.98 4.5 4.5 4.5Zm0-6c.87 0 1.5.63 1.5 1.5s-.63 1.5-1.5 1.5-1.5-.63-1.5-1.5.63-1.5 1.5-1.5Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgImageLineRegular)
const Memo = memo(ForwardRef)
export default Memo
