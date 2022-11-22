import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMenuLineRegular = (
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
        d="M39.27 13.635H8.73c-.9 0-1.64-.73-1.64-1.64 0-.91.73-1.63 1.64-1.63h30.54a1.641 1.641 0 0 1 0 3.28v-.01ZM39.27 25.635H8.73a1.641 1.641 0 0 1 0-3.28h30.54a1.641 1.641 0 0 1 0 3.28ZM39.27 37.635H8.73a1.641 1.641 0 0 1 0-3.28h30.54a1.641 1.641 0 0 1 0 3.28Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMenuLineRegular)
const Memo = memo(ForwardRef)
export default Memo
