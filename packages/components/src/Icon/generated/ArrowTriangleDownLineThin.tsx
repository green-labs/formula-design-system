import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowTriangleDownLineThin = (
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
        d="M24.006 35.7c-.16 0-.55 0-.97-.24-.33-.15-.56-.37-.68-.49l-.08-.09-13.14-15.34c-.55-.7-.66-1.61-.29-2.38.37-.77 1.16-1.26 2.06-1.26h26.2c.91 0 1.73.56 2.09 1.43.33.79.18 1.68-.37 2.27l-13.15 15.35c-.15.15-.31.26-.42.32l-.33.32h-.35c-.15.05-.34.1-.57.1v.01Zm-11.47-16.8 11.47 13.39 11.47-13.39h-22.94Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowTriangleDownLineThin)
const Memo = memo(ForwardRef)
export default Memo
