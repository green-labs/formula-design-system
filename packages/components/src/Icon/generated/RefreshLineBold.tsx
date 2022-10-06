import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgRefreshLineBold = (
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
        d="M40.135 6.06c-.99 0-1.79.8-1.79 1.79v6.27c-.6-.66-1.31-1.39-2.15-2.24a17.354 17.354 0 0 0-9.02-4.79 17.73 17.73 0 0 0-10.22 1c-3.3 1.37-6.04 3.6-7.88 6.43-1.98 2.86-3.02 6.26-3.02 9.83 0 3.57 1.04 6.96 2.99 9.78 1.88 2.87 4.61 5.11 7.91 6.47 2.15.89 4.44 1.34 6.76 1.34 1.15 0 2.31-.11 3.47-.33 3.43-.67 6.55-2.32 9.02-4.79.7-.7.7-1.83 0-2.52-.7-.7-1.83-.7-2.52 0a13.865 13.865 0 0 1-7.18 3.81c-2.79.54-5.62.26-8.18-.8-2.63-1.09-4.81-2.86-6.31-5.17-1.56-2.25-2.38-4.94-2.38-7.78s.82-5.53 2.41-7.82c1.48-2.26 3.66-4.04 6.29-5.13 2.56-1.06 5.39-1.34 8.18-.8 2.73.53 5.21 1.84 7.18 3.81 1.29 1.29 2.13 2.21 2.68 2.85h-7.42c-.99 0-1.79.8-1.79 1.79s.8 1.79 1.79 1.79h11.2c.99 0 1.79-.8 1.79-1.79V7.85c0-.99-.8-1.79-1.79-1.79h-.02Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgRefreshLineBold)
const Memo = memo(ForwardRef)
export default Memo
