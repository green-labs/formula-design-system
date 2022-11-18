import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgChatLineRegular = (
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
        d="M43.06 21.55c-1.43-2.42-3.08-4.11-4.89-5.02-.1-.05-.19-.08-.29-.11C35.69 9.74 28.71 5 20.78 5c-5.09 0-9.94 1.94-13.32 5.33-2.89 2.9-4.47 6.64-4.46 10.52 0 3.1 1 6.09 2.93 8.71.04.04.07.09.09.12.02.03.04.06.05.09l-1.44 4.7c-.06.19-.1.38-.12.58v.12c0 .6.25 1.18.7 1.59.42.38.97.6 1.54.6h.14c.26-.03.52-.09.69-.16l5.39-1.75c.13-.05.27-.07.41-.07.12.03.26.02.39.06.17.06.95.32 1.85.58.02.04.03.08.05.12.7 1.33 3.43 3.8 5 4.7 2.49 1.32 5.32 2.02 8.2 2.02h.01c2.01 0 4.16-.39 6.21-1.12l.11-.02 5.22 1.87c.27.11.56.16.83.16.49 0 .98-.16 1.39-.46a2.18 2.18 0 0 0 .81-2.16c-.32-1.52-.81-3.87-1.02-4.88 1.55-2.15 2.44-4.65 2.56-7.23.12-2.62-.55-5.2-1.93-7.47ZM13.39 32.37c-.53.01-1.01.09-1.42.25l-4.04 1.32 1.1-3.57c.21-.7.05-1.46-.49-2.31-.09-.14-.19-.27-.24-.33-1.5-2.04-2.29-4.42-2.3-6.88-.01-3.08 1.26-6.07 3.59-8.4 2.81-2.82 6.89-4.44 11.2-4.44 7 0 13.1 4.32 14.51 10.27.2.85.31 1.72.31 2.59 0 7.19-6.52 13.03-14.53 13.03-1.19 0-2.93-.33-4.06-.62-1.07-.27-2.14-.63-2.26-.67-.44-.15-.9-.23-1.36-.23l-.01-.01Zm28.6-3.49c-.09 2.02-.79 3.98-2.04 5.68-.22.31-.75 1.04-.54 1.91.04.19.5 2.37.81 3.87l-4.01-1.44c-.71-.25-1.49-.24-2.14.02-1.73.62-3.53.94-5.2.94h-.01c-2.38 0-4.73-.58-6.74-1.65-.51-.29-1.15-.8-1.77-1.34.24.02.48.02.71.02 9.67 0 17.53-7.19 17.53-16.03 0-.1-.02-.21-.02-.31.66.67 1.3 1.52 1.91 2.54a10.2 10.2 0 0 1 1.5 5.79h.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgChatLineRegular)
const Memo = memo(ForwardRef)
export default Memo
