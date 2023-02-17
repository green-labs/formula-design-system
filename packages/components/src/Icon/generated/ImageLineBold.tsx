import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgImageLineBold = (
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
        d="M12.61 41.587a9.05 9.05 0 0 1-9.07-8.733c0-.058-.01-.135 0-.222v-17.13c-.02-5.01 4.058-9.089 9.07-9.089h22.766c5.01 0 9.089 4.078 9.089 9.09v16.995c0 5.01-4.078 9.089-9.09 9.089H12.61Zm22.766-3.434a5.675 5.675 0 0 0 5.29-3.655c-.568-.538-2.645-2.462-4.386-3.558a2.971 2.971 0 0 0-3.559.308c-2.116 1.904-5.078 4.722-7.358 6.896h10.013v.01ZM7.03 33.421a5.666 5.666 0 0 0 5.569 4.732h7.81a648.592 648.592 0 0 1 6.328-6.03l-5.684-4.848a4.85 4.85 0 0 0-3.135-1.154 4.895 4.895 0 0 0-3.001 1.039L7.03 33.42Zm27.69-6.358a6.36 6.36 0 0 1 3.386.972c1.02.644 2.097 1.49 2.924 2.193V15.502a5.665 5.665 0 0 0-5.655-5.655H12.609a5.665 5.665 0 0 0-5.655 5.655v13.6l5.838-4.636a8.272 8.272 0 0 1 5.136-1.789c1.972 0 3.876.703 5.357 1.972l5.983 5.107c.404-.375.798-.73 1.164-1.058a6.389 6.389 0 0 1 4.29-1.644v.01Z"
        fill={fill}
      />
      <path
        d="M31.201 22.35c-2.577 0-4.597-2.02-4.597-4.597 0-2.578 2.02-4.598 4.597-4.598 2.578 0 4.598 2.02 4.598 4.598s-2.02 4.598-4.598 4.598Zm0-5.77c-.692 0-1.173.48-1.173 1.173 0 .692.48 1.173 1.173 1.173.693 0 1.174-.48 1.174-1.173 0-.693-.481-1.174-1.174-1.174Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgImageLineBold)
const Memo = memo(ForwardRef)
export default Memo
