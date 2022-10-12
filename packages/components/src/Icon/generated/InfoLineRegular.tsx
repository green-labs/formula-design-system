import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgInfoLineRegular = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 24C4.5 13.234 13.234 4.5 24 4.5S43.5 13.234 43.5 24 34.766 43.5 24 43.5 4.5 34.766 4.5 24ZM24 7.5C14.89 7.5 7.5 14.89 7.5 24S14.89 40.5 24 40.5 40.5 33.11 40.5 24 33.11 7.5 24 7.5Z"
        fill={fill}
      />
      <path d="M24 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill={fill} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.5 20.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h1Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgInfoLineRegular)
const Memo = memo(ForwardRef)
export default Memo
