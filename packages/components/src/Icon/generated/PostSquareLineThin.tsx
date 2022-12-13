import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPostSquareLineThin = (
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
        d="M14.776 41.655c-4.57 0-8.29-3.72-8.29-8.29v-15.82c0-4.57 3.72-8.29 8.29-8.29h8.31c.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2h-8.31c-3.25 0-5.89 2.64-5.89 5.89v15.83c0 3.25 2.64 5.89 5.89 5.89h15.83c3.25 0 5.89-2.64 5.89-5.89v-9.22c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v9.22c0 4.57-3.72 8.29-8.29 8.29h-15.83v-.01Z"
        fill={fill}
      />
      <path
        d="M18.246 30.425c-.21 0-.43-.09-.58-.24a.859.859 0 0 1-.24-.63l.32-5.48c0-.12.06-.23.14-.32l16.14-16.14c.83-.83 1.93-1.28 3.1-1.28 1.17 0 2.27.46 3.1 1.28.9.9 1.36 2.1 1.28 3.38-.07 1.06-.56 2.1-1.39 2.93l-16.02 16.03c-.09.08-.2.13-.32.14l-5.53.33Zm1.44-5.67-.23 3.36.19.19.18.04 3.29-.17 12.7-12.7-3.42-3.42-12.7 12.7h-.01Zm17.44-16.45c-.09 0-.17 0-.26.01-.54.06-1.08.33-1.52.77l-1.57 1.57 3.42 3.42 1.56-1.56c.94-.94 1.03-2.42.19-3.38-.47-.53-1.11-.83-1.82-.83Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPostSquareLineThin)
const Memo = memo(ForwardRef)
export default Memo
