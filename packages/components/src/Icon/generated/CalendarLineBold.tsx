import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCalendarLineBold = (
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
        d="M22.195 33.965c-.47 0-.93-.19-1.26-.52l-5-5c-.7-.7-.7-1.83 0-2.52.34-.34.78-.52 1.26-.52s.92.19 1.26.52l3.71 3.71 8.34-8.69c.34-.35.8-.55 1.29-.55.46 0 .9.18 1.24.5.34.33.54.77.55 1.25.01.48-.17.93-.5 1.27l-9.6 10c-.33.34-.79.54-1.27.55h-.02Z"
        fill={fill}
      />
      <path
        d="M13.085 45.285c-4.89 0-8.87-3.98-8.87-8.87v-21.83c0-4.47 3.29-8.21 7.7-8.79v-1.3c0-.98.8-1.78 1.78-1.78s1.78.8 1.78 1.78v1.22h17.7v-1.22c0-.98.8-1.78 1.78-1.78s1.78.8 1.78 1.78v1.42c4.09.86 7.04 4.48 7.04 8.67v21.82c0 4.89-3.98 8.87-8.87 8.87h-21.82v.01Zm-5.31-8.87c0 2.93 2.38 5.31 5.31 5.31h21.82c2.93 0 5.31-2.38 5.31-5.31v-18.05H7.785v18.04l-.01.01Zm32.44-21.61v-.21c0-2.93-2.38-5.31-5.31-5.31h-21.82c-2.93 0-5.31 2.38-5.31 5.31v.21h32.44Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCalendarLineBold)
const Memo = memo(ForwardRef)
export default Memo
