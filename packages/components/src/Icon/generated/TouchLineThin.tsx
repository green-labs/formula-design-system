import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgTouchLineThin = (
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
        d="M11.517 33.61s2.965 3.17 3.885 4.192c3.578 3.987 6.645 6.85 12.984 6.85 3.885 0 6.645-.92 8.588-2.863 2.454-2.454 2.658-6.032 2.556-8.486v-4.498c0-3.578-2.863-6.339-6.646-6.339h-5.418v-6.952c0-2.555-2.045-4.6-4.498-4.6-2.454 0-4.397 2.045-4.397 4.6v12.269a13.26 13.26 0 0 0-1.431-1.227c-1.943-1.431-4.805-1.33-6.645-.41-1.33.717-2.045 1.739-2.045 2.966s.818 2.147 2.556 3.885l.511.613Zm.102-5.316c.511-.307 1.227-.409 1.943-.409.715 0 1.533.204 2.045.613.51.41 1.635 1.432 2.555 2.454.512.511 1.227.613 1.84.409.614-.204 1.023-.818 1.023-1.534v-14.21c0-1.227.818-2.147 1.943-2.147 1.124 0 2.044.92 2.044 2.147v7.36a2.05 2.05 0 0 0 2.045 2.045h5.827c2.454 0 4.192 1.636 4.192 3.885v4.499c.102 3.271-.511 5.418-1.84 6.747-1.33 1.432-3.68 2.147-6.85 2.147-5.316 0-7.77-2.249-11.144-6.032-.92-1.022-3.885-4.191-3.885-4.191l-.613-.614c-.614-.715-1.84-1.942-1.84-2.249 0-.204 0-.511.715-.92Z"
        fill={fill}
      />
      <path
        d="M12.642 16.026c.715 0 1.226-.614 1.226-1.227 0-4.908 3.988-8.997 8.997-8.997a8.945 8.945 0 0 1 8.997 8.997c0 .715.613 1.227 1.227 1.227.613 0 1.227-.614 1.227-1.227 0-6.339-5.112-11.45-11.45-11.45a11.432 11.432 0 0 0-11.451 11.45c-.102.715.511 1.227 1.227 1.227Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgTouchLineThin)
const Memo = memo(ForwardRef)
export default Memo
