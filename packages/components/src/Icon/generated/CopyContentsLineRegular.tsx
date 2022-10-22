import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCopyContentsLineRegular = (
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
            d="M36.11 9.995h-1.65c.02-.11.04-.22.04-.34 0-1.75-.62-3.4-1.74-4.65-1.15-1.27-2.74-2.01-4.39-2.01H12.28c-1.81 0-3.58.82-4.84 2.23-1.25 1.39-1.94 3.23-1.94 5.18v19.93c0 1.75.62 3.4 1.74 4.65 1.14 1.28 2.74 2.01 4.39 2.02h.87v1.07c0 3.82 2.87 6.93 6.39 6.93h17.22c3.52 0 6.39-3.11 6.39-6.93v-21.15c0-3.82-2.87-6.93-6.39-6.93Zm-23.61 6.93v17.07h-.87c-.8 0-1.57-.36-2.16-1.02-.62-.69-.97-1.66-.98-2.65v-19.92c0-1.19.43-2.35 1.17-3.17.71-.79 1.64-1.23 2.62-1.24h16.09c.8 0 1.57.36 2.16 1.02.62.69.97 1.66.98 2.65 0 .11.02.22.04.33H18.89c-3.52 0-6.39 3.11-6.39 6.93Zm27 21.14c0 2.17-1.52 3.93-3.39 3.93H18.89c-1.87 0-3.39-1.76-3.39-3.93v-21.14c0-2.17 1.52-3.93 3.39-3.93h17.22c1.87 0 3.39 1.76 3.39 3.93v21.14Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgCopyContentsLineRegular)
const Memo = memo(ForwardRef)
export default Memo
