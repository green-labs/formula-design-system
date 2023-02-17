import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgAreaScaleLineRegular = (
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
        d="M34.93 4.5H13.07c-4.74 0-8.57 3.83-8.57 8.57v21.86c0 4.73 3.83 8.57 8.57 8.57h21.86c4.73 0 8.57-3.83 8.57-8.57V13.07c0-4.73-3.83-8.57-8.57-8.57Zm5.57 8.57v9.43h-15v-15h9.43c3.07 0 5.57 2.5 5.57 5.57ZM13.07 7.5h9.43v15h-15v-9.43C7.5 10 10 7.5 13.07 7.5ZM7.5 34.93V25.5h15v15h-9.43C10 40.5 7.5 38 7.5 34.93Zm27.43 5.57H25.5v-15h15v9.43c0 3.07-2.5 5.57-5.57 5.57Z"
        fill={fill}
      />
      <path
        d="M37.14 17.56v-5.75c0-.55-.45-1-1-1h-5.75a1.003 1.003 0 0 0-.71 1.71c.18.18.43.29.71.29h3.39l-5.36 5.65a1 1 0 0 0 .02 1.39l.02.02c.4.38 1.03.36 1.41-.04l5.26-5.55v3.27c0 .55.45 1 1 1s1-.45 1-1l.01.01ZM10.54 30.66v5.75c0 .55.45 1 1 1h5.75A1.003 1.003 0 0 0 18 35.7a.997.997 0 0 0-.71-.29H13.9l5.36-5.65a1 1 0 0 0-.02-1.39l-.02-.02a.996.996 0 0 0-1.41.04l-5.26 5.55v-3.27c0-.55-.45-1-1-1s-1 .45-1 1l-.01-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgAreaScaleLineRegular)
const Memo = memo(ForwardRef)
export default Memo
