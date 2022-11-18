import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCameraLineThin = (
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
        d="M7.5 40.45h33c1.26 0 2.42-.5 3.17-1.37.84-.86 1.28-1.92 1.28-3.08V18c0-1.26-.5-2.42-1.37-3.17-.86-.84-1.92-1.28-3.08-1.28H35c-.34 0-.68-.18-.9-.47l-2.48-3.86c-.03-.05-.07-.1-.11-.15-.82-.98-1.96-1.52-3.21-1.52h-8.6c-1.13 0-2.18.48-3.12 1.42-.07.07-.14.16-.2.24l-2.45 3.82c-.28.32-.6.52-.83.52H7.5c-1.26 0-2.42.5-3.17 1.37-.84.86-1.28 1.92-1.28 3.08v18c0 1.26.5 2.42 1.37 3.17.86.84 1.92 1.28 3.08 1.28ZM5.95 18c0-.41.15-.75.47-1.07.03-.03.06-.06.09-.1.19-.23.57-.38.99-.38h5.6c1.14 0 2.24-.58 3.11-1.62.04-.05.08-.1.11-.15l2.41-3.76c.34-.32.67-.48.97-.48h8.6c.38 0 .68.13.94.42l2.44 3.81.04.06A4.044 4.044 0 0 0 35 16.44h5.5c.41 0 .75.15 1.07.47.03.03.06.06.1.09.23.19.38.57.38.99V36c0 .41-.15.75-.47 1.07-.03.03-.06.06-.09.1-.19.23-.57.38-.99.38h-33c-.41 0-.75-.15-1.07-.47a.902.902 0 0 0-.1-.09c-.23-.19-.38-.57-.38-.99V18Z"
        fill={fill}
      />
      <path
        d="M24 34.55c4.99 0 9.05-4.06 9.05-9.05 0-4.99-4.06-9.05-9.05-9.05-4.99 0-9.05 4.06-9.05 9.05 0 4.99 4.06 9.05 9.05 9.05Zm0-15c3.23 0 5.95 2.72 5.95 5.95s-2.72 5.95-5.95 5.95-5.95-2.72-5.95-5.95 2.72-5.95 5.95-5.95Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCameraLineThin)
const Memo = memo(ForwardRef)
export default Memo
