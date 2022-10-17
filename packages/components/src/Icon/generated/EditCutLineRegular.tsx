import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgEditCutLineRegular = (
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
        d="M43.5 33H18c-.8 0-1.6-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1V4.5c0-.8-.7-1.5-1.5-1.5S12 3.7 12 4.5V12H4.5c-.83 0-1.5.67-1.5 1.5S3.67 15 4.5 15H12v15c0 1.6.6 3.1 1.8 4.2 1.1 1.2 2.6 1.8 4.2 1.8h15v7.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V36h7.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5Z"
        fill={fill}
      />
      <path
        d="M19.5 15H30c.8 0 1.6.3 2.1.9.6.6.9 1.3.9 2.1v10.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V18c0-1.6-.6-3.1-1.8-4.2-1.1-1.1-2.6-1.8-4.2-1.8H19.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgEditCutLineRegular)
const Memo = memo(ForwardRef)
export default Memo
