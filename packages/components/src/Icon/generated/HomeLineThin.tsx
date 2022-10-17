import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgHomeLineThin = (
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
        d="m6.615 24.1.6-.6v17.1c0 .8.4 1.4.6 1.7 0 .1.1.1.2.2.5.5 1.2.8 1.9.8h10.4c.7 0 1.3-.6 1.3-1.3v-9.2c0-.8.7-1.5 1.5-1.5h1.9c.8 0 1.5.7 1.5 1.5V42c0 .7.6 1.3 1.3 1.3h10.4c.8 0 1.4-.3 1.9-.8s.8-1.2.8-1.9V23.5l.6.6c.3.2.6.4.9.4.4 0 .7-.1 1-.4.5-.5.5-1.4 0-1.9l-17.5-16.7c-.4-.5-1.1-.8-1.9-.8-.8 0-1.5.3-1.9.8l-17.5 16.7c-.5.5-.6 1.4 0 1.9s1.5.5 2 0Zm17.5-16.7s.1 0 0 0c.067 0 .067 0 0 0l14.2 13.5-.1 19.8h-9.1v-7.9c0-2.3-1.9-4.1-4.1-4.1h-1.9c-2.3 0-4.1 1.9-4.1 4.1v7.9h-9.1V20.9l14.2-13.5Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgHomeLineThin)
const Memo = memo(ForwardRef)
export default Memo
