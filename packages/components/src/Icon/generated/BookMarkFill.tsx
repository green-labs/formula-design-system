import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgBookMarkFill = (
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
        d="M36.6 43.2c-.3 0-.7-.1-.9-.4l-11-10.7c-.4-.4-1-.4-1.4 0l-11 10.7c-.2.2-.5.3-.7.3-.3 0-.5 0-.8-.1-.2-.1-.5-.3-.6-.5-.1-.2-.2-.5-.2-.8V9.6c0-1.5.6-2.9 1.6-4s2.5-1.6 4-1.6h16.8c1.5 0 2.9.6 4 1.6s1.6 2.5 1.6 4v32.2c0 .4-.1.7-.4 1-.3.3-.6.4-1 .4Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgBookMarkFill)
const Memo = memo(ForwardRef)
export default Memo
