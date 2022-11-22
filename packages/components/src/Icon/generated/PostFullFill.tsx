import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPostFullFill = (
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
        d="M38.065 19.929c-.56-.23-1.2-.11-1.63.32l-11.73 11.61c-.22.22-.52.36-.83.38l-6.64.55c-.62.05-1.19-.16-1.63-.58-.44-.42-.67-1-.64-1.61l.28-6.37c.01-.33.15-.65.39-.88l11.57-11.67a1.493 1.493 0 0 0-1.06-2.55h-11.57c-4.74 0-8.59 3.85-8.59 8.58v15.83c0 4.73 3.85 8.59 8.59 8.59h15.83c4.73 0 8.59-3.85 8.59-8.59v-12.23c0-.61-.36-1.15-.92-1.38h-.01Z"
        fill={fill}
      />
      <path
        d="m18.505 30.199 4.92-.29c.12 0 .23-.06.32-.14l13.05-13.05a.32.32 0 0 0 0-.46l-5.2-5.2a.32.32 0 0 0-.46 0l-13.05 13.05c-.08.08-.14.2-.14.32l-.29 4.92c-.03.49.38.89.86.86l-.01-.01ZM40.755 6.919c-1.6-1.5-4.14-1.35-5.69.2l-1.68 1.68a.32.32 0 0 0 0 .46l5.2 5.2c.13.13.33.13.46 0l1.8-1.8a4.01 4.01 0 0 0-.09-5.75v.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPostFullFill)
const Memo = memo(ForwardRef)
export default Memo
