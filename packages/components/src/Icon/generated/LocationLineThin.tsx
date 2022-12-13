import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgLocationLineThin = (
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
        d="M24.223 41.907c-.14 0-.29-.01-.43-.04a2.182 2.182 0 0 1-1.79-2.17v-13.7h-13.7c-1.05 0-1.92-.67-2.15-1.67-.24-1.02.25-2.03 1.21-2.51l29.44-13.51c.8-.4 1.77-.23 2.45.44.67.67.84 1.63.44 2.46l-13.49 29.38c-.32.79-1.1 1.31-1.97 1.31l-.01.01Zm-.23-2.27v.01-.01Zm-14.74-16.04h13.25c.49 0 1.01.21 1.35.56.34.33.55.85.55 1.34v13.25l12.86-28.01-28.01 12.86Zm28.59-13.12h-.01.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgLocationLineThin)
const Memo = memo(ForwardRef)
export default Memo
