import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgEyeSlashLineBold = (
  { size = "xl", sizePx, color = "gray-90", ...props }: IconProps,
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
      viewBox="0 0 48 48"
      ref={ref}
      {...props}
    >
      <path
        d="M23.9 32.3h-.7c-.5 0-.9-.2-1.2-.6-.3-.3-.4-.8-.4-1.2.1-.9.8-1.6 1.7-1.6h.5c1.3 0 2.5-.5 3.4-1.3 1.1-.9 1.7-2.2 1.8-3.6 0-.9.8-1.6 1.7-1.6 1 0 1.7.9 1.7 1.8-.1 2.3-1.2 4.5-2.9 6-1.6 1.4-3.6 2.1-5.6 2.1ZM7.5 42.1c-.2 0-.4 0-.6-.1h-.3c-.3-.2-.5-.4-.7-.8-.1-.3-.2-.7-.1-1 0-.4.3-.7.4-.9L16.5 29c-1-1.3-1.6-3-1.8-4.7-.2-2.3.6-4.6 2.1-6.3 1.5-1.7 3.6-2.8 6-3h.6c2 0 3.8.6 5.3 1.8L39.1 6.4c.3-.3.7-.5 1.2-.5s.8.1 1.1.5c.2.2.5.7.5 1.1 0 .5-.2.9-.5 1.2l-33 33c-.1.1-.2.1-.3.2-.1.1-.2.1-.3.2h-.3Zm16.1-23.8h-.4c-1.4.1-2.7.7-3.6 1.8-.9 1.1-1.4 2.4-1.3 3.9.1.9.3 1.7.8 2.5l7.3-7.3c-.8-.6-1.8-.9-2.8-.9Z"
        fill={fill}
      />
      <path
        d="M23.9 39c-2.4 0-4.9-.4-7.2-1.2-.1 0-.2-.1-.2-.3v-.4l2.1-2.1s.2-.2.3-.2h.2c1.6.5 3.1.8 4.9.8 3.7 0 7.4-1.1 11-3.4 3-2 4.9-4.7 7.2-8.3-.5-.8-1-1.5-1.4-2.2-1.1-1.7-2-3.2-3.6-4.5l-.1-.1v-.5l.1-.2 2-2h.5c1.7 1.5 2.7 3.1 4 5 .5.7 1 1.5 1.5 2.3.3.6.5 1.2.5 1.8 0 .6-.2 1.2-.5 1.8-2.5 4-4.7 7.2-8.3 9.5-4.1 2.9-8.4 4.2-13 4.2ZM8.3 33.2c-2.1-1.8-3.4-3.9-4.6-6.1-.3-.5-.6-.9-.9-1.4-.4-.6-.5-1.1-.5-1.7 0-.7.2-1.3.5-1.9 2.4-3.7 4.7-7.1 8.4-9.5 4.1-2.6 8.5-4 12.8-4 2.4 0 4.9.4 7.1 1.2h.2v.6l-2.1 2.1s-.2.2-.3.2h-.2c-1.5-.4-3.1-.6-4.7-.6-3.7 0-7.5 1.2-11 3.5-3.2 2-5.1 4.9-7.2 8.2l-.1.1c.3.4.5.9.8 1.3 1.2 2.1 2.3 3.8 4.1 5.4l.1.1v.6l-2.1 2.1h-.3v-.2Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgEyeSlashLineBold)
const Memo = memo(ForwardRef)
export default Memo
