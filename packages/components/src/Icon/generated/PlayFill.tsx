import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPlayFill = (
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
            d="M14.469 41.25a3.317 3.317 0 0 1-1.64-.438c-1.126-.637-1.825-1.875-1.825-3.218V10.406c0-1.347.7-2.58 1.824-3.218a3.293 3.293 0 0 1 3.354.042L39.418 21.14a3.375 3.375 0 0 1 0 5.719L16.178 40.77a3.328 3.328 0 0 1-1.71.48Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgPlayFill)
const Memo = memo(ForwardRef)
export default Memo
