import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgDeleteLineRegular = (
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
            d="M24 4.5C13.25 4.5 4.5 13.25 4.5 24S13.25 43.5 24 43.5 43.5 34.75 43.5 24 34.75 4.5 24 4.5Zm0 36c-9.1 0-16.5-7.4-16.5-16.5S14.9 7.5 24 7.5 40.5 14.9 40.5 24 33.1 40.5 24 40.5Z"
            fill={fill}
          />
          <path
            d="M30.36 17.64a1.49 1.49 0 0 0-2.12 0L24 21.88l-4.24-4.24a1.49 1.49 0 0 0-2.12 0 1.49 1.49 0 0 0 0 2.12L21.88 24l-4.24 4.24a1.49 1.49 0 0 0 0 2.12c.29.29.68.44 1.06.44s.77-.15 1.06-.44L24 26.12l4.24 4.24c.29.29.68.44 1.06.44s.77-.15 1.06-.44c.59-.59.59-1.54 0-2.12L26.12 24l4.24-4.24c.59-.59.59-1.54 0-2.12Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgDeleteLineRegular)
const Memo = memo(ForwardRef)
export default Memo
