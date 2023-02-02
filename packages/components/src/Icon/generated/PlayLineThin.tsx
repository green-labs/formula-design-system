import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPlayLineThin = (
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
        d="M13.848 40.944c-.5 0-1-.13-1.47-.39-1.06-.59-1.71-1.73-1.71-2.98v-27.2c0-1.27.67-2.42 1.75-2.98.98-.51 2.11-.44 3.03.2l23.14 13.85c.83.45 1.37 1.37 1.41 2.43.04 1.11-.49 2.14-1.38 2.71l-23.23 13.92c-.47.29-1 .44-1.54.44Zm-.09-31.49c-.08 0-.15.02-.23.06-.21.11-.47.4-.47.86v27.2c0 .45.26.76.48.88.2.11.4.11.59 0l23.21-13.91c.18-.12.25-.39.24-.59 0-.16-.06-.35-.2-.43l-23.23-13.92c-.15-.1-.28-.15-.39-.15Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPlayLineThin)
const Memo = memo(ForwardRef)
export default Memo
