import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketLineJpThin = (
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
        d="M12.535 43.195a5.33 5.33 0 0 1-3.13-1.05 5.201 5.201 0 0 1-1.88-2.74l-4.05-17.97a3.189 3.189 0 0 1 .84-3.15c.61-.6 1.41-.93 2.27-.93h7.36l9.09-12.1c.21-.29.58-.46.97-.46s.76.17.97.46l9.08 12.12h7.36c.86 0 1.66.33 2.27.93l.15.15c.52.58.81 1.32.81 2.1v.18l-.06.51-.02.14-4.04 17.96c-.33 1.14-.99 2.12-1.9 2.81-.9.68-2.01 1.05-3.15 1.05h-22.94v-.01Zm-5.95-23.4a.787.787 0 0 0-.79.79c.02.11.04.25.04.25l4.04 17.98c.16.54.52 1.05.99 1.39.5.37 1.06.56 1.68.56h22.94a2.821 2.821 0 0 0 2.7-2.04l4.06-18.2v-.05a.825.825 0 0 0-.24-.45.787.787 0 0 0-.56-.23H6.585Zm10.4-2.42h14.05l-7.02-9.37-7.03 9.37Z"
        fill={fill}
      />
      <path
        d="M24.115 37.195c-.57 0-1.03-.46-1.03-1.03v-1.82h-3.67a.939.939 0 1 1 0-1.88h3.67v-1.52h-3.67a.939.939 0 1 1 0-1.88h3.57l-4.04-3.3a.992.992 0 0 1-.37-.69.98.98 0 0 1 .23-.75c.2-.24.48-.37.79-.37.24 0 .47.08.65.23l3.81 3.11 3.46-3.28c.19-.18.44-.28.71-.28.29 0 .55.11.75.32.19.2.29.45.28.73 0 .27-.12.53-.32.72l-3.76 3.56h3.43a.939.939 0 1 1 0 1.88h-3.46v1.52h3.46a.939.939 0 1 1 0 1.88h-3.46v1.82c0 .57-.46 1.03-1.03 1.03Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketLineJpThin)
const Memo = memo(ForwardRef)
export default Memo
