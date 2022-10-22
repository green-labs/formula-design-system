import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPlayLineRegular = (
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
            d="M16.8 10.96c.2 0 .38.06.58.16L38.7 22.96c.54.3.62.78.62 1.04s-.08.76-.62 1.04L17.38 36.88c-.2.1-.38.16-.58.16-.48 0-1.2-.38-1.2-1.2V12.16c0-.82.72-1.2 1.2-1.2Zm0-3.6c-2.52 0-4.8 2.02-4.8 4.8v23.68c0 2.8 2.3 4.8 4.8 4.8.78 0 1.58-.2 2.32-.62l21.32-11.84c3.3-1.82 3.3-6.56 0-8.4L19.14 7.96c-.76-.42-1.56-.62-2.32-.62l-.02.02Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgPlayLineRegular)
const Memo = memo(ForwardRef)
export default Memo
