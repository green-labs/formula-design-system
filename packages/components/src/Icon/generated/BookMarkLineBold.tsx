import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgBookMarkLineBold = (
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
        d="M36.31 6.09a5.714 5.714 0 0 0-3.96-1.64h-16.7c-1.61 0-3.08.62-3.96 1.64a5.493 5.493 0 0 0-1.64 3.96v32a1.503 1.503 0 0 0 2.5 1.12L24 32.98l11.45 10.19a1.504 1.504 0 0 0 1.61.25c.54-.24.89-.78.89-1.37v-32c0-1.61-.62-3.08-1.64-3.96Zm-1.36 32.62-9.3-8.28s-.06-.05-.1-.08c-.93-.7-2.17-.69-3.1 0-.03.03-.07.05-.1.08l-9.3 8.28V10.05c0-.72.26-1.33.83-1.91.38-.43 1.04-.69 1.77-.69h16.7c.65 0 1.38.31 1.91.83.43.38.69 1.04.69 1.77v28.66Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgBookMarkLineBold)
const Memo = memo(ForwardRef)
export default Memo
