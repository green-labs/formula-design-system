import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMenuLineBold = (
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
        d="M8.75 13.835c-1.01 0-1.84-.82-1.84-1.84s.82-1.83 1.84-1.83h30.5c1.01 0 1.84.82 1.84 1.84s-.82 1.84-1.84 1.84H8.75v-.01ZM8.75 25.835c-1.01 0-1.84-.82-1.84-1.84s.82-1.84 1.84-1.84h30.5c1.01 0 1.84.82 1.84 1.84s-.82 1.84-1.84 1.84H8.75ZM8.75 37.835c-1.01 0-1.84-.82-1.84-1.84s.82-1.84 1.84-1.84h30.5c1.01 0 1.84.82 1.84 1.84s-.82 1.84-1.84 1.84H8.75Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMenuLineBold)
const Memo = memo(ForwardRef)
export default Memo
