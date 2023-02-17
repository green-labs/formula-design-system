import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgAreaScaleFill = (
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
        d="M5 35.45C5 40.17 8.83 44 13.55 44h9.7V25.75H5v9.7Zm5.82-3.65h.01a1 1 0 0 1 2 .01v3.27l5.26-5.55a.996.996 0 0 1 1.41-.04l.02.02a1 1 0 0 1 .02 1.39l-5.36 5.65h3.39c.28 0 .53.11.71.29a1.003 1.003 0 0 1-.71 1.71h-5.75c-.55 0-1-.45-1-1V31.8ZM35.45 5h-9.7v18.25H44v-9.7C44 8.83 40.17 5 35.45 5Zm3.33 11.96h-.01a1 1 0 0 1-2-.01v-3.27l-5.26 5.55c-.38.4-1.01.42-1.41.04 0-.01-.02-.02-.02-.02a1 1 0 0 1-.02-1.39l5.36-5.65h-3.39c-.28 0-.53-.11-.71-.29a1.003 1.003 0 0 1 .71-1.71h5.75c.55 0 1 .45 1 1v5.75ZM5 13.55v9.7h18.25V5h-9.7C8.83 5 5 8.83 5 13.55ZM25.75 44h9.7c4.72 0 8.55-3.83 8.55-8.55v-9.7H25.75V44Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgAreaScaleFill)
const Memo = memo(ForwardRef)
export default Memo
