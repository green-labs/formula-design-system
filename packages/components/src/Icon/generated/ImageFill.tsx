import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgImageFill = (
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
        d="M35.393 6.687H12.617c-4.857 0-8.81 3.953-8.81 8.81v17.006c0 4.857 3.953 8.81 8.81 8.81h22.766c4.857 0 8.81-3.953 8.81-8.81V15.497c0-4.857-3.953-8.81-8.81-8.81h.01Zm-4.175 6.733a4.286 4.286 0 0 1 4.329 4.328 4.286 4.286 0 0 1-4.328 4.328 4.286 4.286 0 0 1-4.329-4.328 4.286 4.286 0 0 1 4.328-4.328ZM18.917 38.427h-6.3a5.927 5.927 0 0 1-5.925-5.924v-1.068l8.07-6.406a5.117 5.117 0 0 1 6.482.116l5.925 5.05a690.759 690.759 0 0 0-7.877 7.55 1.325 1.325 0 0 0-.366.682h-.01Zm16.476 0H22.726c2.356-2.27 7.069-6.81 9.84-9.3a3.23 3.23 0 0 1 3.875-.337c2.059 1.298 4.55 3.713 4.578 3.732.087.086.193.135.29.192-.116 3.174-2.723 5.713-5.916 5.713Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgImageFill)
const Memo = memo(ForwardRef)
export default Memo
