import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPlusCircleLineThin = (
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
        d="M24 43.2c10.6 0 19.2-8.6 19.2-19.2S34.6 4.8 24 4.8 4.8 13.4 4.8 24 13.4 43.2 24 43.2Zm0-36c9.3 0 16.8 7.5 16.8 16.8S33.3 40.8 24 40.8 7.2 33.3 7.2 24 14.7 7.2 24 7.2Z"
        fill={fill}
      />
      <path
        d="M16.5 25.4h6.1v6.1c0 .7.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4v-6.1h6.1c.7 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4h-6.1v-6.1c0-.7-.6-1.4-1.4-1.4-.8 0-1.4.6-1.4 1.4v6.1h-6.1c-.7 0-1.4.6-1.4 1.4 0 .8.7 1.4 1.4 1.4Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPlusCircleLineThin)
const Memo = memo(ForwardRef)
export default Memo
