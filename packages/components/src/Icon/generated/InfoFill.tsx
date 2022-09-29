import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgInfoFill = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 4C12.972 4 4 12.972 4 24s8.972 20 20 20 20-8.972 20-20S35.028 4 24 4Zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm1.5 3.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-11Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgInfoFill)
const Memo = memo(ForwardRef)
export default Memo
