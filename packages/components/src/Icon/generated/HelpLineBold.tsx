import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgHelpLineBold = (
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
        d="M23.995 42.25c-1.18 0-2.38-.11-3.56-.33-3.5-.66-6.73-2.38-9.34-5-2.61-2.61-4.33-5.84-4.99-9.34-.74-3.38-.4-7.01 1-10.5 1.48-3.42 3.82-6.26 6.77-8.23 3.05-2.03 6.57-3.1 10.2-3.1 4.86 0 9.55 1.91 12.87 5.23 3.44 3.44 5.33 8.04 5.33 12.97 0 3.63-1.07 7.15-3.1 10.2-2.03 3.05-4.96 5.47-8.23 6.77-2.21.88-4.54 1.33-6.94 1.33h-.01Zm.08-32.9c-2.92 0-5.75.86-8.2 2.5-2.37 1.58-4.26 3.87-5.45 6.62-1.11 2.78-1.39 5.69-.79 8.4.53 2.82 1.92 5.41 4.01 7.51 2.1 2.1 4.68 3.48 7.46 4 .96.18 1.93.27 2.89.27 1.94 0 3.83-.36 5.61-1.07 2.6-1.04 4.93-2.97 6.57-5.43 1.63-2.45 2.5-5.29 2.5-8.2 0-3.97-1.52-7.67-4.27-10.43-2.65-2.65-6.42-4.17-10.33-4.17Z"
        fill={fill}
      />
      <path
        d="M23.465 35.46c-1.14 0-2.04-.9-2.04-2.04 0-1.14.9-2.04 2.04-2.04 1.14 0 2.04.88 2.04 2.04 0 1.16-.9 2.04-2.04 2.04Zm.02-6.33c-1.02 0-1.66-.72-1.66-1.87v-.43c0-2.11.96-3.58 3.2-4.92 1.68-1.03 2.31-1.94 2.31-3.37 0-1.81-1.38-3.02-3.44-3.02-1.87 0-3.11.91-3.58 2.63-.29 1.04-.73 1.44-1.57 1.44-.94 0-1.5-.58-1.5-1.55 0-.68.13-1.25.42-1.9.94-2.25 3.31-3.61 6.34-3.61 3.98 0 6.77 2.41 6.77 5.87 0 2.33-1.09 4.12-3.33 5.47-1.82 1.07-2.34 1.82-2.34 3.34 0 1.24-.57 1.92-1.61 1.92h-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgHelpLineBold)
const Memo = memo(ForwardRef)
export default Memo
