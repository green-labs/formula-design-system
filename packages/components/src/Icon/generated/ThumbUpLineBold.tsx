import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgThumbupLineBold = (
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
        d="m35.485 17.465-2.57-.01.23-1.02c.48-2.11 1.01-4.5 1.01-5.94 0-4.07-2.62-6.2-5.2-6.2-2.2 0-4.87 1.5-5.87 4.85l-.2.54c-.18.47-.34.94-.51 1.39-.96 2.68-1.79 4.99-4.04 6.64-2.64 1.92-5.94 2.06-9.5 2.21l-.64.03c-1.75.07-2.93 1.68-2.93 3.13v17.49c0 1.73 1.36 3.13 3.03 3.13h20.54c7.41 0 13.91-6.4 13.91-13.69v-5.88c0-3.73-3.88-6.62-7.26-6.67Zm-22.75 22.83h-4.09l.02-16.96h.29c1.13-.05 2.46-.12 3.78-.26v17.22Zm26.6-10.28c0 5.89-5.55 10.29-10.51 10.29h-12.68v-17.86c1.58-.45 2.95-1.1 4.18-1.99 3.07-2.22 4.15-5.2 5.29-8.35l.72-1.96c.52-1.82 1.73-2.46 2.62-2.46.62 0 1.8.58 1.8 2.8 0 .99-.48 3.2-.87 4.97l-.34 1.52c-.43 1.51.04 2.45.5 2.97.51.58 1.3.92 2.16.92.13 0 .27 0 .38-.02h2.82c1.74 0 3.94 1.54 3.94 3.27v5.9h-.01Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgThumbupLineBold)
const Memo = memo(ForwardRef)
export default Memo
