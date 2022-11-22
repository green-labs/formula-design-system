import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPhoneLineBold = (
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
        d="M35.906 43.672c-1.73 0-4.16-.61-7.81-2.63-5-2.72-8.17-5.07-12.08-8.98-4.06-3.96-6.1-6.65-9.08-11.97-3.03-5.43-2.81-8.64-2.08-10.39.65-1.42 1.64-2.48 3.35-3.58.79-.57 1.6-1.01 2.48-1.34 1.33-.58 3.12-.96 5.25 1.17 1.62 1.62 3.74 5.19 4.52 6.74 1.16 2.44.42 3.63-.6 4.83-.19.22-.4.48-.62.79-.17.23-.31.42-.45.59-.64.83-.65.92-.6 1.16.21.89 1.57 3.5 3.92 5.76 2.37 2.47 4.91 3.69 5.71 3.87.24.06.33.04 1.16-.6.18-.14.36-.28.56-.42.28-.21.53-.43.75-.63 1.23-1.1 2.46-1.91 4.94-.6 1.52.76 5.09 2.88 6.71 4.5l.04.04c1.85 1.98 1.68 3.6 1.57 4.67l-.04.38-.08.21c-.33.89-.78 1.71-1.41 2.59-.96 1.5-1.91 2.61-3.53 3.28-.65.3-1.46.55-2.57.55l-.01.01Zm-23.34-35.93c-.17 0-.33.07-.55.17l-.09.04c-.6.23-1.18.54-1.81.99-1.39.9-1.85 1.49-2.14 2.12-.2.49-.73 2.61 1.94 7.37 2.83 5.05 4.66 7.46 8.5 11.21 3.72 3.72 6.57 5.84 11.32 8.42 3.49 1.93 5.98 2.59 7.38 1.95.79-.33 1.26-.81 2.07-2.07.44-.62.74-1.15.96-1.69.08-.76.1-1.1-.66-1.91-1.18-1.17-4.23-3.06-5.84-3.86-.37-.19-.57-.26-.66-.28-.12.08-.32.26-.47.4-.28.25-.6.53-.99.82-.19.14-.34.26-.49.38-.9.7-2.13 1.65-4.01 1.22-1.76-.41-4.85-2.18-7.34-4.78-2.59-2.48-4.43-5.68-4.83-7.4-.43-1.87.52-3.1 1.22-4 .12-.15.24-.31.36-.48.26-.38.55-.72.8-1.02.15-.17.35-.41.4-.51-.01 0-.04-.2-.26-.64-.81-1.62-2.69-4.65-3.87-5.83-.46-.46-.71-.62-.96-.62h.02Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPhoneLineBold)
const Memo = memo(ForwardRef)
export default Memo
