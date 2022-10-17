import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPersonLineRegular = (
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
        d="M24.05 23.5c-4.86 0-8.65-3.65-9.02-8.69-.2-2.69.64-5.17 2.34-7C19.06 6 21.43 5 24.05 5s4.97 1 6.66 2.83c1.71 1.85 2.55 4.33 2.35 6.99-.37 5.03-4.17 8.68-9.02 8.68h.01Zm0-15.5c-1.78 0-3.37.66-4.48 1.85-1.13 1.21-1.68 2.9-1.54 4.74.28 3.88 3.25 5.9 6.03 5.9 2.78 0 5.74-2.03 6.03-5.9.13-1.82-.42-3.5-1.56-4.73-1.12-1.21-2.71-1.87-4.47-1.87l-.01.01ZM39.85 42.5H7.95c-.89 0-1.68-.36-2.23-1.03-.6-.72-.84-1.69-.66-2.68C6.77 29.31 16.03 25 23.9 25c7.87 0 17.13 4.32 18.84 13.79.18.99-.06 1.96-.66 2.68-.55.66-1.35 1.03-2.23 1.03Zm-31.84-3H39.8s.01-.1 0-.17C38.4 31.55 30.58 28 23.91 28S9.42 31.54 8.02 39.33c-.01.07 0 .13 0 .17h-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPersonLineRegular)
const Memo = memo(ForwardRef)
export default Memo
