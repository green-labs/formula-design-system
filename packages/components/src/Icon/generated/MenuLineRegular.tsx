import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgMenuLineRegular = (
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M39.18 13.27H8.64c-.9 0-1.64-.73-1.64-1.64 0-.91.73-1.63 1.64-1.63h30.54a1.641 1.641 0 0 1 0 3.28v-.01ZM39.18 25.27H8.64a1.641 1.641 0 0 1 0-3.28h30.54a1.641 1.641 0 0 1 0 3.28ZM39.18 37.27H8.64a1.641 1.641 0 0 1 0-3.28h30.54a1.641 1.641 0 0 1 0 3.28Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgMenuLineRegular)
const Memo = memo(ForwardRef)
export default Memo
