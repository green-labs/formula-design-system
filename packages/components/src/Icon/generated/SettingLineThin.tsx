import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgSettingLineThin = (
  {
    size = "XL",
    sizePx,
    style,
    className,
    fill,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const finalSize = sizePx ? sizePx : convertSizeToPx(size)
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
        d="M8.36 25.26s-.02.05-.03.08c-.02.02-.04.04-.06.07l-3.35 2.66c-.14.11-.3.32-.38.48-.12.18-.31.46-.36.84-.17.69.08 1.21.24 1.52l3.77 6.54c.28.56.75.8 1.03.94.52.26 1.19.27 1.72.03l3.97-1.59h.05c.05.02.11.03.17.05.02.02.04.03.06.04.63.42 1.29.86 2.18 1.24.02 0 .03.01.05.02.01.02.03.03.04.04v.07l.59 4.23c.03.71.38 1.28.96 1.57.26.13.65.33 1.14.33h7.7c.27 0 .9 0 1.45-.55.09-.09.21-.26.27-.38.13-.2.35-.52.38-.96l.56-4.05.13-.25c.06-.06.1-.11.09-.11.77-.33 1.43-.76 2.02-1.15.06-.03.12-.05.11-.05h.25l4.07 1.62c.2.07.75.25 1.39.03.61-.12 1.04-.58 1.23-.97l3.83-6.66c.23-.45.23-.94.23-1.23 0-.8-.39-1.19-.65-1.45-.04-.03-.07-.07-.11-.1l-3.57-2.79c.04-.49.04-.93.04-1.36v-.9c0-.16 0-.21.04-.32 0-.02.01-.03.02-.05l3.39-2.7c.14-.11.25-.25.33-.41l.06-.1c.08-.13.2-.33.31-.66.26-.77-.03-1.34-.2-1.68l-3.77-6.54c-.28-.56-.77-.81-1.04-.94-.54-.27-1.23-.27-1.68-.04l-4 1.6h-.08c-.03 0-.06-.02-.09-.02h-.04c-.67-.56-1.32-.91-2.08-1.24l-.07-.05-.11-.07-.09-.12V9.7l-.59-4.23c-.03-.71-.38-1.28-.96-1.57-.26-.13-.65-.33-1.14-.33h-7.7c-.31 0-1.24 0-1.72.93-.13.2-.34.52-.38.95l-.56 4.05-.12.24-.05.05c-.65.32-1.35.73-1.95 1.12-.06.03-.12.05-.11.05h-.26c.02 0 .01 0 0 0l-3.96-1.59c-.53-.24-1.2-.23-1.71.03-.27.13-.76.38-1.01.88L4.4 16.96c-.23.45-.23.94-.23 1.24 0 .8.39 1.19.65 1.45.03.03.07.06.1.09l3.33 2.64s.06.1.11.19c.01.08 0 .16 0 .23v2.46Zm6.56 11.55h.03-.03ZM6.58 17.99l3.63-6.3 3.73 1.49c.45.23.94.23 1.23.23.54 0 1.08-.25 1.23-.33.05-.02.09-.05.13-.08.53-.36 1.18-.73 1.77-1.02.37-.18.66-.47.81-.62.09-.09.17-.2.23-.32l.3-.6c.06-.12.1-.24.11-.37L20.32 6h7.19l.56 4c.03.46.22.94.52 1.31.22.34.52.54.77.7l.14.09c.06.04.13.08.19.11.62.27 1.11.51 1.57.89.36.33.72.43.96.5l.15.04c.12.04.25.06.38.06.28 0 .74 0 1.18-.2l3.78-1.52 3.62 6.3s0 .02-.01.02l-3.15 2.5c-.57.36-.77.95-.86 1.22-.16.48-.16.84-.16 1.08v.9c0 .57 0 1.12-.09 1.73-.06.42.11.85.45 1.12l3.93 3.07-3.62 6.3-3.79-1.52c-.44-.2-.9-.2-1.18-.2-.54 0-1.08.25-1.23.33-.05.02-.09.05-.13.08-.57.38-1.1.74-1.77 1.03-.37.19-.65.47-.91.72-.09.09-.17.2-.23.32l-.3.6c-.06.12-.1.24-.11.37l-.57 4.07h-7.19l-.56-4c-.03-.46-.22-.95-.53-1.31-.36-.54-.92-.73-1.1-.79-.58-.25-1.09-.58-1.64-.95-.33-.27-.68-.37-.9-.42-.17-.08-.35-.13-.53-.13-.29 0-.78 0-1.15.19l-3.82 1.53-3.62-6.3 3.23-2.56s.07-.06.1-.09c.28-.28.49-.52.67-1 .18-.43.18-.87.18-1.15v-2.2c0-.29 0-.78-.23-1.25-.12-.24-.29-.57-.62-.9-.03-.03-.07-.06-.1-.09l-3.24-2.57.03-.04Z"
        fill={fill}
      />
      <path
        d="M19.02 28.75a6.963 6.963 0 0 0 3.75 1.93c.37.06.75.09 1.12.09 1.05 0 2.09-.24 3.02-.7 1.4-.7 2.47-1.73 3.03-2.91.67-1.15.96-2.55.83-4.05-.12-1.57-.83-3.04-2.05-4.26-.94-.93-2.34-1.59-3.97-1.84-.03 0-.06 0-.08-.01-1.54-.12-2.96.17-4.12.87-1.09.65-2.06 1.66-2.81 2.91l-.06.12c-.62 1.35-.82 2.81-.59 4.09.22 1.3.83 2.52 1.93 3.75v.01Zm.81-6.79c.54-.89 1.22-1.59 1.95-2.03.72-.43 1.63-.62 2.64-.54 1.1.18 2.02.59 2.59 1.16.81.81 1.28 1.76 1.35 2.75.09 1.03-.1 1.96-.53 2.68l-.06.12c-.44.96-1.4 1.55-1.94 1.82-.81.4-1.75.54-2.67.39-.9-.15-1.79-.61-2.4-1.21-.75-.85-1.17-1.64-1.32-2.52-.15-.8 0-1.73.38-2.63l.01.01Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgSettingLineThin)
const Memo = memo(ForwardRef)
export default Memo
