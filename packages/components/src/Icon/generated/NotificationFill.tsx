import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgNotificationFill = (
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
        d="m41.76 31.706.242.292a3.297 3.297 0 0 1 .432 3.53c-.58 1.214-1.805 1.97-3.206 1.97H10.27c-1.407 0-2.64-.757-3.218-1.976a3.296 3.296 0 0 1 .436-3.527 66.564 66.564 0 0 1 .458-.556c2.064-2.492 3.31-3.997 3.31-11.062 0-6.413 2.57-10.588 7.855-12.764a.293.293 0 0 0 .076-.06C20 4.827 22.23 3 24.744 3c2.515 0 4.744 1.827 5.559 4.555a.28.28 0 0 0 .076.063c2.265.932 3.984 2.193 5.255 3.855 1.724 2.25 2.599 5.25 2.599 8.906 0 7.059 1.246 8.567 3.307 11.059l.003.004.218.264ZM28.59 43.436a7.505 7.505 0 0 1-3.846 1.064 7.507 7.507 0 0 1-6.603-3.95.374.374 0 0 1 .333-.55h12.542a.374.374 0 0 1 .332.55 7.506 7.506 0 0 1-2.757 2.886Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgNotificationFill)
const Memo = memo(ForwardRef)
export default Memo
