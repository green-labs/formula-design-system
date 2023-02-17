import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgTouchFill = (
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
        d="m33.51 23.555-6.6-.02v-7.59c0-1.143-.406-2.17-1.143-2.9-.736-.73-1.772-1.133-2.926-1.133-1.142 0-2.178.413-2.915 1.143-.737.73-1.143 1.757-1.143 2.89v13.707c-.726-.74-1.58-1.566-2.19-2.032-.918-.698-2.167-1.08-3.513-1.08-1.025 0-2.06.223-2.915.636-1.25.603-1.965 1.598-1.965 2.73 0 .509.192 1.006.63 1.62.384.54.961 1.186 1.805 2.096l.566.656h.01l1.666 1.778c.887.953 1.88 2.043 2.318 2.53l.043.053c1.719 1.926 3.438 3.758 5.542 5.028 2.179 1.312 4.603 1.926 7.646 1.926h.332c2.328-.031 5.286-.285 7.55-2.032 2.35-1.81 3.492-4.837 3.492-9.24v-4.669c0-3.397-2.691-5.99-6.29-6.097Z"
        fill={fill}
      />
      <path
        d="M33.435 17.226c-1.175 0-2.136-.953-2.136-2.117 0-4.668-3.834-8.468-8.543-8.468-4.71 0-8.533 3.79-8.533 8.457 0 1.164-.96 2.117-2.136 2.117-1.174 0-2.136-.953-2.136-2.117 0-6.997 5.746-12.691 12.805-12.691 7.059 0 12.815 5.694 12.815 12.702 0 1.164-.961 2.117-2.136 2.117Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgTouchFill)
const Memo = memo(ForwardRef)
export default Memo
