import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgLocationLineRegular = (
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
        d="M25.223 41.204c-.16 0-.32-.02-.49-.05a2.48 2.48 0 0 1-2.03-2.46v-13.4h-13.4c-1.19 0-2.17-.76-2.44-1.9s.3-2.31 1.37-2.85l29.44-13.51c.89-.45 2.03-.25 2.79.5.76.75.95 1.87.5 2.8l-13.49 29.38c-.36.9-1.25 1.48-2.25 1.48v.01Zm-.49-2.7-.02.04.02-.04Zm-13.11-16.21h11.88c.58 0 1.17.24 1.57.64.39.39.63.98.63 1.56v11.88l11.95-26.03-26.03 11.95Zm27.35-12.56h-.03.03Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgLocationLineRegular)
const Memo = memo(ForwardRef)
export default Memo
