import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCartLineRegular = (
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
            d="M16.5 43.2a4.2 4.2 0 1 1 0-8.399 4.2 4.2 0 0 1 0 8.4Zm0-5.7c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S18 39.83 18 39s-.67-1.5-1.5-1.5ZM36.5 43.2a4.2 4.2 0 1 1 0-8.399 4.2 4.2 0 0 1 0 8.4Zm0-5.7c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S38 39.83 38 39s-.67-1.5-1.5-1.5ZM38.81 27.99c.4-.33.68-.79.78-1.3l2.7-13.5c.07-.32.06-.67-.02-.99-.08-.32-.23-.63-.44-.88s-.48-.46-.77-.6c-.3-.14-.63-.22-.97-.22H12.55l-.58-3.26C11.84 6.52 11.22 6 10.49 6H4.5C3.67 6 3 6.67 3 7.5S3.67 9 4.5 9h4.74l4.28 24.26c.13.72.75 1.24 1.48 1.24h24c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H16.26l-.53-3h21.66c.52 0 1.03-.18 1.43-.51h-.01ZM15.2 25.5l-2.12-12h26.09l-2.4 12H15.2Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgCartLineRegular)
const Memo = memo(ForwardRef)
export default Memo
