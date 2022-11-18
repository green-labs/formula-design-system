import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPersonCircleFill = (
  { size = "xl", sizePx, color = "gray-90", ...props }: IconProps,
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
        d="M24 4.5C13.248 4.5 4.5 13.248 4.5 24S13.248 43.5 24 43.5 43.5 34.752 43.5 24 34.752 4.5 24 4.5Zm-4.708 10.952C20.48 14.192 22.152 13.5 24 13.5c1.849 0 3.505.697 4.698 1.963 1.208 1.283 1.796 3.006 1.657 4.858C30.078 24 27.228 27 24 27c-3.228 0-6.083-3-6.355-6.68-.138-1.867.449-3.596 1.647-4.868ZM24 40.5a16.451 16.451 0 0 1-11.813-4.99 11.524 11.524 0 0 1 3.295-3.134C17.872 30.844 20.896 30 24 30c3.104 0 6.128.844 8.515 2.376a11.519 11.519 0 0 1 3.297 3.135A16.448 16.448 0 0 1 24 40.5Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPersonCircleFill)
const Memo = memo(ForwardRef)
export default Memo
