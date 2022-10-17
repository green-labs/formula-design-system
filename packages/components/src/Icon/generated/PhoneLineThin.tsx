import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPhoneLineThin = (
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
        d="M35.91 43.168c-1.65 0-3.99-.59-7.55-2.57-4.96-2.69-8.09-5.02-11.97-8.9-4.02-3.93-6.05-6.59-9-11.86-2.95-5.25-2.75-8.31-2.06-9.95.6-1.33 1.51-2.29 3.16-3.35.79-.57 1.58-1 2.43-1.31 1.2-.53 2.75-.85 4.67 1.08 1.58 1.58 3.66 5.08 4.42 6.61 1.03 2.17.43 3.14-.53 4.29-.2.23-.42.5-.65.83-.16.22-.3.4-.43.57-.66.85-.8 1.1-.69 1.58.22.94 1.63 3.67 4.06 6 2.46 2.56 5.06 3.79 5.94 4 .48.11.73-.03 1.58-.69.17-.13.35-.27.54-.41.3-.23.56-.46.78-.66 1.17-1.04 2.17-1.69 4.38-.54 1.5.75 5.01 2.83 6.59 4.42l.03.03c1.69 1.81 1.54 3.24 1.43 4.27l-.09.47c-.32.85-.75 1.63-1.35 2.48-.95 1.48-1.81 2.48-3.31 3.11-.6.28-1.36.51-2.39.51l.01-.01ZM12.57 7.228c-.25 0-.48.1-.75.22-.71.27-1.33.6-1.99 1.08-1.29.83-1.92 1.47-2.3 2.32-.3.72-.74 3 1.95 7.82 2.86 5.1 4.7 7.53 8.59 11.33 3.71 3.71 6.69 5.93 11.44 8.5 5.48 3.03 7.25 2.23 7.83 1.96.88-.37 1.41-.89 2.29-2.26.47-.66.8-1.24 1.03-1.83.09-.86.14-1.38-.79-2.38-1.23-1.22-4.3-3.12-5.97-3.96-.62-.327-1.183-.263-1.69.19-.27.24-.58.51-.95.8-.19.13-.35.26-.5.38-.91.71-1.95 1.51-3.59 1.13-1.69-.39-4.67-2.11-7.1-4.64-2.53-2.43-4.32-5.51-4.7-7.16-.38-1.64.42-2.67 1.13-3.59.12-.16.25-.32.37-.49.26-.38.53-.71.77-.99.433-.513.503-1.077.21-1.69-.83-1.66-2.75-4.75-3.96-5.97-.59-.59-.97-.77-1.31-.77h-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPhoneLineThin)
const Memo = memo(ForwardRef)
export default Memo
