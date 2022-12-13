import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCartLineBold = (
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
        d="M17 33.85c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5Zm0 6c-.9 0-1.5-.6-1.5-1.5s.6-1.5 1.5-1.5 1.5.6 1.5 1.5-.6 1.5-1.5 1.5ZM37 33.85c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5Zm0 6c-.9 0-1.5-.6-1.5-1.5s.6-1.5 1.5-1.5 1.5.6 1.5 1.5-.6 1.5-1.5 1.5ZM42.5 10.45c-.2-.2-.5-.5-1.1-.6-.2-.1-.4-.2-.8-.2H13.1l-.6-3.1c-.1-.8-.9-1.4-1.7-1.4h-6c-.9 0-1.7.8-1.7 1.7 0 .9.8 1.7 1.7 1.7h4.6l4.2 23.6c.1.8.9 1.4 1.7 1.4h24c.9 0 1.7-.8 1.7-1.7 0-.9-.8-1.7-1.7-1.7H16.7l-.4-2.1h21.4c.6 0 1-.2 1.3-.4.2-.1.3-.2.4-.3.1-.1.2-.3.4-.5s.3-.5.4-.8l2.7-13.5v-.6c0-.3-.1-.6-.2-.8.1-.3 0-.5-.2-.7Zm-5.3 14.2H15.9l-2.1-11.6h25.7l-2.3 11.6Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCartLineBold)
const Memo = memo(ForwardRef)
export default Memo
