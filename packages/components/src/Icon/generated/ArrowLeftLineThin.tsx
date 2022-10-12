import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowLeftLineThin = (
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
        d="M22.876 38.7c-.32 0-.62-.12-.85-.35l-13.5-13.5c-.47-.47-.47-1.23 0-1.7l13.5-13.5c.23-.23.53-.35.85-.35a1.201 1.201 0 0 1 .85 2.05L12.276 22.8h26.35c.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2h-26.35l11.45 11.45a1.201 1.201 0 0 1-.85 2.05Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowLeftLineThin)
const Memo = memo(ForwardRef)
export default Memo
