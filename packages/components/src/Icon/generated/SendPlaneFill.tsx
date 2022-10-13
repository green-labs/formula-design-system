import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgSendPlaneFill = (
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
        d="m41.248 21.801-.012-.005L9.315 8.14a1.816 1.816 0 0 0-1.712.167 1.9 1.9 0 0 0-.859 1.587l2 9.733a1.85 1.85 0 0 0 1.505 1.816l15.955 2.32a.308.308 0 0 1 0 .606L10.25 26.69a1.85 1.85 0 0 0-1.506 1.815l-2 9.735a1.817 1.817 0 0 0 .816 1.517 1.845 1.845 0 0 0 1.753.16l31.92-13.577.015-.006a2.467 2.467 0 0 0 0-4.533Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgSendPlaneFill)
const Memo = memo(ForwardRef)
export default Memo
