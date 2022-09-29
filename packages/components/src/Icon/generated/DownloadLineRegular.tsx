import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgDownloadLineRegular = (
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
        d="M36 42.5H12a5.46 5.46 0 0 1-3.89-1.61A5.46 5.46 0 0 1 6.5 37v-4c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v4c0 .67.26 1.3.73 1.77s1.1.73 1.77.73h24c.67 0 1.3-.26 1.77-.73s.73-1.1.73-1.77v-4c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v4c0 1.47-.57 2.85-1.61 3.89A5.46 5.46 0 0 1 36 42.5Z"
        fill={fill}
      />
      <path
        d="M35.06 20.94a1.49 1.49 0 0 0-2.12 0l-7.44 7.44V8c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v20.38l-7.44-7.44a1.49 1.49 0 0 0-2.12 0 1.49 1.49 0 0 0 0 2.12l10 10c.14.14.31.25.49.33h.02a1.42 1.42 0 0 0 1.1 0h.02c.19-.08.35-.19.49-.33l10-10c.59-.59.59-1.54 0-2.12Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgDownloadLineRegular)
const Memo = memo(ForwardRef)
export default Memo
