import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShovelFill = (
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
        d="M42 8.39c-.12-.42-.33-.81-.65-1.22a4.26 4.26 0 0 0-.54-.51c-.36-.28-.76-.49-1.14-.6-1.89-.64-3.86-.97-5.87-.99-7.84 0-13.14 5.3-15.68 7.84-.69.67-1.08 1.61-1.08 2.58 0 .96.4 1.89 1.07 2.56L20 19.93c.04-.08.08-.16.12-.23.2-.38.4-.76.65-1.12.16-.23.34-.46.55-.68.15-.15.31-.28.48-.41.61-.47 1.33-.79 2.11-.94a2.976 2.976 0 0 1 2.65.82l4.07 4.01c.68.67 1.01 1.64.86 2.59-.13.82-.45 1.58-.94 2.23-.14.19-.29.37-.45.53-.2.2-.41.36-.63.51-.4.28-.82.5-1.22.7-.04.02-.09.05-.13.07l1.85 1.84.09.09c.68.66 1.57 1.03 2.52 1.03h.04c.96-.01 1.87-.4 2.53-1.07 2.88-2.88 10.52-10.51 6.84-21.51H42Z"
        fill={fill}
      />
      <path
        d="M29.12 24.76c.2-.34.35-.7.41-1.1a.98.98 0 0 0-.29-.86l-4.07-4.01c-.19-.18-.44-.29-.7-.29-.06 0-.12 0-.19.02-.37.07-.72.21-1.03.41-.19.12-.36.25-.52.4-.19.19-.35.43-.5.69-.1.18-.21.37-.32.59-.13.25-.26.51-.42.79-.38.67-.89 1.43-1.71 2.24-3.76 3.72-10.73 9.94-13.86 12.58-.27.23-.48.5-.63.81-.15.31-.24.64-.26.99-.02.35.04.69.16 1.02.13.33.31.61.55.86l2.25 2.29a2.516 2.516 0 0 0 1.77.74h.1a2.536 2.536 0 0 0 1.81-.88c2.88-3.39 9.1-10.29 12.69-13.83.81-.8 1.58-1.29 2.27-1.66.25-.14.49-.26.72-.37.25-.13.47-.24.67-.36.24-.14.46-.29.65-.47.17-.17.31-.37.43-.57l.02-.03Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShovelFill)
const Memo = memo(ForwardRef)
export default Memo
