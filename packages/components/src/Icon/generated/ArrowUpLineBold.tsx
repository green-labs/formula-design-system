import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowUpLineBold = (
  {
    size = "xl",
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M24 40.325c-.94 0-1.7-.76-1.7-1.7v-25.15l-10.6 10.6c-.32.32-.75.5-1.2.5-.45 0-.88-.18-1.2-.5-.66-.66-.66-1.74 0-2.41l13.5-13.49c.32-.32.75-.5 1.2-.5.45 0 .88.18 1.2.5l13.5 13.5c.66.66.66 1.74 0 2.41-.32.32-.75.5-1.2.5-.45 0-.88-.18-1.2-.5l-10.6-10.61v25.15c0 .94-.76 1.7-1.7 1.7Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowUpLineBold)
const Memo = memo(ForwardRef)
export default Memo
