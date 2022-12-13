import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMoneyBagFillJp = (
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
        d="m33.26 12.935-.1-.07.64-.64c.88-1.04 2.23-3.02 1.54-4.9-.69-1.88-2.79-2.73-4.59-2.73h-13.5c-1.83 0-3.41 1.18-3.99 2.83-.56 1.56-.23 3.44.95 4.62l.91.83-.1.07c-6.78 4.86-10.07 10.93-10.07 18.56 0 4.1.46 6.55 1.53 8.21 1.53 2.45 3.87 3.59 7.57 3.69h20.11c1.97-.1 3.88-.32 5.62-1.75 2.17-1.96 3.27-5.34 3.27-10.05 0-7.37-3.66-14.35-9.79-18.67Zm-4.47 16.56c.7 0 1.28.57 1.28 1.27 0 .7-.57 1.27-1.28 1.27h-3.31v1.6c0 .75-.61 1.36-1.37 1.36-.76 0-1.37-.61-1.37-1.36v-1.6H19.2c-.7 0-1.28-.57-1.28-1.27 0-.7.57-1.27 1.28-1.27h3.54v-.99H19.2c-.7 0-1.28-.57-1.28-1.27 0-.7.57-1.27 1.28-1.27h2.9l-3.57-2.92c-.58-.47-.67-1.34-.19-1.92.47-.58 1.34-.66 1.92-.19l3.77 3.08 3.42-3.24a1.38 1.38 0 0 1 1.93.05c.52.55.49 1.41-.05 1.93l-3.38 3.2h2.83c.7 0 1.28.57 1.28 1.27 0 .7-.57 1.27-1.28 1.27h-3.31v.99h3.31l.01.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMoneyBagFillJp)
const Memo = memo(ForwardRef)
export default Memo
