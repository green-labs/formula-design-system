import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgEyeSlashFill = (
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
            d="M7.503 42a1.49 1.49 0 0 0 1.06-.44l33-33a1.5 1.5 0 0 0-2.12-2.12l-33 33A1.5 1.5 0 0 0 7.503 42ZM24.753 29.611l4.856-4.855a.187.187 0 0 1 .318.158 6.01 6.01 0 0 1-5.015 5.015.187.187 0 0 1-.159-.318ZM2.972 25.628a3.019 3.019 0 0 1 .01-3.26c2.48-3.835 4.698-7.094 8.306-9.424C15.284 10.364 19.69 9 24.033 9c2.29.003 4.563.376 6.733 1.105a.374.374 0 0 1 .147.622l-4.43 4.429a.375.375 0 0 1-.357.098A8.999 8.999 0 0 0 15.25 26.13a.376.376 0 0 1-.099.357l-6.37 6.375a.375.375 0 0 1-.506.023c-2.453-2.09-3.577-4.536-5.304-7.256Z"
            fill={fill}
          />
          <path
            d="M24.004 33a8.999 8.999 0 0 0 8.747-11.122.374.374 0 0 1 .098-.357l6.266-6.269a.374.374 0 0 1 .507-.021c2.287 1.95 3.407 4.324 5.344 7.098a2.992 2.992 0 0 1 .06 3.332c-2.476 3.875-4.661 7.138-8.213 9.436C32.81 37.687 28.51 39 24.033 39a22.333 22.333 0 0 1-6.81-1.083.376.376 0 0 1-.15-.622l4.45-4.45a.375.375 0 0 1 .357-.098 8.998 8.998 0 0 0 2.124.253ZM19.889 19.89a5.5 5.5 0 0 0 0 7.777l7.778-7.778a5.5 5.5 0 0 0-7.778 0Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgEyeSlashFill)
const Memo = memo(ForwardRef)
export default Memo
