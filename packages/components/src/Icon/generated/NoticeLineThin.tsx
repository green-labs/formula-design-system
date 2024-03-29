import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgNoticeLineThin = (
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
        d="M4.39 41.11c.33.44.74.99 1.52 1.45.72.36 1.4.53 2.14.53h32c.75 0 1.42-.17 2.04-.52.76-.33 1.2-.92 1.56-1.51.54-.75.6-1.59.6-2.17 0-.78-.19-1.48-.54-2.07l-16-29.69a4.082 4.082 0 0 0-3.59-2.22c-1.59-.03-3.02.81-3.82 2.21L4.29 36.82s-.04.09-.06.13c-.23.57-.48 1.21-.48 1.94s.26 1.37.49 1.95c.04.1.09.19.15.27Zm2.05-3.21L22.39 8.28c.35-.62.96-1.01 1.68-.97.66.01 1.21.35 1.52.94L41.62 38c.16.26.23.54.23.88 0 .38-.05.64-.16.78l-.07.1c-.26.44-.39.55-.52.6-.06.02-.12.05-.17.08-.26.16-.54.23-.88.23h-32c-.26 0-.58-.03-.98-.23-.26-.16-.45-.38-.66-.67-.14-.35-.26-.67-.26-.91 0-.25.14-.61.29-.99v.03Z"
        fill={fill}
      />
      <path
        d="M22.7 29.85a1.352 1.352 0 0 0 2.7 0l.5-11.46v-.2c0-.22-.05-.52-.25-.82-.06-.12-.14-.23-.24-.33-.25-.25-.57-.5-1.16-.5h-.4c-.22 0-.52.05-.82.25-.12.06-.23.14-.33.24-.15.15-.5.56-.5 1.16v.26l.5 11.4ZM23.01 37.25c.3.2.71.31 1.14.31.43 0 .89-.06 1.35-.52.4-.4.62-.92.62-1.45 0-.43-.11-.84-.31-1.14-.23-.34-.58-.55-.94-.73-.28-.09-.71-.21-1.14-.1-.39.1-.71.2-1.04.52h-.01c-.2.31-.41.62-.51 1.03-.11.43 0 .86.1 1.14.11.45.46.76.73.94h.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgNoticeLineThin)
const Memo = memo(ForwardRef)
export default Memo
