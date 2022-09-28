import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgMicSlashFill = (
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
        d="M16.5 22.16V12c0-4.206 3.294-7.5 7.5-7.5a7.47 7.47 0 0 1 6.469 3.688L16.5 22.16ZM40.06 4.94a1.5 1.5 0 0 0-2.12 0l-31.5 31.5a1.5 1.5 0 0 0 2.12 2.12l31.5-31.5a1.5 1.5 0 0 0 0-2.12ZM12 18a1.5 1.5 0 0 1 1.5 1.5v3c0 .803.092 1.604.275 2.386l-2.399 2.395A13.413 13.413 0 0 1 10.5 22.5v-3A1.5 1.5 0 0 1 12 18ZM22.5 35.917V40.5H18a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 0 0 0-3h-4.5v-4.583c6.74-.75 12-6.48 12-13.417v-3a1.5 1.5 0 0 0-3 0v3a10.513 10.513 0 0 1-15.094 9.436L17.19 34.15a13.416 13.416 0 0 0 5.311 1.766Z"
        fill={fill}
      />
      <path
        d="M31.5 22.406V19.84l-9.792 9.795a7.364 7.364 0 0 0 7.594-1.894 7.584 7.584 0 0 0 2.198-5.335Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgMicSlashFill)
const Memo = memo(ForwardRef)
export default Memo
