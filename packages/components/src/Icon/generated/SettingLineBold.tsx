import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgSettingLineBold = (
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
        d="M29.07 18.6a6.981 6.981 0 0 0-4.37-1.99c-1.63-.14-3.16.19-4.41.94-1.16.69-2.19 1.76-2.98 3.08-.03.05-.06.11-.09.17-.66 1.45-.88 3.01-.63 4.38.23 1.4.89 2.69 2.01 3.95.02.03.04.05.07.07a7.433 7.433 0 0 0 4.02 2.07 7.276 7.276 0 0 0 4.44-.66c1.49-.74 2.64-1.85 3.25-3.13.71-1.23 1.02-2.73.89-4.32-.13-1.69-.89-3.27-2.19-4.57l-.01.01Zm-1.66 7.23c-.03.05-.06.11-.09.17-.37.82-1.23 1.34-1.71 1.58-.71.36-1.55.48-2.36.34a4.07 4.07 0 0 1-2.14-1.09c-.67-.76-1.04-1.46-1.16-2.24-.13-.7 0-1.51.34-2.3.5-.8 1.11-1.44 1.77-1.83.8-.48 1.74-.52 2.38-.46h.01a3.6 3.6 0 0 1 2.23 1.01c.73.73 1.14 1.55 1.21 2.44.05.65.02 1.58-.46 2.38h-.02Z"
        fill={fill}
      />
      <path
        d="m43.42 27.76-3.37-2.63c.02-.41.02-.78.02-1.13v-.98l3.26-2.59c.19-.15.39-.41.5-.63.08-.14.23-.38.35-.76.32-.97-.05-1.72-.24-2.08l-3.78-6.57c-.36-.66-.94-.96-1.23-1.1-.64-.32-1.47-.34-2.13-.04L33 10.77c-.65-.51-1.28-.84-2.02-1.16l-.61-4.14c-.04-.88-.5-1.61-1.24-1.98-.28-.14-.75-.38-1.35-.38h-7.7c-1.28 0-1.86.62-2.14 1.16-.14.21-.41.61-.45 1.17l-.55 3.96-.02.04c-.62.32-1.28.7-1.85 1.07l-3.91-1.56c-.66-.3-1.49-.28-2.13.04-.29.14-.88.44-1.23 1.1L4 16.65s-.03.06-.05.09c-.28.56-.28 1.14-.28 1.46 0 1 .52 1.52.8 1.8.05.05.09.09.14.13l3.26 2.59V25.08l-3.26 2.59c-.19.15-.37.37-.48.59-.12.19-.36.54-.44 1.01-.21.86.11 1.5.25 1.79.02.03.03.06.05.09l3.78 6.57c.36.66.94.96 1.23 1.1.65.32 1.47.34 2.13.04l3.81-1.53c.59.4 1.26.84 2.05 1.19l.56 4.02c.04.88.5 1.61 1.24 1.98.28.14.76.38 1.35.38h7.7c.3 0 1.1 0 1.8-.7.13-.13.25-.29.33-.46.14-.21.41-.61.46-1.18l.55-3.96.05-.1c.73-.33 1.36-.74 1.91-1.11L36.98 39c.24.08.91.31 1.7.04a2.3 2.3 0 0 0 1.52-1.2l3.8-6.6s.03-.06.05-.09c.28-.56.28-1.14.28-1.46 0-.46-.14-1.14-.8-1.8-.05-.05-.1-.09-.16-.14l.05.01Zm-5.79 7.83-3.38-1.35c-.53-.24-1.08-.24-1.38-.24-.63 0-1.23.26-1.46.38-.06.03-.13.07-.19.11-.55.37-1.06.71-1.71.99-.45.22-.78.55-1.05.82-.13.13-.24.28-.32.44l-.3.6c-.08.16-.14.34-.16.52l-.51 3.63h-6.32l-.5-3.55c-.04-.55-.26-1.12-.62-1.56-.42-.62-1.04-.87-1.36-.98-.51-.22-.98-.53-1.48-.87-.39-.32-.8-.44-1.07-.51-.21-.09-.43-.13-.66-.13-.3 0-.84 0-1.37.24l-3.38 1.35-3.2-5.55 2.9-2.31s.1-.08.14-.13c.3-.3.57-.6.78-1.17.22-.52.22-1.04.22-1.33v-2.2c0-.31 0-.9-.28-1.47-.13-.26-.32-.64-.72-1.04-.04-.04-.09-.09-.14-.13L7.2 17.84l3.2-5.55 3.37 1.35c.53.24 1.08.24 1.38.24.63 0 1.23-.26 1.46-.38.07-.03.13-.07.19-.11.5-.34 1.15-.71 1.72-1 .44-.22.77-.55.93-.71.13-.13.24-.28.33-.45l.3-.6c.08-.17.14-.34.16-.53l.51-3.63h6.32l.5 3.56c.04.55.26 1.12.62 1.56.28.42.65.66.91.82l.13.08c.08.06.17.11.27.15.59.26 1.03.47 1.45.81.45.41.91.53 1.16.6l.12.04c.17.06.36.09.54.09.3 0 .84 0 1.37-.24l3.38-1.35 3.2 5.55-2.81 2.23c-.71.45-.95 1.18-1.05 1.47-.19.56-.19.98-.19 1.24v.9c0 .55 0 1.08-.08 1.66-.09.6.16 1.21.64 1.58l3.59 2.8-3.19 5.55v.02Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgSettingLineBold)
const Memo = memo(ForwardRef)
export default Memo
