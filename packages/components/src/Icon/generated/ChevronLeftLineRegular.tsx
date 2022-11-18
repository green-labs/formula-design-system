import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgChevronLeftLineRegular = (
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
        d="M31.745 39.292c-.46 0-.92-.18-1.27-.53l-13.5-13.5c-.7-.7-.7-1.84 0-2.55l13.5-13.49c.7-.7 1.84-.7 2.54 0s.7 1.84 0 2.55l-12.22 12.22 12.23 12.23c.7.7.7 1.84 0 2.55-.35.35-.81.53-1.27.53l-.01-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgChevronLeftLineRegular)
const Memo = memo(ForwardRef)
export default Memo
