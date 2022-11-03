import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMenuFill = (
  {
    size = "xl",
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M8.75 14.45c-1.35 0-2.45-1.1-2.45-2.45s1.1-2.45 2.45-2.45h30.5c1.35 0 2.45 1.1 2.45 2.45s-1.1 2.45-2.45 2.45H8.75ZM8.75 26.45c-1.35 0-2.45-1.1-2.45-2.45s1.1-2.45 2.45-2.45h30.5c1.35 0 2.45 1.1 2.45 2.45s-1.1 2.45-2.45 2.45H8.75ZM8.75 38.45c-1.35 0-2.45-1.1-2.45-2.45s1.1-2.45 2.45-2.45h30.5c1.35 0 2.45 1.1 2.45 2.45s-1.1 2.45-2.45 2.45H8.75Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMenuFill)
const Memo = memo(ForwardRef)
export default Memo
