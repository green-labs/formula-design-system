import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgTouchLineBold = (
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
        d="M40.147 28.85c0-3.921-3.095-6.914-7.222-6.914h-4.953v-6.5c0-2.888-2.27-5.158-5.055-5.158-2.786 0-4.953 2.27-4.953 5.159v11.142c-.206-.206-.412-.31-.516-.412l-.103-.104c-2.166-1.547-5.262-1.444-7.222-.412-1.96 1.032-2.373 2.476-2.373 3.508 0 1.444 1.032 2.58 2.682 4.333l.62.62s2.992 3.197 3.92 4.23c3.611 4.023 6.913 7.118 13.516 7.118 4.024 0 7.016-1.031 8.976-2.992 2.58-2.58 2.786-6.397 2.786-8.976V28.85h-.103Zm-5.262 11.039c-1.238 1.341-3.508 1.96-6.5 1.96-5.159 0-7.532-2.27-10.833-5.88-.929-1.032-3.921-4.23-4.024-4.334l-.62-.62c-.515-.618-1.444-1.547-1.65-1.96 0-.103.206-.206.413-.309.928-.516 2.579-.516 3.508.103a18.176 18.176 0 0 1 2.476 2.476 2.245 2.245 0 0 0 2.373.516c.825-.31 1.341-1.135 1.341-2.063V15.437c0-.826.516-1.651 1.445-1.651.825 0 1.547.722 1.547 1.65v7.43a2.554 2.554 0 0 0 2.58 2.578h5.88c2.167 0 3.715 1.445 3.715 3.405v4.54c.206 3.198-.413 5.159-1.651 6.5Z"
        fill={fill}
      />
      <path
        d="M10.639 14.714a1.85 1.85 0 0 0 1.857 1.857 1.85 1.85 0 0 0 1.857-1.857c0-4.643 3.818-8.46 8.46-8.46 4.643 0 8.46 3.817 8.46 8.46a1.85 1.85 0 0 0 1.858 1.857 1.85 1.85 0 0 0 1.857-1.857c0-6.706-5.468-12.174-12.174-12.174-6.707 0-12.175 5.468-12.175 12.174Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgTouchLineBold)
const Memo = memo(ForwardRef)
export default Memo
