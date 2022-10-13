import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgClockLineThin = (
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
        d="M24 43.2c10.6 0 19.2-8.6 19.2-19.2S34.6 4.8 24 4.8 4.8 13.4 4.8 24 13.4 43.2 24 43.2Zm0-36c9.3 0 16.8 7.5 16.8 16.8S33.3 40.8 24 40.8 7.2 33.3 7.2 24 14.7 7.2 24 7.2Z"
        fill={fill}
      />
      <path
        d="M30.5 32.4c-.35 0-.73-.17-1.03-.47l-6.5-6.5c-.3-.3-.47-.67-.47-1.03V14c0-.84.66-1.5 1.5-1.5s1.5.66 1.5 1.5v9.7l6.03 6.07c.56.65.56 1.6 0 2.16-.3.3-.67.47-1.03.47Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgClockLineThin)
const Memo = memo(ForwardRef)
export default Memo
