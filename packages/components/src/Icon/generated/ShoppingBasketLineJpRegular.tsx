import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketLineJpRegular = (
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
        d="M43.895 18.105a3.504 3.504 0 0 0-2.47-1.01h-7.22l-9-12.01c-.57-.76-1.83-.76-2.4 0l-9.01 12h-7.22c-.93 0-1.81.36-2.47 1.01-.66.66-1.04 1.54-1.04 2.47 0 .32.04.63.13.94l4.05 17.98a5.468 5.468 0 0 0 1.98 2.89c.95.71 2.12 1.11 3.3 1.11h22.95c1.19 0 2.37-.39 3.32-1.11.95-.71 1.66-1.74 2.01-2.97l4.04-17.96c.01-.05.02-.11.03-.17l.06-.54v-.18c0-.93-.38-1.81-1.04-2.46v.01Zm-19.89-9.62 6.46 8.61h-12.92l6.46-8.61Zm13.9 30.18a2.537 2.537 0 0 1-2.43 1.83h-22.94c-.57 0-1.08-.18-1.51-.5-.43-.32-.75-.79-.88-1.23l-4.04-17.97s-.03-.16-.04-.2a.515.515 0 0 1 .51-.51h34.86c.13 0 .26.05.36.15.08.08.13.18.15.3l-4.04 18.13Z"
        fill={fill}
      />
      <path
        d="M28.593 32.2H25.42v-.95h3.173c.673 0 1.224-.549 1.224-1.22 0-.672-.55-1.221-1.224-1.221h-2.718l3.242-3.07c.525-.497.551-1.325.053-1.848a1.322 1.322 0 0 0-1.853-.052l-3.278 3.104-3.618-2.956a1.317 1.317 0 0 0-1.845.183 1.301 1.301 0 0 0 .184 1.84l3.426 2.799h-2.78c-.672 0-1.223.55-1.223 1.22 0 .672.55 1.221 1.224 1.221h3.391v.95h-3.391c-.673 0-1.224.55-1.224 1.222 0 .671.55 1.22 1.224 1.22h3.391v1.535c0 .724.586 1.308 1.311 1.308.726 0 1.311-.584 1.311-1.308v-1.535h3.173c.673 0 1.224-.549 1.224-1.22 0-.672-.55-1.221-1.224-1.221Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketLineJpRegular)
const Memo = memo(ForwardRef)
export default Memo
