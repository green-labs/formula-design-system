import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCalendarLineRegular = (
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
        d="m30.72 21.14-8.54 8.9-3.92-3.92a1.49 1.49 0 0 0-2.12 0c-.58.59-.59 1.54 0 2.12l5 5c.28.28.66.44 1.06.44h.02c.4 0 .79-.17 1.07-.46l9.6-10c.57-.6.55-1.55-.04-2.12a1.5 1.5 0 0 0-2.12.04h-.01Z"
        fill={fill}
      />
      <path
        d="M36.46 6.15V4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V6H15.2V4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.55a8.59 8.59 0 0 0-7.7 8.54v21.82c0 4.74 3.85 8.59 8.59 8.59h21.82c4.74 0 8.59-3.85 8.59-8.59V14.59c0-4.21-3.04-7.71-7.04-8.44ZM13.09 9h21.82a5.6 5.6 0 0 1 5.59 5.59v.5h-33v-.5A5.6 5.6 0 0 1 13.09 9Zm21.82 33H13.09a5.6 5.6 0 0 1-5.59-5.59V18.09h33v18.32A5.6 5.6 0 0 1 34.91 42Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCalendarLineRegular)
const Memo = memo(ForwardRef)
export default Memo
