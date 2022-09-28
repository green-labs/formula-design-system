import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgChevronRightLineThin = (
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
        d="M16.3 38.925c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l12.4-12.4-12.4-12.4c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1l-13.5 13.5c-.2.2-.6.3-1 .3Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgChevronRightLineThin)
const Memo = memo(ForwardRef)
export default Memo
