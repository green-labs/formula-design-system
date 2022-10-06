import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgBookMarkLineRegular = (
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
        d="M36.5 43.55c-.36 0-.72-.13-1-.38L24 32.94 12.5 43.17a1.503 1.503 0 0 1-2.5-1.12V10.11c0-1.49.6-2.95 1.66-4.01a5.627 5.627 0 0 1 4.01-1.66h16.66c1.51 0 2.94.59 4.01 1.66A5.746 5.746 0 0 1 38 10.11v31.95a1.503 1.503 0 0 1-1.5 1.5v-.01ZM15.67 7.44c-.7 0-1.39.29-1.89.78-.5.5-.78 1.18-.78 1.89v28.6l9.34-8.3c.95-.84 2.37-.84 3.32 0l9.34 8.3v-28.6c0-.7-.28-1.39-.78-1.89s-1.18-.78-1.89-.78H15.67Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgBookMarkLineRegular)
const Memo = memo(ForwardRef)
export default Memo
