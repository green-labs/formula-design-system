import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShareAndroidLineRegular = (
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
        d="M35.05 31c-1.6 0-3.05.63-4.13 1.64L17.9 25.05c.12-.48.2-.98.2-1.5s-.07-.99-.19-1.47l13.34-7.34a6.03 6.03 0 0 0 3.8 1.35c3.34 0 6.05-2.71 6.05-6.05S38.39 4 35.05 4 29 6.71 29 10.05c0 .74.14 1.45.39 2.11l-13.02 7.16a6.043 6.043 0 0 0-4.32-1.82C8.71 17.5 6 20.21 6 23.55s2.71 6.05 6.05 6.05c1.68 0 3.2-.69 4.29-1.79l12.91 7.53c-.16.54-.25 1.12-.25 1.71 0 3.34 2.71 6.05 6.05 6.05s6.05-2.71 6.05-6.05S38.39 31 35.05 31Zm0-23.9a2.949 2.949 0 1 1 0 5.9 2.949 2.949 0 1 1 0-5.9Zm-23 19.4a2.949 2.949 0 1 1 0-5.9c1.02 0 1.91.52 2.45 1.3.03.07.05.14.09.21.03.05.06.08.09.12.2.4.33.84.33 1.32 0 .48-.11.89-.3 1.28-.03.04-.07.08-.1.13-.05.08-.08.16-.11.25a2.95 2.95 0 0 1-2.44 1.29h-.01Zm23 13.5a2.949 2.949 0 1 1 0-5.9 2.949 2.949 0 1 1 0 5.9Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShareAndroidLineRegular)
const Memo = memo(ForwardRef)
export default Memo
