import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMenuLineThin = (
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
        d="M8.75 13.335c-.74 0-1.34-.6-1.34-1.34 0-.74.6-1.33 1.34-1.33h30.5a1.34 1.34 0 0 1 0 2.68H8.75v-.01ZM8.75 25.335a1.34 1.34 0 0 1 0-2.68h30.5a1.34 1.34 0 0 1 0 2.68H8.75ZM8.75 37.335a1.34 1.34 0 0 1 0-2.68h30.5a1.34 1.34 0 0 1 0 2.68H8.75Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMenuLineThin)
const Memo = memo(ForwardRef)
export default Memo
