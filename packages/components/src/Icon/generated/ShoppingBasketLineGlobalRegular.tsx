import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketLineGlobalRegular = (
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
        d="M43.91 18.085c-.66-.64-1.54-1-2.48-1h-7.22l-9-12c-.56-.76-1.84-.76-2.4 0l-9 12H6.59c-.94 0-1.82.36-2.48 1-.66.66-1.04 1.54-1.04 2.48 0 .32.04.62.14.94l4.04 17.98a5.388 5.388 0 0 0 1.98 2.88c.96.7 2.12 1.12 3.3 1.12h22.96c1.18 0 2.36-.4 3.32-1.12.94-.7 1.66-1.74 2-2.98l4.04-17.96s.02-.1.02-.16l.06-.54v-.18c0-.94-.38-1.8-1.04-2.46h.02Zm-19.9-9.62 6.46 8.62H17.55l6.46-8.62Zm13.9 30.18c-.16.52-.48.98-.92 1.32-.44.32-.98.5-1.52.5H12.55c-.56 0-1.08-.18-1.52-.5-.44-.32-.76-.8-.88-1.22l-4.04-17.96s-.02-.16-.04-.2c0-.14.04-.26.16-.36.1-.1.22-.14.36-.14h34.86c.12 0 .26.04.36.14.08.08.12.18.14.3l-4.04 18.14v-.02Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.13 24.445c.8-.2 1.62.3 1.8 1.12l2 8.4c.2.8-.3 1.62-1.12 1.8-.8.2-1.62-.3-1.8-1.12l-2-8.4c-.2-.8.3-1.62 1.12-1.8ZM24.01 24.405c.82 0 1.5.68 1.5 1.5v8.4c0 .82-.68 1.5-1.5 1.5s-1.5-.68-1.5-1.5v-8.4c0-.82.68-1.5 1.5-1.5ZM33.87 24.445c-.8-.2-1.62.3-1.8 1.12l-2 8.4c-.2.8.3 1.62 1.12 1.8.8.2 1.62-.3 1.8-1.12l2-8.4c.2-.8-.3-1.62-1.12-1.8Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketLineGlobalRegular)
const Memo = memo(ForwardRef)
export default Memo
