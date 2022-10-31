import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCameraLineBold = (
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
        d="M40.5 13.05H35c-.18 0-.37-.1-.49-.26l-2.46-3.85c-.04-.07-.09-.13-.14-.2-.92-1.1-2.19-1.7-3.6-1.7h-8.6c-.87 0-2.18.27-3.48 1.57-.1.1-.19.21-.26.33l-2.42 3.78c-.23.25-.4.32-.43.32H7.5c-1.4 0-2.69.56-3.54 1.53-.92.95-1.41 2.13-1.41 3.42V36c0 1.4.56 2.69 1.53 3.54.95.92 2.13 1.41 3.42 1.41h33c1.4 0 2.69-.56 3.54-1.53.92-.95 1.41-2.13 1.41-3.42V18c0-1.4-.56-2.69-1.53-3.54-.95-.92-2.13-1.41-3.42-1.41ZM41.55 36c0 .2-.04.43-.33.72-.04.04-.08.09-.12.13-.08.1-.3.2-.6.2h-33c-.2 0-.43-.04-.72-.33-.04-.04-.09-.08-.13-.12-.1-.08-.2-.3-.2-.6V18c0-.2.04-.43.33-.72.04-.04.08-.09.12-.13.08-.1.3-.2.6-.2h5.6c1.29 0 2.53-.64 3.5-1.8.05-.06.1-.13.14-.2l2.37-3.7c.17-.15.39-.3.59-.3h8.6c.17 0 .35.03.54.23l2.42 3.77s.04.05.06.08c.86 1.2 2.24 1.92 3.69 1.92h5.5c.2 0 .43.04.72.33.04.04.09.08.13.12.1.08.2.3.2.6v18h-.01Z"
        fill={fill}
      />
      <path
        d="M24 16.05c-5.21 0-9.45 4.24-9.45 9.45 0 5.21 4.24 9.45 9.45 9.45 5.21 0 9.45-4.24 9.45-9.45 0-5.21-4.24-9.45-9.45-9.45Zm0 15c-3.01 0-5.55-2.54-5.55-5.55s2.54-5.55 5.55-5.55 5.55 2.54 5.55 5.55-2.54 5.55-5.55 5.55Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCameraLineBold)
const Memo = memo(ForwardRef)
export default Memo
