import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketFillJp = (
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
        d="M43.83 18.58c-.66-.64-1.54-1-2.47-1h-7.22l-9-12.01c-.57-.76-1.83-.76-2.4 0l-9.01 12H6.51c-.93 0-1.81.36-2.47 1.01-.66.66-1.04 1.54-1.04 2.47 0 .32.04.63.13.94l4.05 17.98a5.468 5.468 0 0 0 1.98 2.89c.95.71 2.12 1.11 3.3 1.11h22.95c1.19 0 2.37-.39 3.32-1.11.95-.71 1.66-1.74 2.01-2.97l4.04-17.96.03-.17.06-.54v-.18c0-.93-.38-1.81-1.04-2.46Zm-15.3 14.11c.67 0 1.22.55 1.22 1.22 0 .67-.55 1.22-1.22 1.22h-3.17v1.53c0 .72-.59 1.31-1.31 1.31-.72 0-1.31-.58-1.31-1.31v-1.53h-3.39c-.67 0-1.22-.55-1.22-1.22 0-.67.55-1.22 1.22-1.22h3.39v-.95h-3.39c-.67 0-1.22-.55-1.22-1.22 0-.67.55-1.22 1.22-1.22h2.78l-3.43-2.8c-.56-.45-.65-1.28-.18-1.84.45-.56 1.28-.64 1.84-.18l3.62 2.96 3.28-3.1a1.32 1.32 0 0 1 1.85.05c.5.52.47 1.35-.05 1.85l-3.24 3.07h2.72c.67 0 1.22.55 1.22 1.22 0 .67-.55 1.22-1.22 1.22h-3.17v.95h3.17l-.01-.01ZM17.48 17.58l6.46-8.61 6.46 8.61H17.48Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketFillJp)
const Memo = memo(ForwardRef)
export default Memo
