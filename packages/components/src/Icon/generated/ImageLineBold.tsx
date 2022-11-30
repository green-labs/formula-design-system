import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgImageLineBold = (
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
        d="M12.157 42.285a9.41 9.41 0 0 1-9.43-9.08c0-.06-.01-.14 0-.23v-17.81c-.02-5.21 4.22-9.45 9.43-9.45h23.67c5.21 0 9.45 4.24 9.45 9.45v17.67c0 5.21-4.24 9.45-9.45 9.45h-23.67Zm23.67-3.57a5.9 5.9 0 0 0 5.5-3.8c-.59-.56-2.75-2.56-4.56-3.7a3.09 3.09 0 0 0-3.7.32c-2.2 1.98-5.28 4.91-7.65 7.17h10.41v.01Zm-29.47-4.92a5.891 5.891 0 0 0 5.79 4.92h8.12c1.11-1.07 3.87-3.73 6.58-6.27l-5.91-5.04c-.91-.77-2.06-1.2-3.26-1.2-1.13 0-2.24.39-3.12 1.08l-8.2 6.51Zm28.79-6.61c1.25 0 2.47.35 3.52 1.01 1.06.67 2.18 1.55 3.04 2.28v-15.31a5.89 5.89 0 0 0-5.88-5.88h-23.67a5.89 5.89 0 0 0-5.88 5.88v14.14l6.07-4.82a8.6 8.6 0 0 1 5.34-1.86c2.05 0 4.03.73 5.57 2.05l6.22 5.31c.42-.39.83-.76 1.21-1.1 1.22-1.1 2.8-1.71 4.46-1.71v.01Z"
        fill={fill}
      />
      <path
        d="M31.487 22.285c-2.68 0-4.78-2.1-4.78-4.78s2.1-4.78 4.78-4.78 4.78 2.1 4.78 4.78-2.1 4.78-4.78 4.78Zm0-6c-.72 0-1.22.5-1.22 1.22s.5 1.22 1.22 1.22 1.22-.5 1.22-1.22-.5-1.22-1.22-1.22Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgImageLineBold)
const Memo = memo(ForwardRef)
export default Memo
