import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMoneyBagFillUs = (
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
        d="m33.26 12.935-.1-.07.64-.64c.88-1.04 2.23-3.02 1.54-4.9-.69-1.88-2.79-2.73-4.59-2.73h-13.5c-1.83 0-3.41 1.18-3.99 2.83-.56 1.56-.23 3.44.95 4.62l.91.83-.1.07c-6.78 4.86-10.07 10.93-10.07 18.56 0 4.1.46 6.55 1.53 8.21 1.53 2.45 3.87 3.59 7.57 3.69h20.11c1.97-.1 3.88-.32 5.62-1.75 2.17-1.96 3.27-5.34 3.27-10.05 0-7.37-3.66-14.35-9.79-18.67Zm-7.73 20.33v.57c0 .87-.69 1.57-1.54 1.57-.85 0-1.54-.7-1.54-1.57v-.61c-1.4-.25-2.6-.81-3.29-1.59-.45-.45-.74-1.03-.74-1.61 0-.78.55-1.33 1.39-1.33.53 0 .94.2 1.57.71.98.83 1.89 1.17 2.94 1.17s1.66-.37 1.66-1.04c0-.64-.42-1.02-1.38-1.21l-1.92-.4c-2.48-.52-3.81-1.81-3.81-3.67 0-1.98 1.37-3.33 3.57-3.78v-.52c0-.87.69-1.57 1.54-1.57.85 0 1.54.7 1.54 1.57v.5c1.06.17 1.99.49 2.65.97.73.53 1.15 1.18 1.15 1.92s-.57 1.29-1.35 1.29c-.56 0-1.06-.3-1.69-.77-.76-.61-1.53-.85-2.32-.85-.91 0-1.5.37-1.5.97 0 .57.47.95 1.39 1.13l2.06.43c2.47.53 3.67 1.72 3.67 3.65 0 2.2-1.52 3.66-4.04 4.05l-.01.02Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMoneyBagFillUs)
const Memo = memo(ForwardRef)
export default Memo
