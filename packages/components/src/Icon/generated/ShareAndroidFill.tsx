import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShareAndroidFill = (
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
        d="M33.9 31.8c-1.38 0-2.64.5-3.66 1.28l.08-.12-10.68-7.1c.22-.62.36-1.28.36-1.96 0-.68-.14-1.34-.36-1.96l10.68-7.1-.08-.12c1.02.8 2.28 1.28 3.66 1.28 3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6c0 .66.14 1.3.34 1.9L17.5 19.04A5.864 5.864 0 0 0 14 17.9c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.3 0 2.5-.44 3.5-1.14l10.74 7.14c-.2.6-.34 1.24-.34 1.9 0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShareAndroidFill)
const Memo = memo(ForwardRef)
export default Memo
