import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMicLineBold = (
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
        d="M36 17.67c-.94 0-1.7.76-1.7 1.7v3c0 5.68-4.62 10.3-10.3 10.3-5.68 0-10.3-4.62-10.3-10.3v-3c0-.94-.76-1.7-1.7-1.7s-1.7.76-1.7 1.7v3c0 6.98 5.25 12.74 12 13.58v4.68h-4.31c-.88 0-1.6.72-1.6 1.6 0 .88.72 1.6 1.6 1.6h12c.88 0 1.6-.72 1.6-1.6 0-.88-.72-1.6-1.6-1.6H25.7v-4.68c6.75-.84 12-6.61 12-13.58v-3c0-.94-.76-1.7-1.7-1.7Z"
        fill={fill}
      />
      <path
        d="M16.3 22.17c0 4.3 3.45 7.8 7.7 7.8s7.7-3.5 7.7-7.8v-10.3c0-4.32-3.38-7.7-7.7-7.7-1 0-1.96.24-2.77.47-.07.02-.14.04-.2.07-1.03.44-1.86.98-2.53 1.66-.74.74-1.26 1.51-1.66 2.43-.46 1.06-.64 2.09-.54 3.06v10.31Zm3.66-12.03c.22-.52.51-.94.94-1.37.35-.35.79-.64 1.37-.9.58-.16 1.18-.3 1.73-.3 2.45 0 4.3 1.85 4.3 4.3v10.3c0 2.43-1.93 4.4-4.3 4.4s-4.3-2.01-4.3-4.4v-10.4c0-.07 0-.14-.01-.21-.05-.4.04-.88.27-1.42Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMicLineBold)
const Memo = memo(ForwardRef)
export default Memo
