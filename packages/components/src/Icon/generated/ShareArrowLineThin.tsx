import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShareArrowLineThin = (
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
        d="M5.06 39.7a1.212 1.212 0 0 1-1.2-1.08c-.6-6.01 1.03-11.53 4.61-15.52 3.69-4.13 9.34-6.45 16.39-6.76V9.5c0-.47.27-.89.7-1.09.43-.19.93-.13 1.28.18l17 14.5c.27.23.43.58.42.93 0 .36-.17.7-.45.92l-17 13.5c-.36.29-.85.34-1.27.14-.41-.2-.68-.62-.68-1.08v-5.91c-7.48-.56-14.63 2.32-18.86 7.66a1.2 1.2 0 0 1-.94.45Zm22.2-27.6v5.4c0 .66-.53 1.19-1.19 1.2-7.01.09-12.33 2.1-15.81 6-2.55 2.86-3.97 6.64-4.11 10.84 5.05-4.76 12.47-7.12 20.05-6.23.6.07 1.06.58 1.06 1.19v4.51l13.91-11.05L27.26 12.1Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShareArrowLineThin)
const Memo = memo(ForwardRef)
export default Memo
