import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPostSquareFill = (
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
        d="m18.755 29.949 4.92-.29c.12 0 .23-.06.32-.14l13.05-13.05a.32.32 0 0 0 0-.46l-5.2-5.2a.32.32 0 0 0-.46 0l-13.05 13.05c-.08.08-.14.2-.14.32l-.29 4.92c-.03.49.38.89.86.86h-.01v-.01ZM41.005 6.669c-1.6-1.5-4.14-1.35-5.69.2l-1.68 1.68a.32.32 0 0 0 0 .46l5.2 5.2c.13.13.33.13.46 0l1.8-1.8a4.01 4.01 0 0 0-.09-5.75v.01Z"
        fill={fill}
      />
      <path
        d="M37.745 22.079c-1.1 0-2 .9-2 2v9.22c0 2.81-2.28 5.09-5.09 5.09h-15.83c-2.81 0-5.09-2.28-5.09-5.09v-15.83c0-2.81 2.28-5.09 5.09-5.09h8.31c1.1 0 2-.9 2-2s-.9-2-2-2h-8.31c-5.01 0-9.09 4.07-9.09 9.08v15.83c0 5.01 4.08 9.09 9.09 9.09h15.83c5.01.01 9.09-4.07 9.09-9.08v-9.22c0-1.1-.9-2-2-2Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPostSquareFill)
const Memo = memo(ForwardRef)
export default Memo
