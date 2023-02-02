import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCalendarLineThin = (
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
        d="M22.205 33.405c-.32 0-.63-.13-.86-.36l-5-5a1.22 1.22 0 0 1 .86-2.08c.32 0 .63.13.86.36l4.12 4.12 8.74-9.1c.23-.24.54-.37.88-.37.32 0 .61.12.84.34.23.23.37.53.37.85 0 .32-.11.63-.34.87l-9.6 10c-.22.23-.54.37-.86.37h-.01Z"
        fill={fill}
      />
      <path
        d="M13.095 44.715c-4.58 0-8.31-3.73-8.31-8.31v-21.81c0-4.27 3.2-7.83 7.45-8.27l.25-.03v-1.79c0-.67.55-1.22 1.22-1.22.67 0 1.22.55 1.22 1.22v1.78h18.82v-1.78c0-.67.55-1.22 1.22-1.22.67 0 1.22.55 1.22 1.22v1.88l.23.04c3.94.72 6.8 4.16 6.8 8.16v21.82c0 4.58-3.73 8.31-8.31 8.31h-21.81Zm-5.87-8.31c0 3.24 2.63 5.87 5.87 5.87h21.82c3.24 0 5.87-2.63 5.87-5.87v-18.6H7.215v18.61l.01-.01Zm5.87-27.69c-3.24 0-5.87 2.63-5.87 5.87v.78h33.56v-.78c0-3.24-2.63-5.87-5.87-5.87h-21.82Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCalendarLineThin)
const Memo = memo(ForwardRef)
export default Memo
