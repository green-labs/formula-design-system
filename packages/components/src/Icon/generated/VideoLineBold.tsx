import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgVideoLineBold = (
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
        d="M24 40.99c-1.22 0-12.04-.03-15.57-.96-1.11-.25-2.2-.87-3.18-1.83-.95-.83-1.66-2.05-1.94-3.35-.94-3.62-.95-10.6-.95-10.9 0-.3.01-7.28.96-10.87.25-1.11.87-2.2 1.83-3.18.84-.95 2.05-1.65 3.35-1.94 3.46-.92 14.28-.95 15.5-.95 1.22 0 12.04.03 15.57.96 1.11.24 2.2.87 3.18 1.83.94.83 1.64 2.03 1.93 3.31.94 3.6.95 10.54.95 10.84 0 .3-.01 7.38-.96 10.97-.25 1.11-.87 2.2-1.83 3.18-.84.95-2.05 1.66-3.35 1.94-3.46.92-14.28.94-15.5.94l.01.01Zm0-30.3c-3.19 0-12.03.15-14.63.84-.62.14-1.15.45-1.47.82l-.1.1c-.49.49-.79.99-.9 1.5-.85 3.2-.86 9.93-.86 10 0 .07.01 6.81.84 10.04.13.6.44 1.14.81 1.46l.1.1c.49.49.99.79 1.5.91 2.67.7 11.51.86 14.7.86 3.19 0 12.03-.15 14.63-.84.62-.14 1.15-.45 1.47-.82l.1-.1c.49-.49.79-.99.9-1.5.71-2.67.86-8.19.86-10.1 0-.07-.01-6.8-.84-9.93l-.02-.07c-.12-.54-.43-1.08-.8-1.4l-.1-.1c-.49-.49-.99-.79-1.5-.9-2.67-.71-11.51-.86-14.7-.86l.01-.01Z"
        fill={fill}
      />
      <path
        d="M19.95 30.83c.13.09.27.13.43.13l.01-.01c.11 0 .23-.03.34-.07l11-6.2c.2-.1.33-.33.33-.59 0-.26-.13-.49-.33-.59l-11-6.3c-.22-.1-.5-.08-.73.06-.22.14-.35.35-.35.59v12.4c0 .24.11.45.3.58Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgVideoLineBold)
const Memo = memo(ForwardRef)
export default Memo
