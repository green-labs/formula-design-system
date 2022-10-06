import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgBookMarkLineThin = (
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
        d="M11.06 43.14c.43.19.94.12 1.29-.2L24 32.57l11.66 10.37a1.188 1.188 0 0 0 1.29.19c.43-.19.71-.62.71-1.09V10.05c0-1.52-.59-2.91-1.55-3.75-.96-.96-2.39-1.55-3.75-1.55H15.65c-1.52 0-2.91.59-3.75 1.55-1.01 1.02-1.55 2.31-1.55 3.75v32c0 .47.28.9.71 1.09Zm1.69-33.09c0-.8.29-1.49.9-2.11.43-.49 1.18-.79 2-.79h16.7c.73 0 1.54.33 2.11.9.49.43.79 1.18.79 2v29.33l-9.8-8.72s-.05-.04-.08-.06c-.42-.31-.89-.47-1.37-.47-.48 0-.95.16-1.37.47-.03.02-.05.04-.08.06l-9.8 8.72V10.05Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgBookMarkLineThin)
const Memo = memo(ForwardRef)
export default Memo
