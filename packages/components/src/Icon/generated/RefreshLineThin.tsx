import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgRefreshLineThin = (
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
        d="M17.15 40.135c2.08.86 4.31 1.3 6.57 1.3 1.12 0 2.25-.11 3.37-.32 3.34-.65 6.37-2.26 8.76-4.65.5-.5.5-1.32 0-1.82s-1.32-.5-1.82 0c-2.04 2.03-4.61 3.4-7.44 3.95-2.88.56-5.81.27-8.46-.83-2.73-1.13-4.98-2.97-6.53-5.34-1.62-2.34-2.47-5.13-2.47-8.07 0-2.94.85-5.73 2.49-8.1 1.54-2.35 3.79-4.19 6.52-5.32 2.65-1.1 5.58-1.38 8.46-.83 2.83.55 5.4 1.91 7.44 3.95 1.96 1.96 2.91 3.09 3.37 3.71h-8.46c-.71 0-1.29.58-1.29 1.29 0 .71.58 1.29 1.29 1.29h11.2c.71 0 1.29-.58 1.29-1.29v-11.2c0-.71-.58-1.29-1.29-1.29-.71 0-1.29.58-1.29 1.29v7.61c-.7-.84-1.67-1.89-3.01-3.22-2.4-2.4-5.43-4.01-8.76-4.65-3.38-.66-6.82-.32-9.94.97-3.21 1.33-5.86 3.5-7.67 6.26-1.91 2.76-2.92 6.06-2.92 9.53 0 3.47 1.01 6.76 2.91 9.5 1.82 2.78 4.48 4.96 7.68 6.28Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgRefreshLineThin)
const Memo = memo(ForwardRef)
export default Memo
