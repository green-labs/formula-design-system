import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgEyeSlashLineThin = (
  {
    size = "XL",
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
    <div>
      {
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
            d="M24.1 31.85c-.4 0-.8 0-1.3-.1-.5-.5-.6-1.1-.4-1.6.2-.4.6-.7 1.1-.7h.5c1.4 0 2.7-.5 3.7-1.4 1.2-1 1.8-2.4 1.9-4 0-.6.6-1.1 1.2-1.1.7 0 1.2.6 1.2 1.3-.1 2.2-1.1 4.2-2.7 5.6-1.4 1.3-3.3 2-5.2 2ZM7.7 41.65c-.2 0-.3 0-.5-.1h-.1c-.2-.2-.4-.3-.4-.5-.1-.3-.2-.5-.1-.7 0-.3.2-.5.3-.7l10.7-10.7-.2-.2c-2.5-3.1-2.4-7.5.2-10.5 1.4-1.6 3.4-2.6 5.6-2.8h.6c1.9 0 3.7.6 5.2 1.8l.2.2L40 6.65c.2-.2.5-.3.9-.3.3 0 .6.1.8.3.2.2.3.5.3.8 0 .4-.1.7-.3.9l-33 33s-.1.1-.2.1-.1.1-.2.1c-.3.1-.4.1-.6.1Zm16.1-23.8h-.4c-1.6.1-3 .8-4 2s-1.5 2.7-1.4 4.2c.1 1.1.4 2.1 1 2.9l.2.3 8.2-8.2-.3-.2c-.9-.6-2.1-1-3.3-1Z"
            fill={fill}
          />
          <path
            d="M24.1 38.55c-2.4 0-4.7-.4-6.9-1.1l1.9-1.9h.1c1.6.5 3.1.8 4.9.8 3.8 0 7.6-1.2 11.3-3.4 3.1-2.1 5.1-4.9 7.4-8.6l.1-.2-.1-.2c-.6-.8-1-1.5-1.5-2.2-1.1-1.7-2-3.2-3.6-4.5v-.1l1.7-1.7c1.6 1.4 2.6 3 3.8 4.8.5.7 1 1.5 1.5 2.3.3.5.4 1 .4 1.5s-.2 1.1-.5 1.5c-2.5 3.9-4.7 7-8.1 9.3-3.7 2.4-7.9 3.7-12.4 3.7ZM8.6 32.65c-1.9-1.7-3-3.6-4.3-5.8-.3-.5-.6-1-.9-1.4-.3-.5-.5-1-.5-1.4 0-.6.2-1.1.5-1.6 2.4-3.6 4.6-7 8.2-9.3 4-2.6 8.3-4 12.5-4 2.3 0 4.7.4 6.7 1.1l-1.9 1.9h-.2c-1.4-.4-3-.6-4.7-.6-3.8 0-7.7 1.2-11.3 3.5-3.3 2.1-5.2 5-7.3 8.4l-.2.4.1.2c.3.5.6.9.8 1.4 1.2 2 2.3 3.8 4.1 5.4v.1l-1.6 1.7Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgEyeSlashLineThin)
const Memo = memo(ForwardRef)
export default Memo
