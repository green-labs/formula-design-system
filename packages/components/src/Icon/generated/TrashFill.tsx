import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgTrashFill = (
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
        d="M39.5 9h-8V6.75A3.75 3.75 0 0 0 27.75 3h-7.5a3.75 3.75 0 0 0-3.75 3.75V9h-8a1.5 1.5 0 0 0 0 3h.594l1.781 26.586c.133 2.517 2.063 4.414 4.5 4.414h17.25c2.45 0 4.34-1.854 4.5-4.406L38.906 12h.594a1.5 1.5 0 1 0 0-3ZM19.053 36H19a1.5 1.5 0 0 1-1.5-1.447l-.75-18a1.5 1.5 0 0 1 3-.106l.75 18A1.5 1.5 0 0 1 19.053 36ZM28.5 9h-9V6.75a.742.742 0 0 1 .75-.75h7.5a.741.741 0 0 1 .75.75V9Zm2 25.553A1.5 1.5 0 0 1 29 36h-.054a1.501 1.501 0 0 1-1.446-1.553l.75-18a1.502 1.502 0 0 1 3 .106l-.75 18Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgTrashFill)
const Memo = memo(ForwardRef)
export default Memo
