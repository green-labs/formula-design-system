import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPersonCircleLineThin = (
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
        d="M23.71 43.195c-10.33-.09-18.81-8.57-18.91-18.9a19.3 19.3 0 0 1 5.61-13.85c3.62-3.64 8.42-5.65 13.53-5.65h.35c10.33.2 18.81 8.68 18.91 18.91a19.3 19.3 0 0 1-5.61 13.85 18.9 18.9 0 0 1-13.53 5.65h-.35v-.01Zm-12.08-7.75c.05.14.19.25.37.25h.2c.21 0 .37-.14.41-.19l.1-.1c.89-1.21 1.86-2.13 2.94-2.75 2.32-1.55 5.2-2.36 8.35-2.36 2.95 0 5.91.84 8.34 2.36.98.71 2.1 1.6 2.92 2.72l.22.22h.32c.17 0 .22-.03.43-.13l.05-.03.04-.04c2.89-3.2 4.48-7.21 4.48-11.3 0-9.26-7.54-16.8-16.8-16.8-4.53 0-8.79 1.81-12 5.09-3.2 3.27-4.9 7.54-4.8 12.02.1 4.15 1.68 8.06 4.43 11.04Z"
        fill={fill}
      />
      <path
        d="M24.1 26.695c-3.13 0-5.81-2.82-6.1-6.42-.19-1.81.36-3.51 1.51-4.66 1.15-1.15 2.79-1.81 4.49-1.81 1.7 0 3.32.65 4.6 1.82 1.14 1.13 1.71 2.79 1.6 4.66-.29 3.54-3.02 6.42-6.1 6.42v-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPersonCircleLineThin)
const Memo = memo(ForwardRef)
export default Memo
