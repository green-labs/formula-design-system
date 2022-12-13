import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPlayLineBold = (
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
        d="M13.358 41.446c-.58 0-1.17-.15-1.71-.45-1.21-.68-1.97-1.99-1.97-3.42v-27.2c0-1.46.77-2.77 2.02-3.42 1.13-.6 2.43-.52 3.49.19l23.16 13.88c.97.53 1.61 1.6 1.65 2.84.04 1.28-.57 2.49-1.61 3.15l-23.24 13.92a3.4 3.4 0 0 1-1.79.51Zm-.06-31.47c-.07 0-.22.13-.22.4v27.21c0 .32.22.47.28.47l23.25-13.93v-.19l-23.3-13.96h-.01Zm23.35 13.99h.02-.02Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPlayLineBold)
const Memo = memo(ForwardRef)
export default Memo
