import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMoneyBagLineJpBold = (
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
        d="M14.045 43.69c-3.82-.1-6.22-1.28-7.81-3.82-1.1-1.71-1.57-4.21-1.57-8.36 0-7.66 3.27-13.77 10-18.66l-.65-.59c-1.23-1.23-1.64-3.21-1.03-4.93a4.52 4.52 0 0 1 4.26-3.02h13.5c1.88 0 4.12.9 4.86 2.92.7 1.9-.48 3.87-1.59 5.18l-.42.42c6.1 4.38 9.74 11.39 9.74 18.78 0 4.79-1.13 8.25-3.36 10.26-1.83 1.5-3.87 1.72-5.8 1.82h-20.13Zm3.7-35.6c-.49 0-1.1.08-1.24.48-.19.33 0 .8.29 1.1l3.93 3.58-3.59 2.54c-5.79 4.22-8.6 9.43-8.6 15.91 0 3.42.29 5.26 1.03 6.56.74 1.28 2.36 1.96 4.68 1.96h19.8c1.61-.11 2.75-.32 3.69-1.09 1.39-1.2 2.13-3.77 2.13-7.43 0-6.23-3.1-12.18-8.3-15.91l-3.59-2.67.46-.39c.71-.61 2.52-2.33 3.17-2.97.42-.48.55-.95.34-1.31-.13-.25-.45-.37-.69-.37h-13.51v.01Z"
        fill={fill}
      />
      <path
        d="M24.115 35.14c-.83 0-1.51-.68-1.51-1.51v-1.46h-3.39a1.419 1.419 0 1 1 0-2.84h3.39v-.71h-3.39c-.78 0-1.42-.64-1.42-1.42 0-.78.64-1.42 1.42-1.42h2.5l-3.26-2.67c-.31-.25-.51-.62-.55-1.02-.04-.4.08-.79.34-1.1.28-.35.71-.55 1.16-.55.35 0 .69.12.96.34l3.68 3 3.33-3.15c.28-.26.65-.41 1.04-.41.42 0 .81.17 1.09.47.28.29.42.67.41 1.07-.01.4-.18.78-.47 1.06l-3.12 2.96h2.48a1.419 1.419 0 1 1 0 2.84h-3.17v.71h3.17a1.419 1.419 0 1 1 0 2.84h-3.17v1.46c0 .83-.68 1.51-1.51 1.51h-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMoneyBagLineJpBold)
const Memo = memo(ForwardRef)
export default Memo
