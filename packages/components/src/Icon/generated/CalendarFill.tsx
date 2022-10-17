import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCalendarFill = (
  {
    size = "XL",
    sizePx,
    style,
    className,
    color,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
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
      role="img"
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M41.36 7.53c-1.05-1.07-2.46-1.68-3.94-1.68h-1.39V4.47c0-.77-.58-1.42-1.32-1.46-.19 0-.38.02-.55.09-.18.07-.34.18-.48.3-.13.14-.25.29-.32.47-.08.18-.11.37-.11.57v1.42h-19.5V4.47c0-.77-.58-1.43-1.32-1.47-.19 0-.38.02-.55.09-.18.07-.34.18-.48.3-.13.14-.25.29-.32.47-.08.18-.11.37-.11.57v1.42H9.58c-1.47 0-2.89.6-3.94 1.68C4.59 8.6 4 11.06 4 12.57v.6c0 .1.04.19.1.25.06.06.15.11.25.11h38.3c.1 0 .18-.04.25-.11s.1-.16.1-.25v-.6c0-1.51-.59-3.97-1.64-5.04ZM4.35 16.21c-.1 0-.18.04-.25.11s-.1.16-.1.25v21.74c0 1.51.59 2.95 1.64 4.02A5.51 5.51 0 0 0 9.58 44h27.85c1.47 0 2.89-.6 3.94-1.67a5.75 5.75 0 0 0 1.64-4.02V16.57c0-.1-.04-.18-.1-.25a.34.34 0 0 0-.25-.11H4.35Zm28.33 6.83-9.6 10c-.28.29-.66.46-1.07.46h-.02c-.4 0-.78-.16-1.06-.44l-5-5a1.49 1.49 0 0 1 0-2.12c.59-.58 1.54-.59 2.12 0l3.92 3.92 8.54-8.9c.58-.6 1.52-.62 2.12-.04.6.57.62 1.52.04 2.12h.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCalendarFill)
const Memo = memo(ForwardRef)
export default Memo
