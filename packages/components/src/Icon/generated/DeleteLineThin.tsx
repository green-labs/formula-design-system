import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgDeleteLineThin = (
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
        d="M24 43.2c10.6 0 19.2-8.6 19.2-19.2S34.6 4.8 24 4.8 4.8 13.4 4.8 24 13.4 43.2 24 43.2Zm0-36c9.3 0 16.8 7.5 16.8 16.8S33.3 40.8 24 40.8 7.2 33.3 7.2 24 14.7 7.2 24 7.2Z"
        fill={fill}
      />
      <path
        d="M17.7 30.3c.3.3.6.4 1 .4s.7-.1 1-.4L24 26l4.3 4.3c.3.3.6.4 1 .4s.7-.1 1-.4c.5-.5.5-1.4 0-1.9L26 24.1l4.3-4.3c.5-.5.5-1.4 0-1.9s-1.4-.5-1.9 0l-4.3 4.3-4.3-4.3c-.5-.5-1.4-.5-1.9 0s-.5 1.4 0 1.9l4.3 4.3-4.3 4.3c-.7.5-.7 1.3-.2 1.9Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgDeleteLineThin)
const Memo = memo(ForwardRef)
export default Memo
