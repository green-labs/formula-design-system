import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgChatFill = (
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
            d="M42.325 35.483v.024-.024ZM7.05 36.887c.294 0 .612-.074.882-.172l5.267-1.725h.049s.245-.074.367-.074c.123 0 .22 0 .343.05.123.049 1.274.443 2.499.763.661.173 2.94.715 4.777.715 4.703 0 9.088-1.651 12.347-4.681a15.54 15.54 0 0 0 3.723-5.124 14.805 14.805 0 0 0 1.299-6.06c0-1.084-.123-2.168-.368-3.227-.808-3.473-2.989-6.651-6.1-8.918-3.184-2.29-7.104-3.547-11.17-3.547-4.851 0-9.383 1.724-12.74 4.804-3.184 2.956-4.899 6.799-4.899 10.888 0 3.03.98 5.986 2.817 8.499l.074.098s.024.05.049.05l.098.197-1.47 4.804a1.709 1.709 0 0 0-.098.615c0 .271.049.542.172.789.122.246.269.468.49.665.195.197.465.345.734.443.27.099.564.148.858.148Z"
            fill={fill}
          />
          <path
            d="m36.603 41.337 4.728 1.656c.1.04.344.12.528.12.336 0 .648-.12.936-.312.192-.144.336-.336.408-.528.072-.192.096-.408.048-.6l-.888-4.2c-.072-.504-.048-.84.288-1.368a11.58 11.58 0 0 0 1.992-5.568 11.396 11.396 0 0 0-1.08-5.76c-.216-.456-.696-1.008-.888-1.176-.072-.096-.216-.168-.528-.216-.096 0-.168.024-.264.048a.73.73 0 0 0-.312.216.588.588 0 0 0-.096.288s.024.216-.12 1.08c-.576 3.552-2.424 6.912-5.232 9.456-3.144 2.88-7.344 4.632-11.784 4.92h-.432c-.36 0-.72.024-1.032.096a.887.887 0 0 0-.264.12c-.072.048-.144.096-.168.168-.048.072-.048.168-.048.24a.75.75 0 0 0 .12.24c.24.264.72.456 1.104.6l.336.12c1.944.84 4.128 1.272 6.312 1.272 1.728 0 3.6-.312 5.376-.912a1.663 1.663 0 0 1 .96 0Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgChatFill)
const Memo = memo(ForwardRef)
export default Memo
