import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgFarmFill = (
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
        d="M34.988 8.314c-2.989-.8-5.81-.653-8.399.063 5.326 3.073 8.989 9.241 8.989 15.598v14.946c0 .694.568 1.263 1.262 1.263h6.105a4.222 4.222 0 0 0 4.21-4.21V24.838c0-7.578-4.842-14.545-12.167-16.524Zm-18.44-.526C7.686 8.06.845 15.787.845 24.67v11.325a4.222 4.222 0 0 0 4.21 4.21h6.104c.695 0 1.263-.569 1.263-1.263v-5.41c0-2.316 1.853-4.631 4.147-4.863a4.638 4.638 0 0 1 5.116 4.61v5.684c0 .694.568 1.263 1.263 1.263h9.051c.695 0 1.263-.569 1.263-1.263V24.017c0-9.114-7.536-16.482-16.714-16.208v-.021Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgFarmFill)
const Memo = memo(ForwardRef)
export default Memo
