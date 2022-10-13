import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgRefreshLineRegular = (
  {
    size = "XL",
    sizePx,
    style,
    className,
    fill,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const finalSize = sizePx ? sizePx : convertSizeToPx(size)
  return (
    <svg
      width={finalSize}
      height={finalSize}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M40.145 6.265c-.88 0-1.58.71-1.58 1.58v6.79c-.66-.74-1.48-1.6-2.49-2.61a17.148 17.148 0 0 0-8.92-4.73c-3.44-.67-6.93-.32-10.11.99-3.26 1.35-5.97 3.56-7.8 6.36-1.95 2.82-2.98 6.18-2.98 9.7 0 3.52 1.03 6.88 2.96 9.67 1.85 2.83 4.56 5.05 7.82 6.4 2.12.88 4.39 1.32 6.68 1.32 1.14 0 2.29-.11 3.43-.33 3.39-.66 6.48-2.29 8.92-4.74.62-.62.62-1.62 0-2.24-.62-.62-1.62-.62-2.24 0a14.07 14.07 0 0 1-7.28 3.87c-2.83.54-5.69.27-8.29-.81-2.67-1.11-4.88-2.91-6.4-5.24-1.58-2.29-2.42-5.02-2.42-7.9 0-2.88.84-5.61 2.44-7.93 1.5-2.3 3.71-4.1 6.38-5.2 2.6-1.08 5.47-1.35 8.29-.81 2.77.54 5.29 1.87 7.28 3.86 1.53 1.53 2.43 2.54 2.96 3.19h-7.84c-.88 0-1.58.71-1.58 1.58 0 .87.71 1.58 1.58 1.58h11.2c.88 0 1.58-.71 1.58-1.58V7.845c0-.88-.71-1.58-1.58-1.58h-.01Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgRefreshLineRegular)
const Memo = memo(ForwardRef)
export default Memo
