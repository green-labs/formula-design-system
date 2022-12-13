import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowDownLineThin = (
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
        d="M24 39.825c-.32 0-.62-.12-.85-.35l-13.5-13.5a1.201 1.201 0 1 1 1.7-1.7l11.45 11.45V9.375c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v26.35l11.45-11.45c.23-.23.53-.35.85-.35a1.201 1.201 0 0 1 .85 2.05l-13.5 13.5c-.23.23-.53.35-.85.35Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowDownLineThin)
const Memo = memo(ForwardRef)
export default Memo
