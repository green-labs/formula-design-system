import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPeopleLineRegular = (
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
        d="M16.139 24.37c-4.3 0-7.65-3.27-7.98-7.78-.17-2.38.56-4.58 2.07-6.19 1.49-1.6 3.59-2.49 5.91-2.49 2.32 0 4.44.88 5.92 2.47 1.5 1.61 2.23 3.81 2.06 6.21-.32 4.51-3.68 7.78-7.98 7.78Zm0-13.46c-1.48 0-2.8.54-3.71 1.53-.93 1-1.38 2.4-1.27 3.94.25 3.43 2.76 5 4.99 5 2.23 0 4.74-1.56 4.99-4.99.11-1.58-.32-2.95-1.26-3.95-.91-.98-2.23-1.51-3.73-1.51l-.01-.02ZM29.089 40.09h-25.9c-.83 0-1.59-.37-2.1-1.02-.53-.68-.72-1.6-.51-2.47 1.57-6.39 7.67-10.51 15.56-10.51 7.89 0 13.97 4.12 15.55 10.51.22.87.03 1.79-.5 2.47-.51.65-1.27 1.02-2.1 1.02Zm-25.53-3h25.17c-1.61-5.9-7.76-8-12.58-8s-11 2.1-12.59 8ZM34.709 23.81c-3.55 0-6.43-2.83-6.7-6.58-.14-1.99.48-3.83 1.75-5.2 1.26-1.35 3.02-2.1 4.95-2.1 1.93 0 3.71.74 4.96 2.08 1.26 1.36 1.88 3.21 1.74 5.21-.26 3.75-3.15 6.58-6.7 6.58v.01Zm-3.71-6.8c.18 2.49 2 3.8 3.71 3.8s3.53-1.3 3.71-3.8c.08-1.16-.25-2.21-.94-2.96-.68-.73-1.66-1.13-2.77-1.13s-2.07.4-2.75 1.14c-.7.75-1.04 1.8-.96 2.94v.01Z"
        fill={fill}
      />
      <path
        d="M45.049 36.94h-11.03c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h10.33c-1.4-4.26-6.01-5.79-9.64-5.79-2.03 0-3.72.32-5.17.99-.75.35-1.64.02-1.99-.74-.35-.75-.01-1.64.74-1.99 1.85-.85 3.95-1.26 6.42-1.26 6.32 0 11.43 3.46 12.72 8.62.19.78.02 1.62-.46 2.23-.46.59-1.16.93-1.92.93v.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPeopleLineRegular)
const Memo = memo(ForwardRef)
export default Memo
