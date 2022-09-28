import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgMenuLineBold = (
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M39.25 12.7H8.75c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h30.5c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8ZM39.25 25.8H8.75c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h30.5c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8ZM39.25 38.9H8.75c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h30.5c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgMenuLineBold)
const Memo = memo(ForwardRef)
export default Memo
