import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgTracterLine = (
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
        d="M9.419 30.835c0-1.709 1.48-3.19 3.19-3.19 1.822 0 3.19 1.367 3.19 3.19s-1.368 3.19-3.19 3.19a3.184 3.184 0 0 1-3.19-3.19Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.052 6.557c-.826 0-1.495.669-1.495 1.495v14.08C3.807 24.055 2 27.243 2 30.836c0 5.838 4.77 10.608 10.608 10.608 3.593 0 6.781-1.806 8.702-4.556h11.772a6.599 6.599 0 0 0 6.297 4.556A6.6 6.6 0 0 0 46 34.822a6.6 6.6 0 0 0-2.331-5.055L42.58 21.61a3.75 3.75 0 0 0-1.12-2.54 3.744 3.744 0 0 0-2.652-1.122h-6.07l3.67-6.33c.11-.138.209-.242.296-.313a.47.47 0 0 1 .123-.08c.193-.038.32-.043.408-.034a.53.53 0 0 1 .234.08l1.948 1.145a1.495 1.495 0 1 0 1.516-2.577l-1.931-1.137c-1.006-.6-1.997-.561-2.765-.408-1.142.229-1.885 1.081-2.27 1.595a1.516 1.516 0 0 0-.098.147l-4.556 7.86a1.49 1.49 0 0 0-.03.052h-1.993L23.11 7.497a1.495 1.495 0 0 0-1.388-.94H8.052Zm32.402 21.73-.849-6.368a1.5 1.5 0 0 1-.013-.197c0-.16-.061-.354-.245-.538-.184-.184-.377-.245-.538-.245H26.28a1.495 1.495 0 0 1-1.389-.94L20.71 9.547H9.546v11.132c.97-.294 1.998-.452 3.061-.452 5.838 0 10.609 4.77 10.609 10.608 0 1.063-.159 2.091-.453 3.061h10.057a6.598 6.598 0 0 1 6.558-5.695c.366 0 .726.029 1.075.085ZM4.99 30.834c0-4.187 3.432-7.618 7.618-7.618 4.187 0 7.619 3.431 7.619 7.618 0 4.186-3.432 7.618-7.619 7.618-4.186 0-7.618-3.432-7.618-7.618Zm30.758 3.987a3.61 3.61 0 0 1 3.63-3.631 3.61 3.61 0 0 1 3.632 3.63 3.61 3.61 0 0 1-3.631 3.632 3.61 3.61 0 0 1-3.631-3.631Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgTracterLine)
const Memo = memo(ForwardRef)
export default Memo