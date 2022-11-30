import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPostSquareLineBold = (
  { size = "xl", sizePx, color = "gray-90", ...props }: IconProps,
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
        d="M14.775 42.16c-4.85 0-8.79-3.94-8.79-8.79V17.55c0-4.85 3.94-8.79 8.79-8.79h8.31c.94 0 1.7.76 1.7 1.7s-.76 1.7-1.7 1.7h-8.31c-2.97 0-5.39 2.42-5.39 5.38v15.83c0 2.97 2.42 5.39 5.39 5.39h15.83c2.97 0 5.39-2.42 5.39-5.39v-9.22c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7v9.22c0 4.85-3.94 8.79-8.79 8.79h-15.83Z"
        fill={fill}
      />
      <path
        d="M18.245 30.93c-.35 0-.69-.14-.93-.39-.27-.27-.41-.64-.39-1.01l.32-5.48c.01-.24.12-.47.29-.64l16.14-16.14c.92-.92 2.15-1.43 3.46-1.43s2.53.51 3.45 1.43a4.815 4.815 0 0 1 1.42 3.77c-.07 1.18-.62 2.34-1.53 3.25l-16.03 16.02c-.17.17-.4.27-.64.29l-5.56.33Zm1.72-3.1 2.91-.15 12.21-12.21-2.71-2.71-12.22 12.21-.2 2.86h.01Zm17.23-14.46 1.21-1.21c.76-.76.83-1.94.17-2.69-.37-.42-.89-.66-1.45-.66-.07 0-.14 0-.21.01-.43.04-.86.27-1.22.62l-1.21 1.22 2.71 2.71Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPostSquareLineBold)
const Memo = memo(ForwardRef)
export default Memo
