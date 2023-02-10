import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgExperienceFill = (
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
        d="M43.589 17.136a5.498 5.498 0 0 0-5.492-5.492h-3.114v-1.373a4.123 4.123 0 0 0-4.119-4.118H17.136a4.123 4.123 0 0 0-4.119 4.118v1.373H9.903a5.497 5.497 0 0 0-5.491 5.492v4.118h39.177v-4.118Zm-11.352-5.492H15.763v-1.373a1.373 1.373 0 0 1 1.373-1.373h13.728a1.373 1.373 0 0 1 1.373 1.373v1.373ZM29.034 24.686a2.06 2.06 0 0 1-2.06 2.06h-5.948a2.06 2.06 0 0 1-2.06-2.06v-.343a.343.343 0 0 0-.343-.343H4.412v12.356a5.492 5.492 0 0 0 5.491 5.491h28.194a5.492 5.492 0 0 0 5.492-5.491V24H29.377a.343.343 0 0 0-.343.343v.343Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgExperienceFill)
const Memo = memo(ForwardRef)
export default Memo
