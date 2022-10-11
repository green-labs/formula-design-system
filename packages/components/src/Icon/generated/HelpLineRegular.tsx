import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgHelpLineRegular = (
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
        d="M24.07 42.1c-1.17 0-2.35-.11-3.52-.33-3.46-.65-6.65-2.36-9.24-4.94-2.59-2.58-4.29-5.78-4.93-9.24-.73-3.33-.4-6.94.98-10.38 1.47-3.39 3.78-6.19 6.7-8.14C17.07 7.06 20.56 6 24.15 6c4.81 0 9.45 1.88 12.73 5.17 3.28 3.29 5.27 7.95 5.27 12.83 0 3.59-1.06 7.08-3.07 10.09-2.02 3.03-4.91 5.41-8.14 6.7a18.53 18.53 0 0 1-6.87 1.32v-.01Zm.08-32.9c-2.95 0-5.83.88-8.31 2.53-2.41 1.6-4.31 3.92-5.52 6.71-1.12 2.81-1.41 5.77-.81 8.52.54 2.87 1.94 5.48 4.07 7.61 2.13 2.13 4.74 3.53 7.56 4.06 2.93.55 5.91.27 8.61-.81 2.63-1.05 5-3.01 6.66-5.5 1.66-2.48 2.53-5.36 2.53-8.31 0-4.02-1.54-7.78-4.33-10.57s-6.5-4.23-10.47-4.23l.01-.01Z"
        fill={fill}
      />
      <path
        d="M23.54 35.31c-1.03 0-1.84-.81-1.84-1.84s.81-1.84 1.84-1.84 1.84.79 1.84 1.84-.81 1.84-1.84 1.84Zm.02-6.33c-.91 0-1.46-.62-1.46-1.67v-.43c0-2.03.93-3.45 3.1-4.75 1.75-1.07 2.41-2.03 2.41-3.54 0-1.93-1.46-3.22-3.64-3.22-1.97 0-3.28.96-3.78 2.78-.27.96-.63 1.29-1.38 1.29-.83 0-1.3-.49-1.3-1.35 0-.65.12-1.19.41-1.81.91-2.18 3.21-3.49 6.16-3.49 3.87 0 6.57 2.33 6.57 5.67 0 2.26-1.06 3.99-3.24 5.3-1.87 1.1-2.44 1.92-2.44 3.51 0 1.12-.49 1.72-1.41 1.72v-.01Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgHelpLineRegular)
const Memo = memo(ForwardRef)
export default Memo
