import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgArrowTriangleUpFill = (
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
        d="M39.557 29.182 26.452 13.89a2.25 2.25 0 0 0-3.416 0L9.932 29.181c-1.251 1.46-.214 3.714 1.708 3.714h26.212c1.922 0 2.959-2.254 1.705-3.714Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgArrowTriangleUpFill)
const Memo = memo(ForwardRef)
export default Memo
