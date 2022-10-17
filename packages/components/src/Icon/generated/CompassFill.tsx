import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCompassFill = (
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
        d="M24 4.5C13.25 4.5 4.5 13.25 4.5 24S13.25 43.5 24 43.5 43.5 34.75 43.5 24 34.75 4.5 24 4.5Zm10.7 9.8-5.1 11.8c-.3.7-.7 1.4-1.3 2-.5.5-1.2 1-2 1.3l-11.8 5.1h-.4c-.2 0-.3-.1-.4-.2-.1-.1-.2-.2-.2-.4-.1-.1-.1-.3 0-.4l5.1-11.8c.3-.7.7-1.4 1.3-2 .5-.5 1.2-1 2-1.3l11.8-5.1h.4c.2 0 .3.1.4.2.1.1.2.2.2.4.1.1.1.3 0 .4Z"
        fill={fill}
      />
      <path d="M24 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill={fill} />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCompassFill)
const Memo = memo(ForwardRef)
export default Memo
