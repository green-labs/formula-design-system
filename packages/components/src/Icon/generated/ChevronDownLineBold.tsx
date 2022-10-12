import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgChevronDownLineBold = (
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
        d="M24 34.8c-.5 0-1-.2-1.4-.6L9.1 20.7c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0L24 30l12.1-12.2c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8L25.4 34.2c-.4.4-.9.6-1.4.6Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgChevronDownLineBold)
const Memo = memo(ForwardRef)
export default Memo
