import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgTouchFill = (
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
        d="m33.028 23.078-6.265-.02v-7.205c0-1.086-.386-2.06-1.085-2.754-.7-.693-1.683-1.075-2.778-1.075-1.085 0-2.068.392-2.768 1.085-.7.694-1.085 1.668-1.085 2.744v13.013c-.69-.703-1.5-1.487-2.078-1.93-.872-.662-2.058-1.024-3.336-1.024-.973 0-1.956.21-2.767.603C9.679 27.087 9 28.032 9 29.107c0 .483.182.955.598 1.538.365.512.913 1.125 1.714 1.99l.537.623h.01l1.582 1.688c.841.904 1.784 1.94 2.2 2.402l.04.05c1.633 1.829 3.265 3.567 5.262 4.773 2.069 1.246 4.37 1.829 7.26 1.829h.314c2.21-.03 5.018-.271 7.168-1.93C37.915 40.353 39 37.479 39 33.299v-4.432c0-3.226-2.555-5.688-5.972-5.788Z"
        fill={fill}
      />
      <path
        d="M32.958 17.069a2.025 2.025 0 0 1-2.028-2.01c0-4.432-3.64-8.04-8.111-8.04s-8.1 3.598-8.1 8.03c0 1.105-.913 2.01-2.028 2.01a2.025 2.025 0 0 1-2.028-2.01C10.663 8.406 16.117 3 22.819 3c6.702 0 12.166 5.406 12.166 12.059 0 1.105-.912 2.01-2.027 2.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgTouchFill)
const Memo = memo(ForwardRef)
export default Memo
