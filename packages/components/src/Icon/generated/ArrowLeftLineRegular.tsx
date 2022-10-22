import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgArrowLeftLineRegular = (
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
            d="M21.814 9.44a1.5 1.5 0 0 1 2.122 2.12L12.996 22.5h25.629a1.5 1.5 0 0 1 0 3H12.996l10.94 10.94a1.5 1.5 0 0 1-2.122 2.12l-13.5-13.5a1.5 1.5 0 0 1 0-2.12l13.5-13.5Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgArrowLeftLineRegular)
const Memo = memo(ForwardRef)
export default Memo
