import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketLineJpBold = (
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
        d="M12.515 43.77c-1.23 0-2.46-.41-3.47-1.17a5.663 5.663 0 0 1-2.08-3.04l-4.05-17.99c-.09-.31-.14-.64-.14-1 0-1 .4-1.95 1.12-2.67.72-.71 1.66-1.09 2.67-1.09h7.08l8.93-11.9c.32-.43.85-.68 1.43-.68s1.11.26 1.43.68l8.92 11.9h7.08c.79 0 1.55.24 2.19.69v-.07l.48.46c.72.71 1.12 1.66 1.12 2.66v.18l-.06.57-.03.19-4.04 17.97c-.37 1.29-1.1 2.37-2.12 3.13-.99.75-2.23 1.17-3.49 1.17h-22.97v.01Zm-6.17-23.18.03.15 4.04 17.96c.11.38.41.79.77 1.06.4.29.85.44 1.34.44h22.94c.49 0 .97-.16 1.35-.45.39-.29.68-.71.81-1.17l4.02-18.05s-.03-.07-.06-.1a.236.236 0 0 0-.16-.07H6.565c-.06 0-.12.03-.16.07-.04.04-.07.1-.07.16h.01Zm23.55-3.78-5.89-7.85-5.89 7.85h11.79-.01Z"
        fill={fill}
      />
      <path
        d="M24.105 37.63c-.8 0-1.45-.65-1.45-1.45v-1.39h-3.25c-.75 0-1.37-.61-1.37-1.36 0-.75.61-1.36 1.37-1.36h3.25v-.67h-3.25c-.75 0-1.37-.61-1.37-1.36 0-.75.61-1.36 1.37-1.36h2.38l-3.12-2.55c-.3-.25-.49-.59-.53-.98-.04-.39.08-.76.33-1.06.27-.34.68-.53 1.12-.53.33 0 .66.12.92.33l3.52 2.88 3.19-3.02c.27-.25.63-.39 1-.39.41 0 .78.16 1.05.45.27.28.41.64.4 1.03 0 .39-.17.75-.46 1.02l-2.98 2.83h2.36c.75 0 1.37.61 1.37 1.36 0 .75-.61 1.36-1.37 1.36h-3.03v.67h3.03c.75 0 1.37.61 1.37 1.36 0 .75-.61 1.36-1.37 1.36h-3.03v1.39c0 .8-.65 1.45-1.45 1.45v-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketLineJpBold)
const Memo = memo(ForwardRef)
export default Memo
