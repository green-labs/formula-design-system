import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPlayLineThin = (
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
            d="M13.444 40.847c.5.3 1.1.4 1.6.4.6 0 1.2-.2 1.7-.5l23.2-13.9c1-.6 1.6-1.8 1.5-3 0-1.2-.6-2.2-1.6-2.7l-23.1-13.8c-1-.7-2.3-.8-3.3-.2-1.2.6-1.9 1.9-1.9 3.3v27.2c0 1.4.7 2.6 1.9 3.2Zm1-30.4h.1c0-.3.2-.5.3-.6h.1c.067 0 .134.033.2.1l23.2 13.9s.1.1 0 .3c0 .1 0 .2-.1.2l-23.2 13.9c-.1 0-.1.1-.3 0-.2-.1-.3-.3-.3-.6v-27.2Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgPlayLineThin)
const Memo = memo(ForwardRef)
export default Memo
