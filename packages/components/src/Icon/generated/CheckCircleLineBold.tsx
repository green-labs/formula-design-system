import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCheckCircleLineBold = (
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
        d="M24 4.3C13.1 4.3 4.3 13.1 4.3 24c0 10.9 8.8 19.7 19.7 19.7 10.9 0 19.7-8.8 19.7-19.7 0-10.9-8.8-19.7-19.7-19.7Zm0 36C15 40.3 7.7 33 7.7 24S15 7.7 24 7.7 40.3 15 40.3 24 33 40.3 24 40.3Z"
        fill={fill}
      />
      <path
        d="M31.8 15.5 20.4 29.1l-4.2-4.6c-.6-.7-1.6-.7-2.3-.1-.7.6-.7 1.6-.1 2.3l5.4 6c.3.3.7.5 1.2.5s.9-.2 1.2-.6l12.6-15c.6-.7.5-1.7-.2-2.3-.6-.6-1.7-.5-2.2.2Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCheckCircleLineBold)
const Memo = memo(ForwardRef)
export default Memo
