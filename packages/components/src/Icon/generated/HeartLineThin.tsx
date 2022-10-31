import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgHeartLineThin = (
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
        d="M24 41.8c-.6 0-1.1-.2-1.5-.6-8.8-6-17.8-13.6-17.7-24.7 0-5.7 4.5-10.3 10.1-10.3 4.6 0 7.6 3 9.1 5 1.5-2 4.5-5 9.1-5 5.5 0 10 4.6 10.1 10.3.1 11.1-8.9 18.7-17.7 24.7-.4.4-.9.6-1.5.6ZM14.9 8.7c-4.2 0-7.7 3.5-7.7 7.9-.1 9.9 8.4 17.1 16.7 22.7.1 0 .1.1.2.1.1-.1 0-.1.1-.1 8.3-5.6 16.8-12.7 16.7-22.7-.1-4.4-3.5-7.9-7.7-7.9-5.3 0-8 5.3-8 5.3-.2.4-.6.7-1.1.7-.5 0-.9-.3-1.1-.7-.1 0-2.8-5.3-8.1-5.3Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgHeartLineThin)
const Memo = memo(ForwardRef)
export default Memo
