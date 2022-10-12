import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMoneyBagFill = (
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
      role="img"
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.48 39.715c1.53 2.45 3.87 3.59 7.57 3.69h20.11c1.97-.1 3.88-.32 5.62-1.75 2.17-1.96 3.27-5.34 3.27-10.05 0-7.37-3.66-14.35-9.79-18.67l-.1-.07.64-.64c.88-1.04 1.85-2.94 1.15-4.8-.67-1.88-2.4-2.83-4.2-2.83h-13.5c-1.83 0-3.47 1.16-3.99 2.83-.62 1.54-.23 3.44.95 4.62l.91.83-.1.07c-6.78 4.86-10.07 10.93-10.07 18.56 0 4.1.46 6.55 1.53 8.21ZM31.114 25.93h.91c.67 0 1.22.55 1.22 1.22 0 .67-.54 1.22-1.22 1.22h-1.6l-1.31 4.66c-.2.66-.78 1.11-1.44 1.13h-.05c-.64 0-1.21-.4-1.44-1l-2.24-5.92-2.02 5.87c-.2.62-.81 1.04-1.47 1.04-.67-.01-1.25-.44-1.45-1.08l-1.51-4.7h-1.51c-.68 0-1.23-.55-1.23-1.22 0-.67.55-1.22 1.23-1.22h.72l-.62-1.92c-.21-.64.15-1.33.79-1.54.64-.21 1.33.15 1.54.79l2.09 6.48 1.96-5.68c.23-.63.81-1.04 1.46-1.04.65.01 1.23.42 1.44 1.04l2.14 5.65 1.8-6.41c.18-.65.86-1.03 1.51-.85.65.18 1.03.86.85 1.51l-.55 1.97Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMoneyBagFill)
const Memo = memo(ForwardRef)
export default Memo
