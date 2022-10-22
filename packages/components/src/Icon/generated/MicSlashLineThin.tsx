import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMicSlashLineThin = (
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
            d="M39.745 4.75c-.3 0-.6.2-.8.4l-31.49 31.5c-.5.5-.5 1.2 0 1.7.2.3.5.4.8.4.3 0 .6-.1.8-.4l31.49-31.5c.5-.5.5-1.2 0-1.7-.2-.3-.5-.4-.8-.4ZM14.055 25.05v-.1c-.1-.7-.2-1.5-.2-2.2v-3c0-.2 0-.4-.1-.5v-.2s0-.1-.2-.3c0 0-.3-.1-.4-.2-.2-.1-.3-.1-.5-.1-.6 0-1.1.5-1.1 1.2v3c0 1.1.2 2.5.6 4.2l1.9-1.8ZM18.745 40.85c-.2 0-.4 0-.5.1h-.2c-.1 0-.2 0-.3.2 0 0-.1.3-.2.4-.1.2-.1.3-.1.5 0 .6.5 1.1 1.2 1.1v.1h11.9c.2 0 .4 0 .5-.1h.2c.1 0 .2 0 .3-.2l.2-.4c.1-.2.1-.3.1-.5 0-.6-.5-1.1-1.2-1.1h-4.8v-5.2h.3c6.5-.7 11.7-6.4 11.7-13.1v-3c0-.2 0-.4-.1-.5v-.2s0-.1-.2-.3c0 0-.3-.1-.4-.2-.2-.1-.3-.1-.5-.1-.6 0-1.1.5-1.1 1.2v3c0 2.8-1.1 5.5-3.2 7.6-2 2.1-4.7 3.2-7.6 3.2-1.6 0-3.2-.3-4.6-1h-.1l-1.7 1.7c.067 0 .1.033.1.1 1.5.8 3.1 1.3 4.8 1.5h.3v5.2h-4.8ZM19.855 12.05c0-.7.1-1.3.3-1.8.2-.5.6-1.1 1.1-1.6.5-.6 1.1-.9 1.6-1.1.5-.2 1.1-.3 1.8-.3 1.1 0 1.9.2 2.7.8.8.5 1.5 1.2 1.8 2l1.7-1.7v-.1c-.6-1-1.5-1.8-2.6-2.4-1.2-.6-2.4-.9-3.6-.9-3.9.1-7.1 3.4-7.1 7.3l-.1 9.3 2.4-2.5v-7Z"
            fill={fill}
          />
          <path
            d="M29.845 27.55c1.3-1.4 2.1-3.2 2.1-5.1v-1.8l-2.5 2.5c-.4 2.2-2.1 4-4.3 4.2l-2.1 2.1c.6.1 1.1.2 1.7.2.6 0 1.2 0 1.8-.2 1.3-.3 2.4-.9 3.3-1.9Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgMicSlashLineThin)
const Memo = memo(ForwardRef)
export default Memo
