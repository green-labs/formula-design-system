import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPersonLineRegular = (
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
        d="M24.236 23.805c-4.65 0-8.4-3.62-8.72-8.43-.17-2.62.66-5.04 2.32-6.81 1.62-1.73 3.9-2.68 6.4-2.68 2.5 0 4.75.96 6.38 2.7 1.68 1.79 2.5 4.2 2.33 6.79-.32 4.81-4.07 8.43-8.72 8.43h.01Zm0-14.93c-1.67 0-3.16.62-4.21 1.74-1.09 1.16-1.63 2.78-1.51 4.56.25 3.69 3.07 5.63 5.73 5.63 2.66 0 5.48-1.93 5.73-5.63.11-1.75-.43-3.37-1.53-4.54-1.06-1.13-2.55-1.75-4.2-1.75l-.01-.01ZM39.356 42.105H8.636c-.87 0-1.67-.38-2.21-1.03-.58-.7-.8-1.65-.61-2.59 1.68-9.16 10.62-13.34 18.23-13.34 7.61 0 16.57 4.19 18.14 13.38.19.83-.04 1.8-.61 2.52-.54.68-1.35 1.07-2.21 1.07l-.01-.01Zm-30.6-3h30.47v-.08c-1.27-7.48-8.76-10.89-15.18-10.89s-13.91 3.41-15.28 10.9v.06l-.01.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPersonLineRegular)
const Memo = memo(ForwardRef)
export default Memo
