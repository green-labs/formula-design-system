import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPlusCircleLineBold = (
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
        d="M24 4.3C13.1 4.3 4.3 13.1 4.3 24c0 10.9 8.8 19.7 19.7 19.7 10.9 0 19.7-8.8 19.7-19.7 0-10.9-8.8-19.7-19.7-19.7Zm0 36C15 40.3 7.7 33 7.7 24S15 7.7 24 7.7 40.3 15 40.3 24 33 40.3 24 40.3Z"
        fill={fill}
      />
      <path
        d="M31.5 22.4h-5.9v-5.9c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6v5.9h-5.9c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h5.9v5.9c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-5.9h5.9c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPlusCircleLineBold)
const Memo = memo(ForwardRef)
export default Memo
