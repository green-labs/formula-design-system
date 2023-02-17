import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgReUpLineRegular = (
  { size = "xl", sizePx, color, ...props }: IconProps,
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
      viewBox="0 0 48 48"
      ref={ref}
      {...props}
    >
      <path
        d="M36.116 7.454a1.55 1.55 0 0 0-2.192 0l-7.654 7.653a1.55 1.55 0 0 0 2.192 2.192l5.017-5.016v13.974c0 6.853-5.677 12.792-12.605 12.792-6.846 0-11.622-5.41-11.622-12.35v-5.164a1.55 1.55 0 0 0-3.1 0v5.164c0 8.406 5.926 15.45 14.722 15.45 8.713 0 15.705-7.4 15.705-15.892V12.3l4.998 4.998a1.55 1.55 0 0 0 2.192-2.192l-7.653-7.653ZM7.987 11.466a1.988 1.988 0 1 0-.002-3.973 1.988 1.988 0 0 0 .002 3.973ZM9.974 15.184a1.982 1.982 0 0 1-1.987 1.988A1.982 1.982 0 0 1 6 15.184c0-1.101.885-1.987 1.987-1.987s1.987.886 1.987 1.987Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgReUpLineRegular)
const Memo = memo(ForwardRef)
export default Memo
