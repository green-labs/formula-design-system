import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgChevronUpLineRegular = (
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
        d="M37.5 31.043c-.46 0-.92-.18-1.27-.53L24 18.282l-12.23 12.23c-.7.7-1.84.7-2.54 0s-.7-1.84 0-2.55l13.5-13.49c.7-.7 1.84-.7 2.54 0l13.5 13.5c.7.7.7 1.84 0 2.55-.35.35-.81.53-1.27.53v-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgChevronUpLineRegular)
const Memo = memo(ForwardRef)
export default Memo
