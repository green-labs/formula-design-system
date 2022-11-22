import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowTriangleUpLineRegular = (
  { size = "xl", sizePx, color = "gray-90", ...props }: IconProps,
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
      viewBox="0 0 48 48"
      ref={ref}
      {...props}
    >
      <path
        d="M37.092 32.79h-26.2c-.91 0-1.73-.56-2.09-1.43-.33-.79-.18-1.68.37-2.27l13.16-15.36c.15-.15.3-.25.41-.31l.33-.32h.35c.15-.05.34-.1.57-.1.16 0 .55 0 .97.24.34.15.57.38.69.5l.08.08 13.13 15.34c.55.69.67 1.6.29 2.38-.37.78-1.16 1.26-2.06 1.26v-.01Zm-24.57-3h22.94L23.992 16.4l-11.47 13.39Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowTriangleUpLineRegular)
const Memo = memo(ForwardRef)
export default Memo
