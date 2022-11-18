import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgLinkCopyLineBold = (
  { size = "xl", sizePx, style, className, color, ...props }: IconProps,
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M21.144 34.83h-6.7c-3.02 0-5.96-1.08-8.28-3.03-2.33-2.09-3.65-4.92-3.65-7.8s1.32-5.71 3.61-7.76c2.18-1.95 5.21-3.07 8.32-3.07h6.7a1.83 1.83 0 0 1 0 3.66h-6.7c-2.22 0-4.36.78-5.88 2.13-1.52 1.36-2.39 3.19-2.39 5.04s.85 3.66 2.39 5.04a9.188 9.188 0 0 0 5.88 2.13h6.7a1.83 1.83 0 0 1 0 3.66ZM35.044 34.83h-6.7a1.83 1.83 0 0 1 0-3.66h6.7c2.22 0 4.36-.78 5.88-2.13 1.54-1.38 2.39-3.17 2.39-5.04s-.87-3.68-2.39-5.04c-1.56-1.4-3.59-2.13-5.88-2.13h-6.7a1.83 1.83 0 0 1 0-3.66h6.7c3.16 0 6.11 1.09 8.32 3.07 2.29 2.05 3.61 4.88 3.61 7.76s-1.32 5.71-3.61 7.76c-2.18 1.95-5.21 3.07-8.32 3.07Z"
        fill={fill}
      />
      <path
        d="M34.344 25.83h-19.2a1.83 1.83 0 0 1 0-3.66h19.2a1.83 1.83 0 0 1 0 3.66Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgLinkCopyLineBold)
const Memo = memo(ForwardRef)
export default Memo
