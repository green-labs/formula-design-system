import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgAddressFill = (
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
        d="M7.44 28.78c-.82 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5h1.14v-3H7.44ZM7.44 22.5c-.82 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5h1.14v-3H7.44ZM7.44 16.2c-.82 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5h1.14v-3H7.44Z"
        fill={fill}
      />
      <path
        d="M38.58 4.74h-26.5c-1.92 0-3.5 1.58-3.5 3.5v7.96h2.3c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5h-2.3v3.3h2.3c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5h-2.3v3.3h2.3c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5h-2.3v7.96c0 1.92 1.58 3.5 3.5 3.5h26.48c1.92 0 3.5-1.58 3.5-3.5V8.24c0-1.92-1.58-3.5-3.5-3.5h.02Zm-15.96 10.7c.78-.84 1.88-1.3 3.12-1.3 1.24 0 2.34.46 3.12 1.3.78.84 1.16 2 1.08 3.28-.2 2.7-2.26 4.12-4.2 4.12-1.94 0-4-1.42-4.2-4.12-.1-1.26.3-2.42 1.08-3.28Zm11.7 16.46c-.18.24-.48.38-.78.38h-15.6c-.32 0-.6-.14-.78-.38-.2-.26-.28-.62-.2-.98.88-3.56 4.32-5.86 8.78-5.86 4.46 0 7.88 2.3 8.78 5.86.08.34 0 .7-.2.98Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgAddressFill)
const Memo = memo(ForwardRef)
export default Memo
