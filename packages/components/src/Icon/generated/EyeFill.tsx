import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgEyeFill = (
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
            d="M24 30c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6Z"
            fill={fill}
          />
          <path
            d="M45.02 22.37c-2.48-3.84-4.7-7.1-8.31-9.43C32.72 10.36 28.31 9 23.97 9c-3.99 0-7.91 1.14-11.65 3.39-3.82 2.29-6.28 5.63-9.28 9.94-.34.49-.53 1.06-.54 1.66-.01.59.15 1.18.48 1.67 2.48 3.88 4.66 7.14 8.21 9.44 4 2.59 8.3 3.9 12.78 3.9 4.48 0 8.79-1.35 12.77-3.91 3.61-2.32 5.82-5.59 8.29-9.46a3.032 3.032 0 0 0-.01-3.26ZM24 33c-1.78 0-3.52-.53-5-1.52a9.047 9.047 0 0 1-3.32-4.04 8.98 8.98 0 0 1-.51-5.2 9 9 0 0 1 2.46-4.61 8.927 8.927 0 0 1 4.61-2.46A8.983 8.983 0 0 1 31.48 19a8.984 8.984 0 0 1-1.12 11.36A9.001 9.001 0 0 1 24 33Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgEyeFill)
const Memo = memo(ForwardRef)
export default Memo
