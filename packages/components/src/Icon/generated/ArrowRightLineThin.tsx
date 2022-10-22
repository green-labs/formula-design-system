import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowRightLineThin = (
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
            d="M25.125 38.7c-.32 0-.62-.12-.85-.35-.23-.23-.35-.53-.35-.85 0-.32.12-.62.35-.85l11.45-11.45H9.375c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2h26.35l-11.45-11.45c-.23-.23-.35-.53-.35-.85 0-.32.12-.62.35-.85.23-.23.53-.35.85-.35.32 0 .62.12.85.35l13.5 13.5c.23.23.35.53.35.85 0 .32-.12.62-.35.85l-13.5 13.5c-.23.23-.53.35-.85.35Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgArrowRightLineThin)
const Memo = memo(ForwardRef)
export default Memo
