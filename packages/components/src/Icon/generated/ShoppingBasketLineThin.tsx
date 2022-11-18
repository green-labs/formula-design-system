import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketLineThin = (
  { size = "xl", sizePx, style, className, color, ...props }: IconProps,
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
        d="M12.53 42.685c-1.14 0-2.24-.37-3.14-1.05-.9-.68-1.56-1.65-1.87-2.73l-4.04-17.97c-.08-.29-.12-.58-.12-.87 0-.85.35-1.65.95-2.25.6-.6 1.41-.93 2.26-.93h7.37l9.1-12.12c.21-.28.57-.45.96-.45s.75.17.96.45l9.1 12.13h7.37c.85 0 1.65.33 2.26.93.61.6.94 1.4.95 2.25v.15l-.06.54s-.01.09-.02.13l-4.04 17.95c-.33 1.14-.99 2.11-1.9 2.79-.9.67-2.01 1.05-3.14 1.05H12.53Zm-5.96-23.4a.802.802 0 0 0-.81.8l.04.21 4.05 18.02c.15.54.52 1.05.99 1.41.49.37 1.06.56 1.69.56h22.94c.61 0 1.21-.2 1.7-.57.49-.37.85-.89 1.02-1.47l4.05-18.2v-.05a.851.851 0 0 0-.24-.47.827.827 0 0 0-.57-.23H6.57v-.01Zm10.37-2.4h14.11L24 7.485l-7.06 9.41v-.01Z"
        fill={fill}
      />
      <path
        d="M27.62 35.335c-.57 0-1.09-.36-1.3-.9l-2.39-6.31-2.16 6.26c-.19.56-.72.94-1.33.94-.61 0-1.13-.4-1.31-.97l-1.55-4.8h-1.62a1.071 1.071 0 0 1 0-2.14h.93l-.68-2.12c-.18-.56.13-1.17.69-1.35.11-.03.22-.05.33-.05.47 0 .88.3 1.02.75l2.22 6.91 2.1-6.1c.2-.56.73-.93 1.32-.93.59 0 1.12.38 1.31.93l2.3 6.08 1.92-6.85a1.083 1.083 0 0 1 1.98-.23c.14.25.17.54.1.82l-.61 2.16H32a1.071 1.071 0 0 1 0 2.14h-1.72l-1.34 4.77c-.18.59-.7 1-1.3 1.02h-.05l.03-.03Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketLineThin)
const Memo = memo(ForwardRef)
export default Memo
