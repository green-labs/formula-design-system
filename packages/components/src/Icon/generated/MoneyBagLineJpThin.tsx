import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMoneyBagLineJpThin = (
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
        d="M14.055 43.12c-3.59-.1-5.85-1.19-7.33-3.56-1.04-1.62-1.49-4.03-1.49-8.06 0-7.53 3.26-13.53 9.95-18.33l.39-.27-1.17-1.07c-1.06-1.06-1.42-2.8-.88-4.31a3.954 3.954 0 0 1 3.72-2.64h13.5c1.69 0 3.68.79 4.32 2.54.64 1.73-.66 3.64-1.49 4.62l-.86.86.38.26c6.05 4.27 9.67 11.16 9.67 18.44 0 4.63-1.07 7.94-3.18 9.84-1.67 1.38-3.53 1.58-5.44 1.68h-20.09Zm2.76-27.79c-5.96 4.34-8.85 9.7-8.85 16.38 0 3.53.31 5.44 1.11 6.84.85 1.47 2.64 2.24 5.18 2.24h19.8c1.76-.11 2.98-.35 4.05-1.21 1.53-1.32 2.33-4.04 2.33-7.87 0-6.42-3.19-12.54-8.54-16.37l-3.01-2.23c.78-.69 2.48-2.29 3.12-2.94.87-.98.59-1.72.42-1.99-.23-.44-.76-.65-1.17-.65h-13.5c-1.21 0-1.63.47-1.78.86-.31.52-.01 1.25.41 1.68l3.43 3.13-3.01 2.14.01-.01Z"
        fill={fill}
      />
      <path
        d="M24.115 34.72c-.6 0-1.08-.48-1.08-1.08v-1.88h-3.82c-.55 0-.99-.44-.99-.99s.45-.99.99-.99h3.82v-1.56h-3.82c-.55 0-.99-.44-.99-.99s.45-.99.99-.99h3.69l-4.19-3.42c-.23-.18-.37-.44-.39-.73-.03-.29.06-.57.24-.79.21-.25.51-.39.84-.39.25 0 .5.09.69.24l3.97 3.24 3.6-3.41c.2-.19.47-.29.75-.29.3 0 .58.12.79.33.2.21.3.48.29.77 0 .29-.13.56-.34.76l-3.9 3.69h3.55c.55 0 .99.44.99.99s-.45.99-.99.99h-3.59v1.56h3.59c.55 0 .99.44.99.99s-.45.99-.99.99h-3.59v1.88c0 .6-.49 1.08-1.08 1.08h-.02Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMoneyBagLineJpThin)
const Memo = memo(ForwardRef)
export default Memo
