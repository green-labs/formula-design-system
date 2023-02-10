import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketFillGlobal = (
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
        d="M43.88 18.085c-.66-.64-1.54-1-2.46-1H34.2l-9-12c-.58-.76-1.84-.76-2.4 0l-9.02 12h-7.2c-.94 0-1.82.36-2.48 1-.66.66-1.04 1.54-1.04 2.48 0 .32.04.64.14.94l4.04 17.98a5.55 5.55 0 0 0 1.98 2.9 5.5 5.5 0 0 0 3.3 1.1h22.94c1.2 0 2.36-.4 3.32-1.1.94-.7 1.66-1.74 2.02-2.96l4.04-17.96s.02-.1.04-.18l.06-.54v-.18c0-.94-.38-1.82-1.04-2.46l-.02-.02ZM24 8.465l6.46 8.6H17.54l6.46-8.6Zm-7.18 27.3c-.8.2-1.62-.3-1.8-1.12l-2-8.4c-.2-.8.3-1.62 1.12-1.8.8-.2 1.62.3 1.8 1.12l2 8.4c.2.8-.3 1.62-1.12 1.8Zm8.68-1.46c0 .82-.68 1.5-1.5 1.5s-1.5-.68-1.5-1.5v-8.4c0-.82.68-1.5 1.5-1.5s1.5.68 1.5 1.5v8.4Zm9.48-8.06-2 8.4c-.2.8-1 1.3-1.8 1.12-.8-.2-1.3-1-1.12-1.8l2-8.4c.2-.8 1-1.3 1.8-1.12.8.2 1.3 1 1.12 1.8Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketFillGlobal)
const Memo = memo(ForwardRef)
export default Memo
