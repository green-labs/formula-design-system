import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgHeartLineRegular = (
  {
    size = "xl",
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M24.5 42c-.61 0-1.19-.18-1.69-.52C13.94 35.46 4.89 27.79 5 16.56 5.06 10.74 9.73 6 15.42 6c4.51 0 7.5 2.77 9.09 4.78C26.09 8.77 29.09 6 33.6 6c5.68 0 10.35 4.74 10.41 10.56.11 11.23-8.94 18.9-17.81 24.92-.5.34-1.08.52-1.69.52h-.01ZM15.42 9c-4.04 0-7.37 3.41-7.41 7.59-.1 9.81 8.28 16.83 16.5 22.41 8.22-5.57 16.6-12.6 16.5-22.41C40.97 12.4 37.64 9 33.6 9c-5.06 0-7.72 5.12-7.75 5.17a1.5 1.5 0 0 1-2.68-.01c-.02-.05-2.69-5.17-7.74-5.17l-.01.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgHeartLineRegular)
const Memo = memo(ForwardRef)
export default Memo
