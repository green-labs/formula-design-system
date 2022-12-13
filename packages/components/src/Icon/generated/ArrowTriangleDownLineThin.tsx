import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowTriangleDownLineThin = (
  { size = "xl", sizePx, color, ...props }: IconProps,
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
        d="M24.006 35c-.13 0-.47 0-.83-.21-.29-.12-.49-.32-.61-.44l-.07-.08-13.13-15.32c-.48-.6-.57-1.39-.25-2.06.32-.67 1.01-1.09 1.79-1.09h26.2c.79 0 1.5.49 1.81 1.25.3.72.16 1.48-.36 2l-13.04 15.23c-.19.2-.34.3-.45.35l-.27.27h-.28c-.13.05-.31.1-.52.1h.01Zm-12.12-16.8 12.12 14.16 12.12-14.16h-24.24Zm24.91-.78s-.03.03-.04.05l.04-.05Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgArrowTriangleDownLineThin)
const Memo = memo(ForwardRef)
export default Memo
