import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgCartFill = (
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
        d="M16.5 42a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM36.5 42a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM41.825 11.323a2.243 2.243 0 0 0-1.74-.823H12.552l-.575-3.26A1.5 1.5 0 0 0 10.5 6h-6a1.5 1.5 0 0 0 0 3h4.742l4.28 24.26A1.5 1.5 0 0 0 15 34.5h24a1.5 1.5 0 1 0 0-3H16.258l-.529-3h21.656a2.257 2.257 0 0 0 2.209-1.808l2.7-13.5a2.25 2.25 0 0 0-.469-1.869Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgCartFill)
const Memo = memo(ForwardRef)
export default Memo
