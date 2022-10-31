import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgSearchLineThin = (
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
        d="M10.313 32c2.4 2.2 5.1 3.7 8 4.3 1 .2 2.1.3 3.2.3 2 0 4.1-.4 6-1.2 1.3-.5 2.4-1.2 3.5-2.1l9.3 9.4c.3.3.6.4.9.4.3 0 .7-.1.9-.4.5-.5.5-1.4 0-1.9l-9.2-9.3c.6-.6 1.1-1.2 1.6-1.9 1.7-2.6 2.6-5.6 2.6-8.8 0-4.2-1.6-8.2-4.6-11.3-3.1-2.9-7-4.6-11.2-4.6-3 0-6.1.9-8.8 2.6-2.5 1.7-4.5 4.1-5.8 7.1-1.2 3-1.5 6.2-.9 9.2.8 3.3 2.3 6.1 4.5 8.2Zm-1.1-16.3c1-2.5 2.7-4.5 4.8-5.9 2.3-1.4 4.9-2.2 7.4-2.2 3.5 0 6.8 1.4 9.3 3.8 2.5 2.6 3.8 5.9 3.8 9.4 0 2.7-.8 5.2-2.2 7.3-1.5 2.1-3.6 3.8-5.9 4.8-2.5 1-5.1 1.3-7.6.7-2.5-.5-4.8-1.8-6.8-3.7-1.8-1.7-3-4-3.6-6.7-.4-2.4-.2-5 .8-7.5Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgSearchLineThin)
const Memo = memo(ForwardRef)
export default Memo
