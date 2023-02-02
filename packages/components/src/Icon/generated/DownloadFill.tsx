import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgDownloadFill = (
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
        d="m35.11 21.138-.123-.125a1.407 1.407 0 0 0-1.983 0l-6.76 6.76-.854.854V8a1.4 1.4 0 1 0-2.8 0v20.617l-.853-.854-6.76-6.76a1.407 1.407 0 0 0-1.983 0 1.407 1.407 0 0 0 .001 1.985h.001l9.998 9.998-.354.354.354-.354c.064.064.139.126.22.183.003 0 .007.003.012.005l.03.012.02.008.018.009c.035.017.068.036.09.048l.003.002c.04.023.056.032.07.037l.014.006.007.004.013.004.029.007h.002l.066.018.01.003.01.004.041.014-.163.472a.81.81 0 0 0 .134.038c.12.02.25.04.37.04s.25-.01.37-.04l10.75-12.722Zm0 0c.42.556.375 1.34-.123 1.838l-10 10c-.061.061-.132.12-.208.174a3.094 3.094 0 0 1-.042.023h-.001l-.083.048-.01.006-.01.007a.652.652 0 0 1-.11.056l-.013.006-.003.002-.01.002-.024.007c-.02.005-.06.015-.1.029a6.63 6.63 0 0 0-.042.014l.163.472 10.617-12.684ZM23.396 33.795l.055.015-.055-.015Zm0 0a.658.658 0 0 1-.135-.045l.135.045Zm16.423 6.02-.002.001A5.362 5.362 0 0 1 36 41.4H12c-1.448 0-2.8-.558-3.815-1.582l-.001-.002A5.362 5.362 0 0 1 6.6 36v-4a1.4 1.4 0 1 1 2.8 0v4c0 .692.272 1.35.756 1.834A2.579 2.579 0 0 0 12 38.6h24c.692 0 1.35-.272 1.834-.757A2.579 2.579 0 0 0 38.6 36v-4a1.4 1.4 0 1 1 2.8 0v4c0 1.448-.558 2.8-1.582 3.815Z"
        fill={fill}
        stroke={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgDownloadFill)
const Memo = memo(ForwardRef)
export default Memo
