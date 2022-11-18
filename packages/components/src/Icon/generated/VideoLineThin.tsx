import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgVideoLineThin = (
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
        d="M24 40.44c-.48 0-11.92-.01-15.44-.94-1.04-.23-2.06-.81-2.97-1.71-.88-.77-1.53-1.89-1.8-3.09-.92-3.38-.93-10.4-.93-10.7 0-.3.01-7.21.94-10.74.23-1.04.81-2.06 1.71-2.97.77-.88 1.89-1.53 3.09-1.8 3.48-.92 14.91-.93 15.4-.93.49 0 11.92.01 15.44.94 1.04.23 2.06.81 2.97 1.71.87.76 1.52 1.87 1.79 3.06.93 3.54.94 10.42.94 10.72 0 .3-.01 7.21-.94 10.74-.23 1.04-.81 2.06-1.71 2.97-.77.88-1.89 1.53-3.09 1.8-3.48.92-14.91.93-15.39.93l-.01.01Zm0-30.2c-3.21 0-12.11.15-14.76.86-.71.16-1.33.52-1.73.98l-.07.08c-.56.56-.91 1.14-1.04 1.74-.86 3.24-.87 10.04-.87 10.11 0 .07.01 6.96.85 10.05.16.72.52 1.34.98 1.74l.08.07c.56.56 1.14.91 1.74 1.04 2.7.71 11.6.87 14.81.87 3.21 0 12.11-.15 14.76-.86.71-.16 1.33-.52 1.73-.98l.07-.08c.56-.56.91-1.14 1.04-1.74.86-3.24.87-10.04.87-10.11 0-.07-.01-6.87-.86-10.06v-.05c-.16-.65-.52-1.28-.98-1.67l-.08-.07c-.56-.56-1.14-.91-1.74-1.04-2.7-.71-11.6-.87-14.81-.87l.01-.01Z"
        fill={fill}
      />
      <path
        d="M20.12 17.5c.1-.06.2-.09.31-.09h.01c.08 0 .16.01.23.05l11 6.2c.16.08.26.25.26.43s-.1.35-.26.43l-11 6.2c-.19.1-.41.1-.57 0-.14-.08-.22-.23-.22-.42V17.9c0-.16.09-.31.24-.4Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgVideoLineThin)
const Memo = memo(ForwardRef)
export default Memo
