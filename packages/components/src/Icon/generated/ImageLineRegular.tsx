import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgImageLineRegular = (
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
        d="M35.393 6.687H12.617c-4.857 0-8.81 3.953-8.81 8.81v17.14c0 .068 0 .135.009.202.183 4.703 4.05 8.474 8.8 8.474h22.767c4.857 0 8.81-3.953 8.81-8.81V15.497c0-4.857-3.953-8.81-8.81-8.81h.01Zm-.01 2.886a5.927 5.927 0 0 1 5.925 5.924V30.82c-.962-.827-2.193-1.827-3.347-2.549-2.299-1.452-5.329-1.183-7.348.645-.414.375-.866.789-1.337 1.222l-.02-.02-6.146-5.251a8.003 8.003 0 0 0-10.147-.183l-6.28 4.982V15.497a5.927 5.927 0 0 1 5.924-5.924h22.776ZM6.75 33.3l8.012-6.358a5.117 5.117 0 0 1 6.482.116l5.916 5.05a670.509 670.509 0 0 0-6.627 6.318h-7.916c-2.992 0-5.473-2.231-5.867-5.126Zm28.633 5.126H24.688c2.28-2.183 5.578-5.319 7.858-7.377a3.23 3.23 0 0 1 3.876-.337c1.962 1.241 4.319 3.492 4.55 3.713a5.929 5.929 0 0 1-5.598 4.001h.01Z"
        fill={fill}
      />
      <path
        d="M31.218 22.076a4.286 4.286 0 0 0 4.329-4.328 4.286 4.286 0 0 0-4.328-4.328 4.286 4.286 0 0 0-4.329 4.328 4.286 4.286 0 0 0 4.328 4.328Zm0-5.77c.837 0 1.443.605 1.443 1.442s-.606 1.443-1.443 1.443c-.836 0-1.442-.606-1.442-1.443 0-.837.606-1.443 1.442-1.443Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgImageLineRegular)
const Memo = memo(ForwardRef)
export default Memo
