import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCloseLineThin = (
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
        d="M12.43 37.07c-.4 0-.78-.15-1.06-.43-.58-.59-.58-1.55 0-2.13L21.87 24 11.38 13.5c-.58-.59-.58-1.54 0-2.12.29-.29.66-.44 1.06-.44s.77.16 1.06.44L24 21.87l10.5-10.5c.28-.28.66-.44 1.05-.44s.78.16 1.06.44c.58.59.58 1.55 0 2.13L26.12 24l10.49 10.5c.29.28.44.65.44 1.05s-.16.78-.44 1.06c-.29.29-.66.45-1.06.45s-.77-.16-1.05-.44L24 26.13l-10.5 10.5c-.29.28-.67.44-1.07.44Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCloseLineThin)
const Memo = memo(ForwardRef)
export default Memo
