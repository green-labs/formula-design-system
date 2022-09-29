import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgPhoneFill = (
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="m41.645 32.311-.03-.03c-1.59-1.59-5.1-3.67-6.6-4.42-2.23-1.17-3.29-.48-4.44.54-.23.2-.48.43-.78.65-.19.14-.37.28-.55.41-.84.65-1.08.78-1.54.68-.88-.2-3.47-1.43-5.92-3.98-2.42-2.33-3.83-5.04-4.05-5.98-.11-.46.03-.7.68-1.54.13-.17.27-.35.43-.57.23-.33.45-.59.65-.83.94-1.12 1.58-2.15.54-4.34-.76-1.53-2.85-5.04-4.43-6.62-1.94-1.95-3.51-1.63-4.72-1.09-.85.32-1.64.75-2.44 1.32-1.65 1.06-2.56 2.03-3.17 3.37-.69 1.65-.89 4.72 2.06 9.99 2.96 5.28 4.98 7.94 9.01 11.87 3.88 3.88 7.02 6.21 11.98 8.91 3.57 1.97 5.92 2.57 7.58 2.57 1.04 0 1.8-.23 2.41-.51 1.52-.63 2.38-1.64 3.34-3.13.6-.85 1.03-1.64 1.35-2.49l.09-.48c.11-1.05.26-2.48-1.45-4.31v.01Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgPhoneFill)
const Memo = memo(ForwardRef)
export default Memo
