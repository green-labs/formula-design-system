import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgChevronUpLineThin = (
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
        d="M37.45 30.2c-.4 0-.8-.1-1.1-.4l-12.4-12.4-12.4 12.4c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l13.5-13.5c.6-.6 1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgChevronUpLineThin)
const Memo = memo(ForwardRef)
export default Memo
