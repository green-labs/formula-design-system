import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShareIosLineRegular = (
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
        d="M38.93 18.442a5.334 5.334 0 0 0-3.68-1.44H31.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h3.75c.61 0 1.2.23 1.62.63.4.38.63.88.63 1.4v16.94c0 .52-.22 1.02-.63 1.4-.42.4-1.02.63-1.62.63h-22.5c-.61 0-1.2-.23-1.62-.63-.4-.38-.63-.88-.63-1.4v-16.94c0-.52.22-1.02.63-1.4.42-.4 1.02-.63 1.62-.63h3.75c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-3.75c-1.38 0-2.69.51-3.68 1.44-1 .94-1.57 2.25-1.57 3.59v16.94c0 1.34.57 2.65 1.57 3.59.99.93 2.29 1.44 3.68 1.44h22.5c1.38 0 2.69-.51 3.68-1.44 1-.94 1.57-2.25 1.57-3.59v-16.94c0-1.34-.57-2.65-1.57-3.59Z"
        fill={fill}
      />
      <path
        d="m17.56 13.063 4.94-4.94v18.88c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V8.123l4.94 4.94c.29.29.68.44 1.06.44s.77-.15 1.06-.44c.59-.59.59-1.54 0-2.12l-7.5-7.5a1.49 1.49 0 0 0-2.12 0l-7.5 7.5a1.49 1.49 0 0 0 0 2.12c.59.58 1.54.59 2.12 0Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShareIosLineRegular)
const Memo = memo(ForwardRef)
export default Memo
