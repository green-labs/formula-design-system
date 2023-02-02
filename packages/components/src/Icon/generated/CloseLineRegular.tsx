import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCloseLineRegular = (
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
        d="M21.446 24.003 11.168 34.29c-.7.7-.705 1.845-.005 2.555.7.7 1.845.695 2.555-.005l10.278-10.288 10.292 10.282c.7.71 1.836.705 2.536-.005.71-.7.714-1.835.004-2.535L26.546 24.003l10.277-10.287c.7-.7.705-1.845.005-2.555a1.801 1.801 0 0 0-2.543.003L23.996 21.453 13.704 11.16a1.79 1.79 0 0 0-1.269-.528 1.808 1.808 0 0 0-1.27 3.08l10.281 10.29Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCloseLineRegular)
const Memo = memo(ForwardRef)
export default Memo
