import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgTouchLineBold = (
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
    <div>
      {
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
            d="M39.65 28.7c0-3.8-3-6.7-7-6.7h-4.8v-6.3c0-2.8-2.2-5-4.9-5s-4.8 2.2-4.8 5v10.8c-.2-.2-.4-.3-.5-.4l-.1-.1c-2.1-1.5-5.1-1.4-7-.4-1.9 1-2.3 2.4-2.3 3.4 0 1.4 1 2.5 2.6 4.2l.6.6s2.9 3.1 3.8 4.1c3.5 3.9 6.7 6.9 13.1 6.9 3.9 0 6.8-1 8.7-2.9 2.5-2.5 2.7-6.2 2.7-8.7v-4.5h-.1Zm-5.1 10.7c-1.2 1.3-3.4 1.9-6.3 1.9-5 0-7.3-2.2-10.5-5.7-.9-1-3.8-4.1-3.9-4.2l-.6-.6c-.5-.6-1.4-1.5-1.6-1.9 0-.1.2-.2.4-.3.9-.5 2.5-.5 3.4.1.5.4 1.5 1.3 2.4 2.4.6.6 1.5.8 2.3.5.8-.3 1.3-1.1 1.3-2V15.7c0-.8.5-1.6 1.4-1.6.8 0 1.5.7 1.5 1.6v7.2c0 1.4 1.1 2.5 2.5 2.5h5.7c2.1 0 3.6 1.4 3.6 3.3v4.4c.2 3.1-.4 5-1.6 6.3Z"
            fill={fill}
          />
          <path
            d="M11.05 15c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-4.5 3.7-8.2 8.2-8.2 4.5 0 8.2 3.7 8.2 8.2 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-6.5-5.3-11.8-11.8-11.8-6.5 0-11.8 5.3-11.8 11.8Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgTouchLineBold)
const Memo = memo(ForwardRef)
export default Memo
