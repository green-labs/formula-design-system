import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgClockLineBold = (
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
        d="M24 4.3C13.1 4.3 4.3 13.1 4.3 24c0 10.9 8.8 19.7 19.7 19.7 10.9 0 19.7-8.8 19.7-19.7 0-10.9-8.8-19.7-19.7-19.7Zm0 36C15 40.3 7.7 33 7.7 24S15 7.7 24 7.7 40.3 15 40.3 24 33 40.3 24 40.3Z"
        fill={fill}
      />
      <path
        d="M25.8 23.6V14c0-1-.8-1.9-1.8-1.9s-1.8.8-1.8 1.9v10.4c0 .5.2 1 .5 1.3l6.5 6.5c.4.4.8.5 1.3.5s.9-.2 1.3-.5c.7-.7.7-1.9 0-2.6l-6-6Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgClockLineBold)
const Memo = memo(ForwardRef)
export default Memo
