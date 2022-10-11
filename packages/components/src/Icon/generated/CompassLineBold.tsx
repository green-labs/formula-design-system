import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgCompassLineBold = (
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
        d="M24 43.7C13.14 43.7 4.3 34.86 4.3 24S13.14 4.3 24 4.3 43.7 13.14 43.7 24 34.86 43.7 24 43.7Zm0-36C15.01 7.7 7.7 15.01 7.7 24c0 8.99 7.31 16.3 16.3 16.3 8.99 0 16.3-7.31 16.3-16.3 0-8.99-7.31-16.3-16.3-16.3Z"
        fill={fill}
      />
      <path
        d="M34.54 13.73c-.11-.21-.35-.33-.64-.33l-12 5.14c-.87.38-1.56.81-2.08 1.34-.58.69-.98 1.33-1.28 2.02l-5.1 11.8-.04.5.14.14c.08.23.28.36.56.36h.2l11.89-5.14c.87-.37 1.56-.81 2.09-1.34.57-.69.98-1.33 1.27-2.02l5.1-11.8.04-.5-.16-.16.01-.01ZM24 26.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgCompassLineBold)
const Memo = memo(ForwardRef)
export default Memo
