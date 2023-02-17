import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPeopleAddLineRegular = (
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
        d="M20.644 27.37c-4.3 0-7.65-3.27-7.98-7.78-.17-2.38.56-4.58 2.07-6.19 1.49-1.6 3.59-2.49 5.91-2.49 2.32 0 4.44.88 5.92 2.47 1.5 1.61 2.23 3.81 2.06 6.21-.32 4.51-3.68 7.78-7.98 7.78Zm0-13.46c-1.48 0-2.8.54-3.71 1.53-.93 1-1.38 2.4-1.27 3.94.25 3.43 2.76 5 4.99 5 2.23 0 4.74-1.56 4.99-4.99.11-1.58-.32-2.95-1.26-3.95-.91-.98-2.23-1.51-3.73-1.51l-.01-.02ZM33.594 43.09h-25.9c-.83 0-1.59-.37-2.1-1.02-.53-.68-.72-1.6-.51-2.47 1.57-6.39 7.67-10.51 15.56-10.51 7.89 0 13.97 4.12 15.55 10.51.22.87.03 1.79-.5 2.47-.51.65-1.27 1.02-2.1 1.02Zm-25.53-3h25.17c-1.61-5.9-7.76-8-12.58-8s-11 2.1-12.59 8ZM31.667 14.167h4.166v4.166c0 .917.75 1.667 1.667 1.667s1.667-.75 1.667-1.667v-4.166h4.166c.917 0 1.667-.75 1.667-1.667s-.75-1.667-1.667-1.667h-4.166V6.667C39.167 5.75 38.417 5 37.5 5s-1.667.75-1.667 1.667v4.166h-4.166c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPeopleAddLineRegular)
const Memo = memo(ForwardRef)
export default Memo
