import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgThumbUpLineThin = (
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
        d="M26.56 42.345c-3.39 0-6.81-.48-10.78-1.51-1.27-.03-2.55-.06-3.61-.1l-.54-.02H8.72c-1.94 0-3.53-1.58-3.53-3.52v-13.63c0-1.04 0-3.22 2.67-3.72.67-.15 1.26-.16 2.08-.17.48 0 1.04-.02 1.77-.06 2.39-.15 3.21-.47 4.07-.81.26-.1.51-.2.8-.29 6.67-2.49 8.34-5.17 8.81-8.44.06-.42.1-.83.13-1.22.15-1.74.32-3.65 2.31-4.8.41-.27.9-.4 1.53-.4.45 0 .91.07 1.22.12 1.52.32 2.68 1.17 3.43 2.54 1.66 3 .9 7.82.03 10.16l-.13.36.35.13c4.36.45 6.8 1.61 8.17 6.7.89 3.13.1 8.01-1.1 11.01-1.66 4.09-4.29 6.2-9.09 7.28l-.14.02c-2.08.24-3.84.36-5.53.36l-.01.01Zm2.59-36.27-.05.03c-.93.52-1.04 1.31-1.18 2.92-.04.46-.08.93-.15 1.41-.69 4.8-3.79 7.89-10.38 10.35-.27.09-.48.17-.69.26-.46.18-.9.35-1.47.5l-.22.06v16.71l.27.02c.43.04.74.08.95.14 3.9 1.02 7.09 1.48 10.32 1.48 1.57 0 3.22-.11 5.21-.34 4.07-.93 5.98-2.45 7.35-5.82 1.04-2.61 1.73-6.97 1.01-9.47-1.03-3.84-2.35-4.57-6.05-4.95l-.12-.02c-.56-.08-1.6-.22-2.15-1.16-.39-.67-.39-1.53 0-2.56.78-2.1 1.25-6.09.11-8.15-.41-.74-.99-1.17-1.77-1.34-.4-.07-.64-.08-.78-.08-.06 0-.2.01-.2.01h-.01Zm-18.63 32.23c.46 0 1.02.02 1.7.04h.31l.05-.3v-16.08l-.73.06c-.29.02-.54.02-.82.03-.47.01-1.02.03-2.02.09-1.3.08-1.42.73-1.42 2.42v12.63c0 .61.51 1.12 1.12 1.12h1.06c.23-.01.47-.02.75-.02v.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgThumbUpLineThin)
const Memo = memo(ForwardRef)
export default Memo
