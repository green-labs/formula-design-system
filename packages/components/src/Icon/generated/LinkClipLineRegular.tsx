import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgLinkClipLineRegular = (
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
        d="M25.744 32.67c-1.14 0-2.24-.22-3.29-.66a8.52 8.52 0 0 1-2.78-1.89 1.5 1.5 0 0 1 2.14-2.1c.51.52 1.12.94 1.8 1.22 1.35.57 2.9.57 4.26 0 .68-.29 1.28-.7 1.8-1.22l8.01-8.01a5.537 5.537 0 0 0 1.63-3.94c0-1.49-.59-2.9-1.63-3.94a5.537 5.537 0 0 0-3.94-1.63c-1.49 0-2.89.58-3.94 1.63l-1 1c-.59.59-1.54.59-2.12 0-.58-.59-.59-1.54 0-2.12l1-1a8.51 8.51 0 0 1 6.06-2.51c2.29 0 4.44.89 6.06 2.51 1.6 1.59 2.51 3.8 2.51 6.06s-.89 4.44-2.51 6.06l-8 8a8.478 8.478 0 0 1-6.06 2.54Z"
        fill={fill}
      />
      <path
        d="M15.744 41.57a8.51 8.51 0 0 1-6.06-2.51A8.51 8.51 0 0 1 7.174 33c0-2.29.89-4.44 2.51-6.06l8-8a8.5 8.5 0 0 1 2.77-1.88c2.1-.88 4.49-.88 6.59 0 1.05.44 1.98 1.07 2.78 1.89a1.5 1.5 0 0 1-2.14 2.1c-.52-.53-1.12-.94-1.8-1.22a5.52 5.52 0 0 0-4.26 0c-.68.28-1.28.7-1.8 1.22l-8.01 8.01a5.537 5.537 0 0 0-1.63 3.94c0 1.49.58 2.89 1.63 3.94a5.537 5.537 0 0 0 3.94 1.63c1.49 0 2.89-.58 3.94-1.63l1-1a1.49 1.49 0 0 1 2.12 0c.58.59.59 1.54 0 2.12l-1 1a8.51 8.51 0 0 1-6.06 2.51h-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgLinkClipLineRegular)
const Memo = memo(ForwardRef)
export default Memo
