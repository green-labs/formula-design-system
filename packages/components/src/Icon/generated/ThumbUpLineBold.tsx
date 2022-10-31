import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgThumbUpLineBold = (
  {
    size = "xl",
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M26.577 42.835c-3.43 0-6.9-.48-10.91-1.53-1.16 0-2.43-.05-3.5-.08l-.54-.02h-2.9c-2.22 0-4.03-1.81-4.03-4.02v-13.63c0-.99 0-3.63 3.08-4.21.7-.16 1.32-.17 2.17-.18.47 0 1.03-.02 1.75-.06 2.31-.15 3.09-.45 3.91-.77.27-.1.53-.21.82-.3 6.42-2.4 8.03-4.94 8.47-8.03.06-.41.1-.81.13-1.19.15-1.77.34-3.91 2.55-5.19.46-.31 1.05-.47 1.78-.47.49 0 .98.07 1.3.13 1.66.35 2.97 1.31 3.79 2.79 1.7 3.08.99 7.96.12 10.43 4.33.48 6.94 1.8 8.34 7.04.92 3.23.11 8.24-1.12 11.32-1.73 4.26-4.46 6.46-9.45 7.58l-.17.03c-2.13.25-3.91.37-5.62.37l.03-.01Zm-11.07-5c.37.04.64.08.85.13 3.86 1.01 7 1.46 10.2 1.46 1.55 0 3.19-.11 5.16-.34 3.83-.88 5.65-2.32 6.94-5.51 1.01-2.53 1.68-6.75 1-9.14-.97-3.61-2.07-4.22-5.62-4.59l-.14-.02c-.6-.08-1.84-.26-2.52-1.4-.47-.81-.48-1.82-.02-3 .74-2 1.2-5.8.14-7.73-.34-.61-.79-.96-1.44-1.09a3.86 3.86 0 0 0-.68-.07h-.09c-.58.35-.7.82-.85 2.51-.04.47-.08.95-.16 1.44-.71 5-3.92 8.21-10.7 10.75-.28.09-.48.17-.69.25-.43.17-.85.33-1.38.47V37.835Zm-4.96-.05c.43 0 .94.01 1.56.03v-15.34l-.2.02c-.3.02-.55.02-.83.03-.47.01-1.02.03-2.01.09-.81.05-.95.2-.95 1.92v12.63c0 .33.3.62.62.62h1.06c.21-.01.46-.02.75-.02v.02Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgThumbUpLineBold)
const Memo = memo(ForwardRef)
export default Memo
