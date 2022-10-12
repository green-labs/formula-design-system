import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPinLineRegular = (
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
        d="m33.15 17.95-1.31-2.72c-.17-.33-.24-.68-.24-1.13V8.5h.3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-16c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h.5v5.6c0 .45-.07.8-.25 1.15l-1.28 2.66c-1.55 3-2.37 6.52-2.37 10.19 0 1.42 1.07 2.5 2.5 2.5h7.4V41c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V30.6H33c1.42 0 2.5-1.08 2.5-2.5 0-3.4-.79-6.81-2.35-10.15Zm-8.73 9.65c-.16-.06-.34-.1-.52-.1s-.36.04-.52.1h-7.87c.07-3.01.77-5.88 2.05-8.35l1.29-2.68c.38-.75.56-1.56.56-2.47V8.5h9.2v5.6c0 .91.18 1.72.55 2.45l1.29 2.68c1.29 2.76 1.98 5.58 2.05 8.37h-8.08Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPinLineRegular)
const Memo = memo(ForwardRef)
export default Memo
