import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgTrashLineBold = (
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
            d="M39.5 8.86h-7.7v-2.1c0-.58-.17-1.07-.29-1.44-.23-.67-.65-1.1-.92-1.37-.25-.25-.68-.68-1.36-.91-.36-.12-.86-.29-1.44-.29h-7.5c-.54 0-1.2.15-1.66.38-.31.16-.77.45-1.14.82-.26.26-.68.68-.91 1.36-.12.36-.29.86-.29 1.44v2.1H8.5c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h.41l1.79 26.4c.16 2.67 2.13 4.6 4.7 4.6h17.2c2.57 0 4.54-1.93 4.7-4.58l1.79-26.42h.41c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7v.01ZM19.7 6.78c0-.05.05-.19.09-.3.04-.04.08-.08.11-.12.05-.05.19-.15.21-.16.05-.02.15-.04.19-.04h7.48c.05 0 .19.05.3.08l.12.12.12.12c.04.12.08.24.08.28v2.1h-8.7V6.78Zm14.2 31.68c-.04.65-.4 1.4-1.3 1.4H15.4c-.9 0-1.27-.75-1.3-1.42l-1.78-26.18h23.36l-1.78 26.2Z"
            fill={fill}
          />
          <path
            d="M18.9 15.36c-.94.06-1.65.86-1.6 1.8l1 17c.05.9.8 1.6 1.7 1.6h.1c.94-.06 1.65-.86 1.6-1.8l-1-17c-.06-.94-.87-1.64-1.8-1.6ZM27.3 16.96l-1 17c-.06.94.66 1.74 1.6 1.8h.1c.89 0 1.64-.7 1.7-1.6l1-17c.05-.94-.66-1.74-1.6-1.8-.92-.07-1.74.66-1.8 1.6Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgTrashLineBold)
const Memo = memo(ForwardRef)
export default Memo
