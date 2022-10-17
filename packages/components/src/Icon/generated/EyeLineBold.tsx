import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgEyeLineBold = (
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
        d="M45.27 22.44c-.03-.06-.06-.11-.09-.16C41.23 16.13 34.35 8.8 24.05 8.8c-7.9 0-14.78 4.36-21.03 13.34-.43.5-.67 1.16-.67 1.86a3.585 3.585 0 0 0 .46 1.71C8.48 34.66 15.59 39.2 23.95 39.2c10.42 0 17.25-7.25 21.17-13.38.53-.66.53-1.43.53-1.82 0-.69-.24-1.27-.38-1.56ZM23.95 35.8c-7.05 0-13.16-3.94-18.14-11.72 5.57-7.99 11.54-11.88 18.24-11.88 8.7 0 14.69 6.39 18.19 11.8-3.45 5.41-9.41 11.8-18.29 11.8Z"
        fill={fill}
      />
      <path
        d="M24.05 15.3c-4.88 0-8.7 3.82-8.7 8.7 0 4.88 3.82 8.7 8.7 8.7 4.88 0 8.7-3.82 8.7-8.7 0-4.88-3.82-8.7-8.7-8.7Zm0 14c-2.97 0-5.3-2.33-5.3-5.3 0-2.97 2.33-5.3 5.3-5.3 2.97 0 5.3 2.33 5.3 5.3 0 2.97-2.33 5.3-5.3 5.3Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgEyeLineBold)
const Memo = memo(ForwardRef)
export default Memo
