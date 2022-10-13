import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgLocationFill1 = (
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
        d="M23.995 2.955c-8.21 0-14.89 6.41-14.89 14.29 0 4.26 2.05 6.92 4.43 10 2.61 3.38 5.85 7.58 7.81 15.75.03.11.07.22.12.32.25.5.57 1.07 1.17 1.37.27.13.71.36 1.36.36.6 0 1.2-.27 1.37-.36.57-.29 1.17-1.01 1.3-1.76 1.97-8.12 5.2-12.31 7.8-15.67 2.38-3.08 4.43-5.74 4.43-10-.01-7.89-6.69-14.3-14.9-14.3Zm0 19.89c-2.7 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.3 5-5 5Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgLocationFill1)
const Memo = memo(ForwardRef)
export default Memo
