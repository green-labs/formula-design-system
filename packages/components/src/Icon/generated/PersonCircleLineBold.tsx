import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPersonCircleLineBold = (
  {
    size = "xl",
    sizePx,
    style,
    className,
    color,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
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
        d="M23.7 43.695c-10.6-.1-19.3-8.8-19.4-19.4-.05-5.36 2-10.4 5.76-14.2 3.7-3.74 8.64-5.8 13.88-5.8h.36c10.6.2 19.3 8.91 19.4 19.4.05 5.36-2 10.41-5.76 14.2-3.71 3.74-8.64 5.8-13.88 5.8h-.36Zm-11.5-8.5.16-.14c.88-1.21 1.91-2.17 3.04-2.83 2.38-1.58 5.36-2.43 8.6-2.43 3.04 0 6.1.86 8.61 2.43.98.71 2.19 1.67 3.06 2.85l.02.02h.12a.651.651 0 0 0 .21-.08c2.75-3.06 4.29-6.95 4.29-10.92 0-8.99-7.31-16.3-16.3-16.3-4.39 0-8.53 1.75-11.64 4.94-3.1 3.17-4.76 7.31-4.66 11.66.1 4.05 1.65 7.87 4.35 10.77l.03.04h.12l-.01-.01Z"
        fill={fill}
      />
      <path
        d="M24.1 27.195c-3.39 0-6.29-3.02-6.6-6.88-.21-1.95.4-3.8 1.66-5.06 1.24-1.24 3.01-1.96 4.84-1.96s3.57.69 4.94 1.95c1.25 1.25 1.88 3.05 1.76 5.06-.31 3.8-3.27 6.89-6.6 6.89Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPersonCircleLineBold)
const Memo = memo(ForwardRef)
export default Memo
