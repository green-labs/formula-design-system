import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowLeftupLineBold = (
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
        d="M12.458 33.947a1.696 1.696 0 0 1-.495-1.202V13.653c0-.933.764-1.697 1.704-1.704l19.085.007c.453 0 .884.177 1.202.495.319.318.495.75.495 1.202 0 .934-.763 1.697-1.704 1.704l-14.983-.007 17.783 17.784c.665.665.665 1.74 0 2.404a1.698 1.698 0 0 1-2.404 0L15.357 17.755v14.99c0 .934-.763 1.697-1.704 1.704-.452 0-.884-.176-1.202-.495l.007-.007Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowLeftupLineBold)
const Memo = memo(ForwardRef)
export default Memo
