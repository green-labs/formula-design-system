import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCameraFill = (
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
        d="M44.11 14.39c-.9-.9-2.09-1.39-3.36-1.39h-5.53c-.21 0-.49-.15-.71-.37l-2.42-3.82c-.04-.07-.1-.14-.15-.2C31.05 7.57 29.85 7 28.56 7h-8.62c-1.29 0-2.5.57-3.38 1.61-.05.06-.1.13-.15.2l-2.42 3.82c-.15.16-.39.37-.61.37H7.75c-1.27 0-2.46.49-3.36 1.39-.9.9-1.39 2.09-1.39 3.36v18c0 1.27.49 2.46 1.39 3.36.9.9 2.09 1.39 3.36 1.39h33c1.27 0 2.46-.49 3.36-1.39.9-.9 1.39-2.09 1.39-3.36v-18c0-1.27-.49-2.46-1.39-3.36ZM24.25 33.93c-4.97 0-9-3.91-9-8.73s4.03-8.73 9-8.73 9 3.91 9 8.73-4.03 8.73-9 8.73Z"
        fill={fill}
      />
      <path d="M24.25 31.25a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" fill={fill} />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCameraFill)
const Memo = memo(ForwardRef)
export default Memo
