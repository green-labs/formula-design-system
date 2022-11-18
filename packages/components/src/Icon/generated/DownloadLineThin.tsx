import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgDownloadLineThin = (
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
        d="M40 31.3c-.7 0-1.2.5-1.2 1.2v4c0 .7-.3 1.4-.9 2-.6.7-1.3.8-1.9.8H12c-.7 0-1.4-.3-2-.9-.7-.6-.8-1.3-.8-1.9v-4c0-.7-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2v4c0 1.5.6 2.8 1.6 3.6 1 1 2.3 1.6 3.6 1.6h24c1.5 0 2.8-.6 3.6-1.6 1-1 1.6-2.3 1.6-3.6v-4c0-.7-.5-1.2-1.2-1.2Z"
        fill={fill}
      />
      <path
        d="M23.2 32.3c0 .067 0 .067 0 0 .1.1.2.2.4.3.1.1.3.1.5.1s.3 0 .5-.1c.1-.1.3-.1.4-.3l10-10c.5-.5.5-1.2 0-1.7s-1.2-.5-1.7 0l-8 8V7.5c0-.7-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2v21.1l-8-8c-.5-.5-1.2-.5-1.7 0s-.5 1.2 0 1.7l10 10Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgDownloadLineThin)
const Memo = memo(ForwardRef)
export default Memo
