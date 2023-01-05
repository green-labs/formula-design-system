import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketLineGlobalBold = (
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
        d="M12.52 43.77c-1.23 0-2.46-.41-3.47-1.17a5.663 5.663 0 0 1-2.08-3.04l-4.05-18c-.09-.31-.14-.64-.14-1 0-1 .4-1.95 1.12-2.67.72-.71 1.66-1.09 2.67-1.09h7.08l8.93-11.89c.32-.43.85-.68 1.43-.68s1.11.26 1.43.68l8.91 11.9h7.08c.79 0 1.55.24 2.19.69v-.07l.48.46c.72.71 1.12 1.66 1.12 2.66v.18l-.06.57-.03.19-4.04 17.97c-.37 1.29-1.1 2.37-2.12 3.13-.99.75-2.23 1.17-3.49 1.17H12.52v.01ZM6.35 20.59l.03.15 4.04 17.96c.11.38.41.79.77 1.06.4.29.85.44 1.34.44h22.94c.49 0 .97-.16 1.35-.45.39-.29.68-.71.81-1.17l4.02-18.05s-.03-.07-.06-.1a.236.236 0 0 0-.16-.07H6.57c-.06 0-.12.03-.16.07-.04.04-.07.1-.07.16h.01Zm23.55-3.78-5.89-7.85-5.89 7.85H29.9Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.47 36.1c-.83 0-1.54-.56-1.73-1.37l-2-8.4a1.79 1.79 0 0 1 1.74-2.2c.83 0 1.54.56 1.73 1.37l2 8.4a1.79 1.79 0 0 1-1.74 2.2ZM24 36.1c-.98 0-1.78-.8-1.78-1.78v-8.4c0-.98.8-1.78 1.78-1.78s1.78.8 1.78 1.78v8.4c0 .98-.8 1.78-1.78 1.78ZM31.53 36.1c-.14 0-.28-.02-.42-.05-.46-.11-.86-.39-1.11-.8-.25-.41-.33-.88-.22-1.35l2-8.4c.19-.81.9-1.37 1.73-1.37.14 0 .28.02.42.05.46.11.86.39 1.11.8.25.41.33.88.22 1.35l-2 8.4c-.19.81-.9 1.37-1.73 1.37Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketLineGlobalBold)
const Memo = memo(ForwardRef)
export default Memo
