import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgCompassLineThin = (
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
        d="M24 43.2C13.41 43.2 4.8 34.59 4.8 24S13.41 4.8 24 4.8 43.2 13.41 43.2 24 34.59 43.2 24 43.2Zm0-36C14.74 7.2 7.2 14.74 7.2 24c0 9.26 7.54 16.8 16.8 16.8 9.26 0 16.8-7.54 16.8-16.8 0-9.26-7.54-16.8-16.8-16.8Z"
        fill={fill}
      />
      <path
        d="M34.54 13.73c-.11-.21-.35-.33-.64-.33l-12 5.14c-.87.37-1.56.81-2.08 1.34-.58.69-.98 1.33-1.28 2.02l-5.1 11.8-.04.51.14.14c.08.23.28.36.56.36h.2l11.89-5.14c.87-.37 1.56-.81 2.09-1.34.57-.69.98-1.33 1.27-2.02l5.1-11.8.04-.51-.16-.16.01-.01ZM24 26.8c-1.55 0-2.8-1.25-2.8-2.8 0-1.55 1.25-2.8 2.8-2.8 1.55 0 2.8 1.25 2.8 2.8 0 1.55-1.25 2.8-2.8 2.8Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgCompassLineThin)
const Memo = memo(ForwardRef)
export default Memo
