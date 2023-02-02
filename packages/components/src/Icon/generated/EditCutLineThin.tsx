import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgEditCutLineThin = (
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
        d="M19.5 14.7H30c.87 0 1.77.36 2.3.9.45.51 1 1.34 1 2.4v10.5c0 .66.54 1.2 1.2 1.2.66 0 1.2-.54 1.2-1.2V18c0-1.43-.55-2.82-1.65-4.05-1.03-1.03-2.55-1.65-4.05-1.65H19.5c-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2Z"
        fill={fill}
      />
      <path
        d="M4.5 14.7h7.8V30c0 1.43.55 2.82 1.65 4.05 1.03 1.03 2.55 1.65 4.05 1.65h15.3v7.8c0 .66.54 1.2 1.2 1.2.66 0 1.2-.54 1.2-1.2v-7.8h7.8c.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2H18c-.87 0-1.77-.36-2.3-.9-.45-.51-1-1.34-1-2.4V4.5c0-.66-.54-1.2-1.2-1.2-.66 0-1.2.54-1.2 1.2v7.8H4.5c-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgEditCutLineThin)
const Memo = memo(ForwardRef)
export default Memo
