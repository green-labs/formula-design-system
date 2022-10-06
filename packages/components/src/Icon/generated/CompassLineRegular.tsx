import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgCompassLineRegular = (
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
        d="M24 43.5C13.25 43.5 4.5 34.75 4.5 24S13.25 4.5 24 4.5 43.5 13.25 43.5 24 34.75 43.5 24 43.5Zm0-36C14.9 7.5 7.5 14.9 7.5 24S14.9 40.5 24 40.5 40.5 33.1 40.5 24 33.1 7.5 24 7.5Z"
        fill={fill}
      />
      <path
        d="M34.54 13.73c-.11-.21-.35-.33-.64-.33l-11.97 5.13c-.98.29-1.78 1.02-2.11 1.35-.57.69-.98 1.33-1.28 2.02l-5.1 11.8-.04.5.14.14c.08.23.28.36.56.36h.2l11.89-5.14c.87-.37 1.56-.81 2.09-1.34.57-.69.98-1.33 1.27-2.02l5.1-11.8.04-.51-.16-.16h.01ZM24 27c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgCompassLineRegular)
const Memo = memo(ForwardRef)
export default Memo
