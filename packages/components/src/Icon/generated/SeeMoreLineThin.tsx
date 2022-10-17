import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgSeeMoreLineThin = (
  {
    size = "XL",
    sizePx,
    style,
    className,
    color,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
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
      role="img"
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 15c1.6 0 3-1.4 3-3s-1.4-3-3-3-3 1.4-3 3 1.4 3 3 3Zm0-4.8c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8ZM24 21c-1.6 0-3 1.4-3 3s1.4 3 3 3 3-1.4 3-3-1.4-3-3-3Zm0 4.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8ZM21 36c0-1.6 1.4-3 3-3s3 1.4 3 3-1.4 3-3 3-3-1.4-3-3Zm1.2 0c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8-1.8.8-1.8 1.8Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgSeeMoreLineThin)
const Memo = memo(ForwardRef)
export default Memo
