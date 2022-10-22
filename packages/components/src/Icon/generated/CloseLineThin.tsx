import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCloseLineThin = (
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
    <div>
      {
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
            d="M12.35 35.525c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l9.4-9.4 9.4 9.4c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.6-.6.6-1.5 0-2.1l-9.4-9.4 9.4-9.4c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-9.4 9.4-9.4-9.4c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l9.4 9.4-9.4 9.4c-.7.5-.7 1.5-.2 2.1Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgCloseLineThin)
const Memo = memo(ForwardRef)
export default Memo
