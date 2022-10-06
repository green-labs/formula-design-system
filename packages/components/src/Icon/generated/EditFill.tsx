import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgEditFill = (
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
        d="M40.5 42.105h-33c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h33c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5ZM36.63 17.995c-.21 0-.41-.08-.57-.23l-8.09-8.1a.803.803 0 0 1 0-1.13l1.97-1.98c.43-.43.99-.66 1.59-.66.6 0 1.17.23 1.59.66l6.05 6.05c.42.43.66.99.66 1.59 0 .6-.24 1.17-.66 1.59l-1.98 1.97c-.15.15-.35.23-.56.23v.01ZM12.12 35.865c-.6 0-1.16-.23-1.59-.66-.48-.48-.72-1.14-.65-1.82l.68-6.68c.05-.51.28-1 .65-1.36l13.93-13.98c.15-.15.35-.24.57-.24.22 0 .42.08.57.23l8.09 8.09c.15.15.23.35.23.57 0 .22-.08.42-.24.57l-13.98 13.93c-.37.36-.85.59-1.36.65l-6.67.68h-.23v.02Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgEditFill)
const Memo = memo(ForwardRef)
export default Memo
