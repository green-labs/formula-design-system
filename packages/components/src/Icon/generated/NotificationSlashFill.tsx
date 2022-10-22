import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgNotificationSlashFill = (
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
            d="M6.77 43.5a1.49 1.49 0 0 0 1.061-.44l36-36a1.5 1.5 0 0 0-2.12-2.12l-36 36a1.5 1.5 0 0 0 1.06 2.56ZM7.513 31.998l.459-.556c2.062-2.495 3.31-4 3.31-11.063 0-3.656.875-6.656 2.599-8.906 1.27-1.662 2.99-2.923 5.254-3.855a.28.28 0 0 0 .077-.063C20.027 4.827 22.256 3 24.771 3c2.514 0 4.742 1.827 5.557 4.553a.295.295 0 0 0 .076.06 14.8 14.8 0 0 1 2.051 1.032.749.749 0 0 1 .14 1.17L8.053 34.355a.75.75 0 0 1-1.275-.622c.072-.637.328-1.24.735-1.734ZM38.258 20.377c0 7.065 1.245 8.57 3.31 11.062.15.181.303.365.458.556a3.296 3.296 0 0 1 .436 3.527c-.578 1.219-1.811 1.975-3.218 1.975H19.446a.75.75 0 0 1-.531-1.28l18-18a.751.751 0 0 1 1.277.468c.044.544.066 1.107.066 1.692ZM24.392 44.5a7.505 7.505 0 0 1-6.604-3.95.375.375 0 0 1 .332-.55H30.66a.375.375 0 0 1 .333.55 7.505 7.505 0 0 1-6.602 3.95Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgNotificationSlashFill)
const Memo = memo(ForwardRef)
export default Memo
