import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgHelpLineThin = (
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
        d="M23.995 41.75c-1.15 0-2.32-.11-3.46-.32-3.4-.64-6.54-2.32-9.08-4.86-2.54-2.54-4.22-5.68-4.86-9.08-.72-3.3-.38-6.83.97-10.22 1.44-3.31 3.71-6.08 6.59-8 2.96-1.98 6.39-3.02 9.92-3.02 4.73 0 9.29 1.85 12.52 5.08 3.34 3.34 5.18 7.82 5.18 12.62 0 3.53-1.04 6.96-3.02 9.92-1.99 2.98-4.83 5.32-8 6.59-2.15.86-4.42 1.29-6.76 1.29Zm.08-32.9c-3.01 0-5.95.89-8.48 2.58-2.45 1.64-4.4 4-5.63 6.84-1.15 2.89-1.44 5.89-.82 8.71.54 2.9 1.98 5.59 4.15 7.76 2.17 2.17 4.84 3.6 7.72 4.14.99.19 1.99.28 2.98.28 2.01 0 3.95-.37 5.79-1.11 2.69-1.08 5.1-3.07 6.8-5.61 1.69-2.53 2.58-5.47 2.58-8.48 0-4.1-1.57-7.93-4.42-10.78-2.74-2.75-6.64-4.32-10.68-4.32l.01-.01Z"
        fill={fill}
      />
      <path
        d="M23.465 34.96c-.86 0-1.54-.68-1.54-1.54s.68-1.54 1.54-1.54 1.54.66 1.54 1.54-.68 1.54-1.54 1.54Zm.02-6.33c-1.01 0-1.16-.86-1.16-1.37v-.43c0-1.91.88-3.26 2.95-4.5 1.84-1.12 2.55-2.19 2.55-3.8 0-2.11-1.58-3.52-3.94-3.52-2.12 0-3.53 1.04-4.07 3-.25.91-.55 1.07-1.09 1.07-.67 0-1-.35-1-1.05 0-.61.11-1.11.38-1.69.86-2.08 3.06-3.32 5.89-3.32 3.69 0 6.27 2.21 6.27 5.37 0 2.14-1.01 3.79-3.09 5.04-1.95 1.15-2.58 2.07-2.58 3.77 0 1.42-.84 1.42-1.11 1.42v.01Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgHelpLineThin)
const Memo = memo(ForwardRef)
export default Memo
