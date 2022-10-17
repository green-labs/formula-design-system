import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgChevronRightLineBold = (
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
        d="M16.25 39.5c-.5 0-1-.2-1.4-.6-.8-.8-.8-2 0-2.8L26.95 24l-12.1-12.1c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l13.5 13.5c.8.8.8 2 0 2.8l-13.5 13.5c-.4.4-.9.6-1.4.6Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgChevronRightLineBold)
const Memo = memo(ForwardRef)
export default Memo
