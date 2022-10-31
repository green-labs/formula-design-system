import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgWebFill = (
  {
    size = "xl",
    sizePx,
    style,
    className,
    color,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const finalSize = sizePx ? sizePx : convertSizeToPx(size)
  const fill = color && colorMap[color]
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
        d="M9.95 38.95c.1.1.2.1.2.2 0-.2-.1-.3-.2-.2 0-.067 0-.067 0 0ZM38.05 38.95c0-.067 0-.067 0 0 0 0-.1.1-.2.1 0-.1.1-.1.2-.1ZM35.45 22.65h7.8c-.3-4.6-2.2-8.8-5.2-11.9l-.1.1c-.4.4-.8.7-1.2 1-.8.7-1.7 1.3-2.7 1.8.8 2.7 1.3 5.7 1.4 9ZM24.05 13.05c2.2 0 4.4-.4 6.4-1.2-1.6-3.9-3.9-6.4-6.4-6.4-2.5 0-4.8 2.5-6.4 6.4 2 .8 4.1 1.2 6.4 1.2ZM16.75 33.35c2.3-.9 4.7-1.4 7.3-1.4 2.6 0 5 .5 7.3 1.4.7-2.4 1.1-5.1 1.2-8.1h-17c.1 3 .5 5.7 1.2 8.1ZM12.55 25.25h-7.8c.3 4.6 2.2 8.7 5.1 11.8l.1-.1c.4-.4.8-.7 1.2-1 .9-.7 1.8-1.3 2.7-1.8-.7-2.7-1.2-5.7-1.3-8.9ZM33.05 36.75c-.5 1.1-1 2.1-1.7 3-.7 1.1-1.6 2-2.4 2.7 2.6-.7 5-1.9 7.1-3.6-.4-.4-.9-.8-1.4-1.1-.5-.3-1.1-.7-1.6-1ZM31.25 14.45c-2.3.9-4.7 1.4-7.2 1.4s-5-.5-7.2-1.4c-.7 2.4-1.1 5.2-1.2 8.2h16.9c-.2-3-.6-5.8-1.3-8.2ZM24.05 34.95c-2.2 0-4.3.4-6.3 1.2 1.6 3.9 3.8 6.3 6.3 6.3s4.8-2.5 6.3-6.3c-2-.8-4.1-1.2-6.3-1.2ZM35.45 25.25c-.1 3.2-.6 6.2-1.4 8.9 1 .5 1.9 1.1 2.7 1.8.4.3.8.7 1.2 1l.1.1c2.9-3.1 4.8-7.3 5.1-11.8h-7.7ZM16.65 39.75c-.6-.9-1.2-1.9-1.7-3-.6.3-1.1.7-1.6 1.1-.5.4-.9.7-1.4 1.1 2.1 1.6 4.5 2.9 7.1 3.6-.9-.8-1.7-1.7-2.4-2.8ZM31.35 8.15c.6.9 1.2 2 1.7 3.1.6-.3 1.1-.7 1.7-1.1.5-.4.9-.7 1.4-1.1-2.1-1.7-4.5-2.9-7.2-3.6.9.7 1.7 1.6 2.4 2.7ZM12.55 22.65c.1-3.3.6-6.3 1.5-9-.9-.5-1.8-1.1-2.7-1.8-.4-.3-.8-.7-1.2-1l-.1-.1c-3 3.2-4.9 7.3-5.2 11.9h7.7ZM14.95 11.25c.5-1.1 1.1-2.2 1.7-3.1.7-1.1 1.6-2 2.4-2.7-2.7.7-5.1 1.9-7.2 3.6.4.4.9.8 1.4 1.1.6.4 1.1.8 1.7 1.1Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgWebFill)
const Memo = memo(ForwardRef)
export default Memo
