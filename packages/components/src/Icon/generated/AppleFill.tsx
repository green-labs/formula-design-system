import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgAppleFill = (
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
        d="M42.475 21.355c-.392-3.377-2.407-6.612-5.332-8.511-2.291-1.478-4.824-1.9-7.055-1.207-.272.06-.573.181-.905.272.181-.302.422-.573.573-.905 1.99-4.07 2.231-6.693.724-7.96-.573-.512-1.327-.392-1.598-.361-1.418.21-6.272 1.778-8.413 5.005a4.762 4.762 0 0 0-.361 4.04c.09.21.21.422.331.633a39.911 39.911 0 0 0-2.593-1.055c-2.864-.664-5.668 0-7.9 1.839-2.02 1.719-3.497 4.221-4.16 7.116-.09.361-2.201 9.015 6.573 19.688 1.417 1.9 4.01 4.191 6.573 4.372 1.236.09 2.352-.331 3.226-1.176 1.236-1.206 2.683-1.206 3.89 0a4.01 4.01 0 0 0 2.894 1.206h.332c2.563-.18 5.155-2.472 6.542-4.311 7.237-8.804 6.694-18.151 6.664-18.634l-.005-.051ZM16.55 20.019c-.995.181-1.568 1.026-1.84 1.72-.693 1.657-.512 3.949.423 5.276a1.53 1.53 0 0 1-.362 2.11 1.57 1.57 0 0 1-.875.271 1.49 1.49 0 0 1-1.236-.633c-1.537-2.2-1.839-5.548-.723-8.17.814-1.96 2.291-3.197 4.13-3.528.814-.151 1.598.422 1.75 1.236.15.814-.423 1.598-1.237 1.749l-.03-.03Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgAppleFill)
const Memo = memo(ForwardRef)
export default Memo
