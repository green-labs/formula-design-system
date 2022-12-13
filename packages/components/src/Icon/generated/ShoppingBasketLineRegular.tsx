import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketLineRegular = (
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
        d="M43.895 17.605a3.504 3.504 0 0 0-2.47-1.01h-7.22l-9-12.01c-.57-.76-1.83-.76-2.4 0l-9.01 12h-7.22c-.93 0-1.81.36-2.47 1.01-.66.66-1.04 1.54-1.04 2.47 0 .32.04.63.13.94l4.05 17.98a5.468 5.468 0 0 0 1.98 2.89c.95.71 2.12 1.11 3.3 1.11h22.95c1.19 0 2.37-.39 3.32-1.11.95-.71 1.66-1.74 2.01-2.97l4.04-17.96c.01-.05.02-.11.03-.17l.06-.54v-.18c0-.93-.38-1.81-1.04-2.46v.01Zm-19.89-9.62 6.46 8.61h-12.92l6.46-8.61Zm13.9 30.18a2.537 2.537 0 0 1-2.43 1.83h-22.94c-.57 0-1.08-.18-1.51-.5-.43-.32-.75-.79-.88-1.23l-4.04-17.97s-.03-.16-.04-.2a.515.515 0 0 1 .51-.51h34.86c.13 0 .26.05.36.15.08.08.13.18.15.3l-4.04 18.13Z"
        fill={fill}
      />
      <path
        d="M32.025 27.255h-.92l.55-1.97c.18-.65-.2-1.33-.85-1.51-.65-.18-1.33.2-1.51.85l-1.8 6.41-2.14-5.65a1.54 1.54 0 0 0-1.44-1.04c-.65 0-1.23.41-1.46 1.04l-1.96 5.68-2.09-6.48c-.21-.64-.9-1-1.54-.79-.64.21-1 .9-.79 1.54l.62 1.92h-.72c-.68 0-1.23.55-1.23 1.22 0 .67.55 1.22 1.23 1.22h1.51l1.51 4.7c.2.64.78 1.07 1.45 1.08.66 0 1.27-.42 1.47-1.04l2.02-5.87 2.24 5.92c.23.6.8 1 1.44 1h.05c.66-.02 1.24-.47 1.44-1.13l1.31-4.66h1.6c.68 0 1.22-.55 1.22-1.22 0-.67-.55-1.22-1.22-1.22h.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketLineRegular)
const Memo = memo(ForwardRef)
export default Memo
