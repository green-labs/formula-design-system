import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgChatLineBold = (
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
        d="M38.145 16h-.1c-2.2-6.9-9.2-11.6-17.3-11.6-9.9 0-18 7.2-18 16.1 0 3.2 1 6.2 2.9 8.8 0 .1.1.1.1.2l-1.3 4.1c-.2.3-.3.6-.3 1.1 0 .6.3 1.3.7 1.7.4.4 1.1.7 1.7.7.3 0 .6-.1.8-.1l5.5-1.8c.2-.1.4-.1.5-.1h.4c.2.1.9.3 1.6.5 0 .1.1.2.1.3.7 1.2 3.3 3.7 5 4.7h.1c2.7 1.4 5.6 2.1 8.3 2 2 0 4-.3 6.2-1.1h.1l5.4 1.9c.2.1.4.2.8.2.6 0 1-.2 1.3-.4l.2-.1.2-.2c.2-.2.6-.6.7-1.2.1-.4.1-.8 0-1.2-.3-1.5-.8-3.7-1-4.6 1.5-2.1 2.4-4.7 2.5-7.3.1-2.6-.6-5.2-1.9-7.5-.8-1.1-2.6-3.8-5.2-5.1Zm-24.9 15.6c-.6 0-1.1.2-1.5.3l-3.6 1.1.9-3c.2-.8.1-1.6-.5-2.5v-.1c-.1-.1-.1-.2-.2-.4-1.5-2-2.2-4.3-2.2-6.7 0-7 6.5-12.7 14.6-12.7 6.9 0 12.9 4.2 14.3 10 .2.9.3 1.8.3 2.6 0 7.1-6.4 12.8-14.3 12.8-1.2 0-3-.4-4-.6-1.1-.3-2.1-.6-2.3-.7-.6-.1-1.1-.1-1.5-.1Zm26.4 2.5c-.2.3-.6 1-.6 1.6 0 .2 0 .3.8 3.9l-3.7-1.3c-.6-.2-1.3-.2-2.1 0h-.1c-1.8.6-3.5.9-5.2.9-2.2.1-4.4-.5-6.6-1.6-.4-.3-1-.7-1.5-1.1h.4c9.6 0 17.5-7.1 17.7-15.9.8.9 1.3 1.7 1.6 2.1 1 1.7 1.5 3.7 1.5 5.7-.3 2-1 4-2.2 5.7Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgChatLineBold)
const Memo = memo(ForwardRef)
export default Memo
