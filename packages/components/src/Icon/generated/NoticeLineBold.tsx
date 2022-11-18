import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgNoticeLineBold = (
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
        d="M28.16 6.9c-.8-1.53-2.31-2.45-4.03-2.49-1.74-.08-3.38.9-4.27 2.47L3.85 36.58c-.03.06-.06.12-.08.18-.23.58-.52 1.3-.52 2.13 0 .83.29 1.55.52 2.13.06.14.13.27.22.39.34.45.8 1.07 1.58 1.54l.12.06c.79.4 1.54.58 2.36.58h32c.83 0 1.58-.19 2.26-.58.86-.39 1.37-1.06 1.75-1.68.46-.65.68-1.45.68-2.44 0-.88-.21-1.65-.6-2.31L28.16 6.9Zm13.13 32.47s-.07.09-.1.15c-.19.32-.27.39-.27.4-.08.03-.17.07-.24.12-.19.11-.37.16-.63.16h-32c-.19 0-.42-.02-.77-.19-.15-.1-.27-.24-.43-.46-.1-.26-.19-.52-.19-.66 0-.16.13-.49.24-.78L22.83 8.53c.26-.46.71-.76 1.24-.72.22 0 .77.08 1.09.68L41.2 38.26c.11.19.16.37.16.63 0 .38-.06.48-.06.48h-.01Z"
        fill={fill}
      />
      <path
        d="M24.05 31.39c.86 0 1.56-.67 1.6-1.53l.5-11.47v-.2c0-.26-.06-.61-.29-.95-.07-.14-.17-.26-.28-.38-.28-.28-.66-.57-1.33-.57h-.4c-.26 0-.61.06-.95.29-.14.07-.26.17-.38.28-.17.17-.57.64-.57 1.33v.27l.5 11.4c.04.86.74 1.53 1.6 1.53ZM25.1 33.4c-.38-.19-.8-.23-1.27-.11-.45.11-.86.33-1.15.63-.29.29-.51.7-.63 1.15-.11.42 0 .84.1 1.24.1.48.37.83.85 1.07.35.23.89.31 1.25.31.62 0 1.15-.21 1.57-.63.42-.42.63-.95.63-1.57 0-.47-.14-.88-.42-1.26-.21-.31-.62-.62-.94-.83h.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgNoticeLineBold)
const Memo = memo(ForwardRef)
export default Memo
