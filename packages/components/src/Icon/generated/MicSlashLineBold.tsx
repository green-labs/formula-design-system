import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMicSlashLineBold = (
  { size = "xl", sizePx, color, ...props }: IconProps,
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
        d="M39.755 4.3c-.5 0-.9.2-1.2.5l-31.5 31.5c-.7.7-.7 1.7 0 2.4.3.3.7.5 1.2.5s.9-.1 1.2-.5l31.5-31.5c.7-.7.7-1.7 0-2.4-.3-.3-.7-.5-1.2-.5ZM14.355 18.9c-.1-.3-.3-.5-.4-.6l-.6-.3c-.3-.1-.5-.1-.7-.1-.9 0-1.6.8-1.6 1.7v3c0 1.2.2 2.6.6 4.4.1.2.3.6.4.6 0 0 .1 0 .3-.2l2.1-2.1c.133-.067.2-.167.2-.3v-.2c-.1-.7-.2-1.5-.2-2.2v-3c0-.2 0-.4-.1-.7ZM37.845 18.3l-.6-.3c-.3-.1-.5-.1-.7-.1-.9 0-1.6.8-1.6 1.7v3c0 2.8-1 5.3-3 7.3-2 1.9-4.6 3-7.3 3-1.5 0-3-.3-4.4-1h-.3c-.1 0-.2.1-.3.2l-1.6 1.6c-.2.2-.3.5-.3.7 0 .2.3.4.4.4 1.6.7 3 1.2 4.6 1.4h.2v4.2h-4.3c-.2 0-.4 0-.7.1-.2 0-.5.2-.6.4-.1.1-.2.3-.3.5-.1.3-.1.5-.1.7 0 .9.8 1.6 1.7 1.6h12c.2 0 .4 0 .7-.1.2 0 .5-.2.6-.4.1-.1.2-.3.3-.5.1-.3.1-.5.1-.7 0-.9-.8-1.6-1.7-1.6h-4.3v-4.2h.2c6.6-.9 11.8-6.9 11.8-13.6v-3c0-.2 0-.4-.1-.7-.1-.3-.3-.5-.4-.6ZM17.155 21.9c0 .4 0 .5.1.5s.2-.1.4-.2c1.5-1.3 2.8-2.8 2.8-2.8.2-.1.2-.3.2-.4v-7c0-.6.1-1.1.3-1.6.2-.5.5-.9 1-1.4.5-.5.9-.8 1.4-1 .4-.2 1-.3 1.6-.3 1 0 1.7.3 2.4.8.7.4 1.3 1.1 1.6 1.9.1.2.2.4.3.4l.2-.2 1.9-1.9c.3-.3.1-.7.1-.7-.7-1.1-1.7-2.1-2.9-2.7-1.2-.6-2.5-.9-3.8-.9-4.2.1-7.6 3.6-7.6 7.8v9.7Z"
        fill={fill}
      />
      <path
        d="M24.755 30.2c.6 0 1.3-.1 1.9-.1 1.3-.4 2.6-1.1 3.5-2.1 1.5-1.4 2.3-3.3 2.3-5.4v-2.2c0-.2-.3-.4-.4-.4h-.1l-2.8 2.8c-.1 0-.1.1-.2.2v.1c-.3 2-1.9 3.6-3.8 3.8-.1 0-.2.1-.3.2l-2.3 2.3-.1.2s-.1.2 0 .3c.1 0 .2.1.3.1 0 0 1.3.2 2 .2Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMicSlashLineBold)
const Memo = memo(ForwardRef)
export default Memo
