import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketLineUsRegular = (
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
        d="M43.895 18.105a3.504 3.504 0 0 0-2.47-1.01h-7.22l-9-12.01c-.57-.76-1.83-.76-2.4 0l-9.01 12h-7.22c-.93 0-1.81.36-2.47 1.01-.66.66-1.04 1.54-1.04 2.47 0 .32.04.63.13.94l4.05 17.98a5.468 5.468 0 0 0 1.98 2.89c.95.71 2.12 1.11 3.3 1.11h22.95c1.19 0 2.37-.39 3.32-1.11.95-.71 1.66-1.74 2.01-2.97l4.04-17.96c.01-.05.02-.11.03-.17l.06-.54v-.18c0-.93-.38-1.81-1.04-2.46v.01Zm-19.89-9.62 6.46 8.61h-12.92l6.46-8.61Zm13.9 30.18a2.537 2.537 0 0 1-2.43 1.83h-22.94c-.57 0-1.08-.18-1.51-.5-.43-.32-.75-.79-.88-1.23l-4.04-17.97s-.03-.16-.04-.2a.515.515 0 0 1 .51-.51h34.86c.13 0 .26.05.36.15.08.08.13.18.15.3l-4.04 18.13Z"
        fill={fill}
      />
      <path
        d="M29.086 32.343c0-1.76-1.095-2.845-3.35-3.33l-1.881-.39c-.833-.163-1.263-.505-1.263-1.028 0-.552.533-.885 1.366-.885.72 0 1.422.218 2.115.77.58.429 1.029.704 1.544.704.71 0 1.235-.504 1.235-1.18 0-.675-.384-1.265-1.048-1.75-.599-.438-1.45-.733-2.414-.885v-.457c0-.79-.627-1.427-1.404-1.427-.777 0-1.404.637-1.404 1.427v.476c-2.012.41-3.256 1.637-3.256 3.444 0 1.704 1.207 2.874 3.471 3.35l1.75.361c.87.172 1.254.524 1.254 1.104 0 .619-.561.952-1.516.952-.954 0-1.787-.305-2.676-1.066-.57-.466-.945-.647-1.432-.647-.758 0-1.263.495-1.263 1.208 0 .524.262 1.056.674 1.466.636.704 1.73 1.218 3.004 1.446v.552c0 .79.627 1.427 1.403 1.427.777 0 1.404-.638 1.404-1.427v-.524c2.302-.352 3.687-1.684 3.687-3.691Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketLineUsRegular)
const Memo = memo(ForwardRef)
export default Memo
