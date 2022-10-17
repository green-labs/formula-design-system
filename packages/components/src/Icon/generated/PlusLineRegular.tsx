import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPlusLineRegular = (
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
        d="M37.5 22.2H25.8V10.5c0-.99-.81-1.8-1.8-1.8s-1.8.81-1.8 1.8v11.7H10.5c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8h11.7v11.7c0 .99.81 1.8 1.8 1.8s1.8-.81 1.8-1.8V25.8h11.7c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPlusLineRegular)
const Memo = memo(ForwardRef)
export default Memo
