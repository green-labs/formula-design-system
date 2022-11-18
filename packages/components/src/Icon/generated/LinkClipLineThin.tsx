import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgLinkClipLineThin = (
  { size = "xl", sizePx, style, className, color, ...props }: IconProps,
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.88 9.717c1.55-1.66 3.674-2.467 5.864-2.467 2.26 0 4.24.956 5.816 2.42 1.67 1.552 2.484 3.683 2.484 5.88 0 2.236-.94 4.336-2.452 5.848l-8 8c-.793.794-1.613 1.383-2.66 1.849-.036.015-.072.03-.109.041-.97.324-2.005.562-3.08.562-.988 0-2.074-.11-3.186-.603-1.048-.466-1.868-1.055-2.662-1.849a1.2 1.2 0 1 1 1.697-1.697c.607.607 1.187 1.018 1.94 1.352.687.306 1.4.397 2.212.397.709 0 1.456-.154 2.265-.42.727-.33 1.294-.736 1.886-1.329l8-8c1.088-1.087 1.749-2.587 1.749-4.151 0-1.603-.587-3.072-1.717-4.12-1.223-1.136-2.642-1.78-4.183-1.78-1.603 0-3.072.587-4.12 1.716l-.032.033-1 1a1.2 1.2 0 1 1-1.697-1.697l.985-.985Zm-7.216 6.995c.97-.324 2.005-.562 3.08-.562.988 0 2.075.11 3.187.603 1.048.466 1.868 1.055 2.661 1.849a1.2 1.2 0 1 1-1.697 1.697c-.606-.607-1.186-1.018-1.939-1.352-.687-.306-1.4-.397-2.212-.397-.71 0-1.456.154-2.265.42-.727.33-1.294.736-1.887 1.329l-8 8c-1.088 1.087-1.748 2.587-1.748 4.151 0 1.564.66 3.064 1.748 4.151 1.088 1.088 2.588 1.749 4.152 1.749 1.603 0 3.071-.587 4.12-1.717l.031-.032 1-1a1.2 1.2 0 1 1 1.697 1.697l-.985.985c-1.55 1.66-3.674 2.467-5.863 2.467-2.236 0-4.337-.94-5.849-2.452-1.512-1.512-2.451-3.612-2.451-5.848 0-2.236.94-4.336 2.451-5.849l8-8c.794-.793 1.614-1.382 2.662-1.848.035-.015.07-.03.107-.041Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgLinkClipLineThin)
const Memo = memo(ForwardRef)
export default Memo
