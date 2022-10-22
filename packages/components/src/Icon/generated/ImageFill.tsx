import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgImageFill = (
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
            d="M39.744 6h-30c-1.59 0-3.12.63-4.24 1.76A6.03 6.03 0 0 0 3.744 12v24c0 1.59.63 3.12 1.76 4.24A6.03 6.03 0 0 0 9.744 42h30c1.59 0 3.12-.63 4.24-1.76a6.03 6.03 0 0 0 1.76-4.24V12c0-1.59-.63-3.12-1.76-4.24A6.03 6.03 0 0 0 39.744 6Zm-7.5 6c.89 0 1.76.26 2.5.76.74.49 1.32 1.2 1.66 2.02.34.82.43 1.73.26 2.6-.17.87-.6 1.67-1.23 2.3-.63.63-1.43 1.06-2.3 1.23-.87.17-1.78.08-2.6-.26-.82-.34-1.53-.92-2.02-1.66-.49-.74-.76-1.61-.76-2.5 0-1.19.48-2.34 1.32-3.18.84-.84 1.99-1.32 3.18-1.32l-.01.01Zm-22.5 27c-.8 0-1.56-.32-2.12-.88s-.88-1.32-.88-2.12v-5.34l8.5-8.73c1-.93 2.36-1.34 3.51-1.31 1.15.03 2.24.5 3.05 1.31l6.09 6.08L16.904 39h-7.16Zm33-3c0 .8-.32 1.56-.88 2.12s-1.32.88-2.12.88h-18.6l11.38-11.38c.81-.69 1.83-1.06 2.89-1.07 1.06 0 2.08.37 2.89 1.05l4.43 3.7V36h.01Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgImageFill)
const Memo = memo(ForwardRef)
export default Memo
