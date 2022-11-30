import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPersonLineBold = (
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
        d="M24.24 24.01c-4.76 0-8.59-3.7-8.92-8.62-.17-2.68.67-5.15 2.37-6.96 1.66-1.77 3.99-2.75 6.55-2.75 2.56 0 4.86.98 6.53 2.77 1.71 1.83 2.56 4.29 2.39 6.94-.33 4.92-4.16 8.62-8.92 8.62Zm0-14.93c-1.61 0-3.05.59-4.07 1.67-1.05 1.12-1.57 2.69-1.46 4.42.24 3.57 2.96 5.44 5.53 5.44 2.57 0 5.29-1.87 5.53-5.44.11-1.7-.41-3.26-1.48-4.4-1.02-1.09-2.46-1.69-4.05-1.69ZM39.36 42.31H8.64c-.93 0-1.79-.4-2.37-1.1-.61-.75-.85-1.75-.65-2.76 1.69-9.27 10.74-13.5 18.42-13.5 7.68 0 16.75 4.24 18.34 13.55.2.88-.04 1.91-.65 2.68-.58.73-1.45 1.14-2.37 1.14v-.01Zm-.31-3.18v.02-.02ZM9 38.91h30.01c-1.39-7.28-8.69-10.56-14.96-10.56-6.27 0-13.62 3.31-15.05 10.56Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPersonLineBold)
const Memo = memo(ForwardRef)
export default Memo
