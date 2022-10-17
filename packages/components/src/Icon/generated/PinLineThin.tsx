import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPinLineThin = (
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
        d="m32.88 18.29-1.31-2.71c-.19-.37-.27-.78-.27-1.26V7.99h.6c.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2h-16c-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2h.8v6.32c0 .49-.09.89-.28 1.28l-1.29 2.67c-1.52 2.95-2.33 6.43-2.33 10.05 0 1.25.95 2.2 2.2 2.2h7.7v10.7c0 .66.54 1.2 1.2 1.2.66 0 1.2-.54 1.2-1.2v-10.7H33c1.25 0 2.2-.95 2.2-2.2 0-3.35-.78-6.72-2.32-10.02ZM15.2 28.11c.03-3.17.74-6.19 2.08-8.78l1.29-2.68c.35-.71.53-1.47.53-2.34V7.99h9.8v6.32c0 .86.17 1.63.52 2.32l1.29 2.69c1.35 2.9 2.05 5.85 2.09 8.79H15.2Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPinLineThin)
const Memo = memo(ForwardRef)
export default Memo
