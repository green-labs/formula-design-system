import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgArrowTriangleUpLineThin = (
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
        d="M37.834 32.9h-26.2c-.91 0-1.73-.56-2.09-1.43-.33-.79-.18-1.68.37-2.27l13.16-15.36c.15-.15.31-.26.42-.32l.33-.32h.35c.15-.05.34-.1.57-.1.16 0 .55 0 .97.24.33.15.56.37.68.49l.08.09 13.13 15.34c.55.69.66 1.6.29 2.38-.37.78-1.16 1.26-2.06 1.26Zm-24.57-3h22.94l-11.47-13.39-11.47 13.39Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgArrowTriangleUpLineThin)
const Memo = memo(ForwardRef)
export default Memo
