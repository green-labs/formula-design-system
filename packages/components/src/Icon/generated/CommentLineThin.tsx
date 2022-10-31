import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCommentLineThin = (
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
        d="M12.95 41.42a1.272 1.272 0 0 1-1.27-1.27v-4.93h-1.53c-1.58 0-3.19-.66-4.3-1.77a6.042 6.042 0 0 1-1.77-4.3v-16.5c0-1.58.66-3.19 1.77-4.3a6.116 6.116 0 0 1 4.3-1.77h27.6c1.51 0 3.13.64 4.34 1.72 1.2 1.19 1.83 2.72 1.83 4.35v16.5c0 1.58-.66 3.19-1.77 4.3a6.042 6.042 0 0 1-4.3 1.77H22.54l-8.88 5.98c-.21.14-.46.22-.71.22Zm-2.8-32.3c-.95 0-1.84.37-2.5 1.03-.63.63-1.03 1.59-1.03 2.5v16.5c0 .95.37 1.84 1.03 2.5.66.66 1.59 1.03 2.5 1.03h2.8c.7 0 1.27.57 1.27 1.27v3.81l6.85-4.62c.35-.29.82-.46 1.28-.46h15.5c.95 0 1.84-.37 2.5-1.03.63-.63 1.03-1.59 1.03-2.5v-16.5c0-.95-.37-1.84-1.03-2.5-.69-.61-1.71-1.03-2.6-1.03h-27.6Z"
        fill={fill}
      />
      <path
        d="M13.83 20.45c0-1.15.97-2.12 2.12-2.12 1.15 0 2.12.97 2.12 2.12 0 1.15-.97 2.12-2.12 2.12-1.15 0-2.12-.97-2.12-2.12ZM21.83 20.45c0-1.15.97-2.12 2.12-2.12 1.15 0 2.12.97 2.12 2.12 0 1.15-.97 2.12-2.12 2.12-1.15 0-2.12-.97-2.12-2.12ZM29.83 20.45c0-1.15.97-2.12 2.12-2.12 1.15 0 2.12.97 2.12 2.12 0 1.15-.97 2.12-2.12 2.12-1.15 0-2.12-.97-2.12-2.12Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCommentLineThin)
const Memo = memo(ForwardRef)
export default Memo
