import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPostSquareLineRegular = (
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
        d="M30.6 41.955H14.78c-4.73 0-8.59-3.85-8.59-8.59v-15.82c0-4.74 3.85-8.59 8.59-8.59h8.31c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-8.31a5.6 5.6 0 0 0-5.59 5.59v15.83a5.6 5.6 0 0 0 5.59 5.59h15.83a5.6 5.6 0 0 0 5.59-5.59v-9.22c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v9.22c0 4.73-3.85 8.59-8.59 8.59l-.01-.01Z"
        fill={fill}
      />
      <path
        d="M40.44 7.405a4.66 4.66 0 0 0-3.31-1.37c-1.25 0-2.43.49-3.31 1.37l-16.14 16.14c-.14.14-.22.32-.23.51l-.32 5.48a1.13 1.13 0 0 0 1.12 1.19h.07l5.48-.32c.19-.01.38-.09.51-.23l16.02-16.03c.88-.88 1.4-1.99 1.47-3.12.09-1.37-.4-2.65-1.36-3.61v-.01Zm-1.9 4.89-1.35 1.35-2.99-2.99 1.36-1.36c.39-.39.87-.63 1.34-.68.7-.07 1.37.19 1.83.71.73.83.65 2.14-.18 2.97h-.01Zm-18.78 15.7.22-3.11 12.41-12.41 2.99 2.99-12.41 12.41-3.17.17-.04-.04v-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPostSquareLineRegular)
const Memo = memo(ForwardRef)
export default Memo
