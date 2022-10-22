import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgEditCutFill = (
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
            d="M43.5 32.5H18c-.7 0-1.3-.3-1.8-.7-.5-.5-.7-1.1-.7-1.8V4.5c0-1.1-.9-2-2-2s-2 .9-2 2v7h-7c-1.1 0-2 .9-2 2s.9 2 2 2h7V30c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9h14.5v7c0 1.1.9 2 2 2s2-.9 2-2v-7h7c1.1 0 2-.9 2-2s-.9-2-2-2Z"
            fill={fill}
          />
          <path
            d="M34.5 30.5c1.1 0 2-.9 2-2V18c0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9H19.5c-1.1 0-2 .9-2 2s.9 2 2 2H30c.7 0 1.3.3 1.8.7.5.5.7 1.1.7 1.8v10.5c0 1.1.9 2 2 2Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgEditCutFill)
const Memo = memo(ForwardRef)
export default Memo
