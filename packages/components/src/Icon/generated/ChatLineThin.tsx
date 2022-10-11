import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgChatLineThin = (
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
        d="M6.194 28.95c0 .1.1.2.2.3 0 0 0 .1.1.1l-1.4 4.4c-.1.2-.2.5-.2.9 0 .5.2 1 .6 1.3.3.3.9.6 1.3.6.2 0 .4-.1.6-.1l5.5-1.8c.3-.1.5-.1.6-.1h.5c.3.1 1 .3 1.9.6 0 .2.1.3.1.5.6 1.2 3.2 3.6 4.9 4.6 2.6 1.4 5.4 2 8.1 1.9 1.9 0 3.9-.3 6-1 .2-.1.4 0 .4 0l5.4 1.9c.1.1.3.1.6.1.5 0 .8-.2 1-.3l.2-.1.1-.1c.1-.1.5-.5.5-1 0-.2.1-.5 0-.9-.3-1.6-.9-4.1-1-4.9v-.1c1.5-2.1 2.4-4.6 2.5-7.2.1-2.5-.5-5-1.9-7.2-.6-1-2.3-3.6-4.8-4.9-.1 0-.2-.1-.3-.1-2.1-6.8-8.9-11.5-16.9-11.5-9.6 0-17.5 7-17.5 15.6 0 3.1 1 6 2.9 8.5Zm34.6-6.4c1.1 1.8 1.6 3.9 1.5 5.9-.1 2.1-.8 4.2-2.1 5.9-.1.2-.5.8-.5 1.4 0 .133.3 1.7.9 4.7l-4.6-1.6c-.5-.2-1.1-.2-1.9 0-1.9.6-3.6.9-5.4.9-2.3.1-4.6-.5-6.8-1.6-.8-.5-1.9-1.4-2.7-2.2.6.1 1.2.1 1.8.1 9.5 0 17.2-7 17.2-15.7v-.9c1.4 1.1 2.3 2.6 2.6 3.1Zm-20-15.3c7.1 0 13.3 4.4 14.8 10.4.2.9.3 1.8.3 2.7 0 7.3-6.6 13.3-14.8 13.3-1.3 0-3.2-.4-4.1-.7-1-.3-2-.6-2.3-.7-.5-.2-.9-.2-1.3-.2-.5 0-1.1.2-1.4.3l-4.5 1.4 1.2-3.9c.2-.6 0-1.3-.4-2l-.1-.1c0-.1-.1-.2-.2-.3-1.5-2.1-2.3-4.5-2.3-7 0-7.3 6.8-13.2 15.1-13.2Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgChatLineThin)
const Memo = memo(ForwardRef)
export default Memo
