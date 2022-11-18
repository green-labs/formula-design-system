import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketLineBold = (
  { size = "xl", sizePx, style, className, color, ...props }: IconProps,
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M12.53 43.18c-1.24 0-2.46-.41-3.44-1.15a5.715 5.715 0 0 1-2.05-3L2.99 21.04a3.648 3.648 0 0 1 .97-3.58c.7-.69 1.62-1.07 2.61-1.07h7.12l8.95-11.93c.3-.41.81-.65 1.36-.65s1.06.24 1.36.65l8.95 11.93h7.12c.99 0 1.91.38 2.61 1.07.7.69 1.09 1.62 1.1 2.6v.2l-.06.54c0 .06-.02.12-.03.19l-4.04 17.96c-.37 1.27-1.09 2.33-2.09 3.09a5.76 5.76 0 0 1-3.44 1.15H12.53v-.01Zm-6.27-23.1s.02.06.03.11l4.05 18.01c.12.41.42.83.8 1.12.4.31.87.46 1.39.46h22.93a2.346 2.346 0 0 0 2.24-1.68l4.03-18.11s-.04-.06-.09-.11a.294.294 0 0 0-.22-.09H6.57c-.08 0-.16.03-.21.09-.06.06-.09.13-.09.22l-.01-.02Zm23.79-3.7L24 8.31l-6.05 8.07h12.11-.01Z"
        fill={fill}
      />
      <path
        d="M27.62 35.58c-.68 0-1.29-.43-1.53-1.06L24 28.99l-1.98 5.47c-.22.66-.85 1.11-1.57 1.11-.72 0-1.34-.47-1.55-1.15l-1.48-4.59-1.45-.03c-.73 0-1.33-.59-1.33-1.33 0-.74.59-1.33 1.33-1.33h.52l-.51-1.79c-.11-.34-.08-.69.08-1.01.16-.32.44-.55.77-.66a1.32 1.32 0 0 1 1.66.86l1.95 6.05 1.9-5.25c.24-.66.86-1.11 1.55-1.11.7 0 1.32.45 1.54 1.11l1.98 5.22 1.77-5.98c.16-.57.69-.97 1.28-.97.12 0 .24.02.36.05.34.1.62.32.8.63.17.31.22.67.12 1.01l-.5 1.78.76.06c.73 0 1.33.59 1.33 1.33 0 .74-.59 1.33-1.33 1.33h-1.49l-1.33 4.58c-.21.69-.82 1.17-1.53 1.2h-.06.03Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketLineBold)
const Memo = memo(ForwardRef)
export default Memo
