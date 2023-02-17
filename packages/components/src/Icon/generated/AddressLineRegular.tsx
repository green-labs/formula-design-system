import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgAddressLineRegular = (
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
        d="M38.15 43.5h-26.5c-2.06 0-3.76-1.68-3.76-3.76v-3.16c0-.82.68-1.5 1.5-1.5s1.5.68 1.5 1.5v3.16c0 .42.34.76.76.76h26.48c.42 0 .76-.34.76-.76V8.26a.76.76 0 0 0-.76-.76H11.65a.76.76 0 0 0-.76.76v3.16c0 .82-.68 1.5-1.5 1.5s-1.5-.68-1.5-1.5V8.26c.02-2.08 1.7-3.76 3.76-3.76h26.48c2.06 0 3.76 1.68 3.76 3.76v31.5c0 2.06-1.68 3.76-3.76 3.76l.02-.02Z"
        fill={fill}
      />
      <path
        d="M11.21 31.8h-3.6c-.82 0-1.5-.68-1.5-1.5s.68-1.5 1.5-1.5h3.6c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5ZM11.21 25.5h-3.6c-.82 0-1.5-.68-1.5-1.5s.68-1.5 1.5-1.5h3.6c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5ZM11.21 19.2h-3.6c-.82 0-1.5-.68-1.5-1.5s.68-1.5 1.5-1.5h3.6c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5ZM25.29 23.84c-2.8 0-4.98-2.12-5.2-5.04-.12-1.54.36-2.98 1.34-4.02 1.96-2.1 5.76-2.08 7.7 0 .98 1.04 1.46 2.48 1.34 4.04-.2 2.92-2.4 5.04-5.2 5.04l.02-.02Zm0-8.1c-.78 0-1.46.28-1.94.8s-.72 1.26-.66 2.06c.12 1.82 1.44 2.64 2.6 2.64 1.16 0 2.48-.82 2.6-2.64.06-.84-.16-1.56-.66-2.08-.48-.5-1.16-.78-1.96-.78h.02ZM33.09 33.3H17.51c-.62 0-1.2-.28-1.58-.76-.4-.5-.54-1.18-.38-1.82.98-4.02 4.82-6.62 9.74-6.62s8.76 2.66 9.74 6.62c.16.64 0 1.32-.38 1.82-.38.48-.96.76-1.58.76h.02Zm-14.82-2.6h14.04c-1.12-2.94-4.4-4.02-7.02-4.02-2.62 0-5.92 1.06-7.02 4.02Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgAddressLineRegular)
const Memo = memo(ForwardRef)
export default Memo
