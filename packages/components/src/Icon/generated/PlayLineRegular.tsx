import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPlayLineRegular = (
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
        d="M13.558 41.247c-.55 0-1.11-.14-1.62-.43-1.15-.64-1.86-1.88-1.86-3.24v-27.2c0-1.38.73-2.63 1.91-3.25 1.08-.57 2.33-.48 3.34.22l23.12 13.85c.91.5 1.51 1.51 1.55 2.68.04 1.21-.54 2.35-1.52 2.97l-23.23 13.92c-.52.32-1.1.48-1.69.48Zm-.09-31.49s-.06.01-.09.03c-.15.08-.3.29-.3.59v27.2c0 .32.18.54.33.62.14.08.22.04.29 0l23.22-13.91s.08-.14.09-.23c.02-.15-.03-.25-.04-.27l-23.26-13.92c-.12-.08-.18-.11-.24-.11Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPlayLineRegular)
const Memo = memo(ForwardRef)
export default Memo
