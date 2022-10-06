import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgMinusLineRegular = (
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
        d="M37.5 25.8h-27c-.99 0-1.8-.81-1.8-1.8s.81-1.8 1.8-1.8h27c.99 0 1.8.81 1.8 1.8s-.81 1.8-1.8 1.8Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgMinusLineRegular)
const Memo = memo(ForwardRef)
export default Memo
