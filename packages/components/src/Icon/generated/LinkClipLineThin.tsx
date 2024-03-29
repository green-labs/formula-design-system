import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgLinkClipLineThin = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.88 9.716c1.55-1.658 3.675-2.466 5.864-2.466 2.26 0 4.24.956 5.817 2.42 1.67 1.552 2.483 3.683 2.483 5.88 0 2.236-.94 4.336-2.451 5.848l-8 8c-.794.794-1.614 1.383-2.662 1.849-.035.015-.07.03-.107.041-.97.324-2.005.562-3.08.562-.988 0-2.075-.11-3.187-.604-1.048-.465-1.868-1.054-2.661-1.848a1.2 1.2 0 1 1 1.697-1.697c.606.607 1.186 1.018 1.939 1.352.687.306 1.4.397 2.212.397.71 0 1.456-.155 2.265-.42.727-.33 1.294-.736 1.887-1.329l8-8c1.087-1.088 1.748-2.587 1.748-4.151 0-1.603-.587-3.072-1.716-4.12-1.224-1.136-2.643-1.78-4.184-1.78-1.603 0-3.072.587-4.12 1.716l-.031.033-1 1a1.2 1.2 0 1 1-1.697-1.698l.985-.985Zm-7.215 6.996c.97-.324 2.004-.562 3.08-.562.988 0 2.074.109 3.186.603 1.048.466 1.868 1.055 2.662 1.848a1.2 1.2 0 1 1-1.697 1.698c-.607-.607-1.187-1.018-1.94-1.352-.687-.306-1.4-.397-2.212-.397-.709 0-1.456.154-2.264.42-.728.33-1.295.736-1.887 1.329l-8 8c-1.088 1.087-1.749 2.587-1.749 4.15 0 1.565.66 3.065 1.749 4.152 1.088 1.088 2.587 1.749 4.151 1.749 1.603 0 3.072-.587 4.12-1.717l.032-.032 1-1a1.2 1.2 0 1 1 1.697 1.697l-.985.985c-1.55 1.66-3.675 2.467-5.864 2.467-2.236 0-4.336-.94-5.848-2.452-1.513-1.512-2.452-3.612-2.452-5.848 0-2.236.94-4.337 2.452-5.849l8-8c.793-.793 1.613-1.382 2.66-1.848.036-.015.072-.03.109-.041Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgLinkClipLineThin)
const Memo = memo(ForwardRef)
export default Memo
