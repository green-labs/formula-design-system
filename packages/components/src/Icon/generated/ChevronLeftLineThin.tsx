import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgChevronLeftLineThin = (
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
        d="M31.8 38.975c-.4 0-.8-.1-1.1-.4l-13.5-13.5c-.6-.6-.6-1.5 0-2.1l13.5-13.5c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-12.4 12.4 12.4 12.4c.6.6.6 1.5 0 2.1-.2.4-.6.5-1 .5Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgChevronLeftLineThin)
const Memo = memo(ForwardRef)
export default Memo
