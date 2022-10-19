import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgLinkClipLineBold = (
  {
    size = "XL",
    sizePx,
    style,
    className,
    color,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
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
      role="img"
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M25.744 32.35c-.83 0-2.08-.07-3.39-.65a9.056 9.056 0 0 1-2.81-1.95c-.66-.66-.66-1.74 0-2.4.66-.66 1.74-.66 2.4 0 .57.57 1.11.95 1.79 1.25.56.25 1.16.35 2.01.35.6 0 1.28-.13 2.08-.39.65-.3 1.16-.66 1.71-1.22l8-8c1.02-1.02 1.6-2.4 1.6-3.8 0-1.49-.55-2.82-1.56-3.75-1.18-1.09-2.47-1.65-3.84-1.65-1.49 0-2.82.55-3.75 1.56l-1.04 1.05c-.66.66-1.74.66-2.4 0-.66-.66-.66-1.74 0-2.4l1-1c1.54-1.66 3.76-2.6 6.2-2.6 2.23 0 4.36.88 6.16 2.55 1.71 1.58 2.64 3.8 2.64 6.25 0 2.29-.95 4.55-2.6 6.2l-8 8c-.87.87-1.74 1.47-2.81 1.95l-.15.06c-1.19.39-2.25.59-3.24.59Z"
        fill={fill}
      />
      <path
        d="M15.744 41.25c-2.29 0-4.55-.95-6.2-2.6-1.65-1.65-2.6-3.91-2.6-6.2s.95-4.55 2.6-6.2l8-8c.87-.87 1.74-1.48 2.81-1.95l.15-.06c1.19-.4 2.25-.59 3.24-.59.83 0 2.09.07 3.39.65 1.07.48 1.94 1.08 2.81 1.95.66.66.66 1.74 0 2.4-.66.66-1.74.66-2.4 0-.57-.57-1.11-.95-1.79-1.25-.56-.25-1.16-.35-2.01-.35-.6 0-1.28.13-2.08.39-.65.3-1.16.66-1.71 1.22l-8.01 7.99c-1.02 1.02-1.6 2.4-1.6 3.8s.58 2.78 1.6 3.8 2.4 1.6 3.8 1.6c1.49 0 2.82-.55 3.75-1.56l1.04-1.05c.66-.66 1.74-.66 2.4 0 .66.66.66 1.74 0 2.4l-1 1c-1.54 1.66-3.76 2.6-6.2 2.6l.01.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgLinkClipLineBold)
const Memo = memo(ForwardRef)
export default Memo
