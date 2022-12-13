import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketFillUs = (
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
        d="M43.83 18.58c-.66-.64-1.54-1-2.47-1h-7.22l-9-12.01c-.57-.76-1.83-.76-2.4 0l-9.01 12H6.51c-.93 0-1.81.36-2.47 1.01-.66.66-1.04 1.54-1.04 2.47 0 .32.04.63.13.94l4.05 17.98a5.468 5.468 0 0 0 1.98 2.89c.95.71 2.12 1.11 3.3 1.11h22.95c1.19 0 2.37-.39 3.32-1.11.95-.71 1.66-1.74 2.01-2.97l4.04-17.96c.01-.05.02-.11.03-.17l.06-.54v-.18c0-.93-.38-1.81-1.04-2.46Zm-18.5 17.94v.52c0 .79-.63 1.43-1.4 1.43-.77 0-1.4-.64-1.4-1.43v-.55c-1.27-.23-2.37-.74-3-1.45-.41-.41-.67-.94-.67-1.47 0-.71.51-1.21 1.26-1.21.49 0 .86.18 1.43.65.89.76 1.72 1.07 2.68 1.07.96 0 1.52-.33 1.52-.95 0-.58-.38-.93-1.25-1.1l-1.75-.36c-2.26-.48-3.47-1.65-3.47-3.35 0-1.81 1.24-3.04 3.26-3.44v-.48c0-.79.63-1.43 1.4-1.43.77 0 1.4.64 1.4 1.43v.46c.96.15 1.82.45 2.41.88.66.49 1.05 1.08 1.05 1.75 0 .67-.52 1.18-1.24 1.18-.51 0-.96-.28-1.54-.7-.69-.55-1.39-.77-2.11-.77-.83 0-1.37.33-1.37.88 0 .52.43.87 1.26 1.03l1.88.39c2.26.49 3.35 1.57 3.35 3.33 0 2.01-1.38 3.34-3.69 3.69h-.01Zm-7.85-18.94 6.46-8.61 6.46 8.61H17.48Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketFillUs)
const Memo = memo(ForwardRef)
export default Memo
