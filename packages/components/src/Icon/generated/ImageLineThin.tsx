import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgImageLineThin = (
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
        d="M9.744 41.85h30c3.23 0 5.85-2.62 5.85-5.85V12c0-3.23-2.62-5.85-5.85-5.85h-30c-3.23 0-5.85 2.62-5.85 5.85v24c0 3.23 2.62 5.85 5.85 5.85ZM6.594 36v-2.35l10.89-8.69s.08-.07.11-.1c.24-.24.53-.41 1.14-.41.3 0 .77.23 1.11.56l8.22 7.25-6.89 6.89H9.744c-1.77 0-3.15-1.38-3.15-3.15Zm18.41 3.15 9.3-9.3c.26-.26.65-.43 1.13-.5.45.01.77.11.96.3.03.03.06.05.09.08l6.42 5.4V36c0 1.77-1.38 3.15-3.15 3.15h-14.75ZM9.744 8.85h30c1.77 0 3.15 1.38 3.15 3.15v19.6l-4.64-3.9c-.72-.7-1.7-1.05-2.91-1.05h-.17c-1.12.14-2.09.58-2.79 1.29l-2.41 2.41-8.28-7.31c-.79-.79-1.95-1.29-2.96-1.29-1.22 0-2.2.37-3 1.14l-9.14 7.31V12c0-1.77 1.38-3.15 3.15-3.15Z"
        fill={fill}
      />
      <path
        d="M32.244 20.7c2.36 0 4.2-1.84 4.2-4.2 0-2.36-1.84-4.2-4.2-4.2-2.36 0-4.2 1.84-4.2 4.2 0 2.36 1.84 4.2 4.2 4.2Zm0-6c1.04 0 1.8.76 1.8 1.8s-.76 1.8-1.8 1.8-1.8-.76-1.8-1.8.76-1.8 1.8-1.8Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgImageLineThin)
const Memo = memo(ForwardRef)
export default Memo
