import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgChevronRightLineRegular = (
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
        d="M16.254 39.301c-.46 0-.92-.18-1.27-.53-.7-.7-.7-1.84 0-2.55l12.22-12.22-12.22-12.23a1.78 1.78 0 0 1 0-2.54c.7-.71 1.84-.71 2.54 0l13.5 13.5c.7.7.7 1.84 0 2.55l-13.5 13.49c-.35.35-.81.53-1.27.53Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgChevronRightLineRegular)
const Memo = memo(ForwardRef)
export default Memo
