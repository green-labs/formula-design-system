import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketLineUsBold = (
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
        d="M12.52 43.77c-1.23 0-2.46-.41-3.47-1.17a5.663 5.663 0 0 1-2.08-3.04L2.92 21.57c-.09-.31-.14-.64-.14-1a3.776 3.776 0 0 1 3.79-3.76h7.08l8.93-11.9c.32-.43.85-.68 1.43-.68s1.11.26 1.43.68l8.92 11.9h7.08c.79 0 1.55.24 2.19.69v-.07l.48.46c.73.71 1.12 1.66 1.12 2.66v.18l-.06.57-.03.2-4.04 17.96c-.37 1.29-1.1 2.37-2.12 3.13-.99.75-2.23 1.17-3.49 1.17H12.52v.01ZM6.35 20.59l.03.15 4.04 17.96c.11.38.41.8.77 1.07.4.29.85.44 1.34.44h22.94c.49 0 .97-.16 1.35-.45.39-.29.68-.71.81-1.17l4.02-18.05s-.03-.07-.06-.1a.236.236 0 0 0-.16-.07H6.57c-.06 0-.12.03-.16.07-.04.04-.07.1-.07.16l.01-.01Zm23.55-3.78-5.89-7.85-5.89 7.85h11.79-.01Z"
        fill={fill}
      />
      <path
        d="M23.99 38.13c-.85 0-1.55-.7-1.55-1.57v-.43l-.11-.02c-1.23-.26-2.24-.77-2.85-1.45-.45-.45-.71-1.02-.71-1.56 0-.79.58-1.35 1.4-1.35.58 0 .99.25 1.52.68.83.71 1.63 1.03 2.59 1.03.89 0 1.37-.29 1.37-.81s-.35-.81-1.14-.96l-1.75-.36c-2.31-.49-3.58-1.72-3.58-3.49 0-1.77 1.18-3.06 3.15-3.53l.11-.03v-.36c0-.86.69-1.57 1.55-1.57.86 0 1.55.7 1.55 1.57v.34l.12.02c.92.17 1.7.47 2.24.87.72.53 1.11 1.17 1.11 1.87 0 .75-.59 1.32-1.38 1.32-.59 0-1.09-.33-1.63-.73-.63-.5-1.29-.74-2.03-.74-.74 0-1.22.28-1.22.74 0 .46.38.74 1.15.89l1.88.39c2.33.5 3.46 1.64 3.46 3.47 0 1.96-1.34 3.37-3.57 3.79l-.12.02v.4c0 .86-.69 1.57-1.55 1.57l-.01-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketLineUsBold)
const Memo = memo(ForwardRef)
export default Memo
