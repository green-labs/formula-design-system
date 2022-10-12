import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgLocationLineBold1 = (
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
        d="M24 45.25c-.7 0-1.2-.25-1.46-.38-.7-.35-1.06-1.07-1.26-1.46-.06-.12-.1-.24-.13-.36-1.95-8.13-5.18-12.31-7.78-15.67-2.4-3.11-4.47-5.8-4.47-10.13 0-8 6.77-14.5 15.1-14.5s15.1 6.5 15.1 14.5c0 4.33-2.07 7.02-4.47 10.12-2.59 3.35-5.8 7.52-7.76 15.6-.14.82-.8 1.6-1.41 1.9-.22.11-.82.38-1.46.38Zm-.49-2.77v.17-.17Zm.5-36.33c-6.46 0-11.71 4.98-11.71 11.1 0 3.17 1.5 5.11 3.76 8.05 2.6 3.37 5.8 7.51 7.94 15.21 2.14-7.7 5.34-11.84 7.94-15.21 2.26-2.93 3.76-4.87 3.76-8.05 0-6.12-5.25-11.1-11.7-11.1h.01Z"
        fill={fill}
      />
      <path
        d="M24 22.95c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgLocationLineBold1)
const Memo = memo(ForwardRef)
export default Memo
