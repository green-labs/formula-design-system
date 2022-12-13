import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMoneyBagLineThin = (
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
        d="M14.05 43.2c-3.6-.1-5.9-1.2-7.4-3.6-1.1-1.7-1.5-4.3-1.5-8.1 0-7.7 3.3-13.6 10-18.4l.3-.2-1.1-1c-1.1-1.1-1.44-2.88-.9-4.4.54-1.52 2.1-2.7 3.8-2.7h13.5c1.9 0 3.78.91 4.4 2.6.58 1.61-.35 3.45-1.5 4.7-.19.21-.8.8-.8.8l.3.2c6.1 4.3 9.7 11.2 9.7 18.5 0 4.7-1.1 8-3.2 9.9-1.7 1.4-3.6 1.6-5.5 1.7h-20.1Zm2.8-27.8c-5.9 4.3-8.8 9.6-8.8 16.3 0 3.5.3 5.4 1.1 6.8.8 1.4 2.5 2.2 5.1 2.2h19.8c1.6-.1 2.9-.3 4-1.2 1.5-1.3 2.3-4 2.3-7.8 0-6.4-3.2-12.5-8.5-16.3l-3.1-2.3c.7-.6 2.5-2.3 3.2-3 .8-.9.6-1.6.4-1.9-.2-.4-.7-.6-1.1-.6h-13.5c-.3 0-1.4 0-1.7.8-.3.5 0 1.2.4 1.6l3.5 3.2-3.1 2.2Z"
        fill={fill}
      />
      <path
        d="M27.92 34.57c-.57 0-1.09-.36-1.3-.9l-2.39-6.31-2.16 6.26c-.19.56-.72.94-1.33.94-.61 0-1.13-.4-1.31-.97l-1.55-4.8h-1.62a1.071 1.071 0 0 1 0-2.14h.93l-.68-2.12c-.18-.56.13-1.17.69-1.35.11-.03.22-.05.33-.05.47 0 .88.3 1.02.75l2.22 6.91 2.1-6.1c.2-.56.73-.93 1.32-.93.59 0 1.12.38 1.31.93l2.3 6.08 1.92-6.85a1.083 1.083 0 0 1 1.98-.23c.14.25.17.54.1.82l-.61 2.16h1.11a1.071 1.071 0 0 1 0 2.14h-1.72l-1.34 4.77c-.18.59-.7 1-1.3 1.02h-.05l.03-.03Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMoneyBagLineThin)
const Memo = memo(ForwardRef)
export default Memo
