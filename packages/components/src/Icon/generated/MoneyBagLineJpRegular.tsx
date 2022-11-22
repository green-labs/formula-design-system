import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMoneyBagLineJpRegular = (
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
        d="M14.05 43.405c-3.7-.1-6.04-1.24-7.57-3.69-1.07-1.66-1.53-4.11-1.53-8.21 0-7.63 3.29-13.7 10.07-18.56l.1-.07-.91-.83c-1.18-1.18-1.51-3.06-.95-4.62a4.243 4.243 0 0 1 3.99-2.83h13.5c1.8 0 3.9.85 4.59 2.73s-.66 3.86-1.54 4.9l-.64.64.1.07c6.13 4.32 9.79 11.3 9.79 18.67 0 4.71-1.1 8.09-3.27 10.05-1.74 1.43-3.65 1.65-5.62 1.75H14.05Zm2.92-27.84c-5.87 4.28-8.72 9.56-8.72 16.14 0 3.47.3 5.35 1.07 6.7.79 1.37 2.49 2.1 4.93 2.1h19.8c1.69-.11 2.86-.33 3.87-1.15 1.46-1.26 2.23-3.91 2.23-7.65 0-6.33-3.15-12.36-8.42-16.14l-3.3-2.45.19-.16c.71-.61 2.51-2.31 3.19-2.99.78-.88.48-1.48.38-1.65-.18-.35-.61-.51-.93-.51H17.75c-.84 0-1.35.23-1.51.67-.25.42-.01 1.02.35 1.39l3.68 3.36-3.3 2.34Z"
        fill={fill}
      />
      <path
        d="M28.79 29.493H25.48v-.991h3.308c.702 0 1.276-.573 1.276-1.273s-.574-1.273-1.276-1.273h-2.834l3.381-3.2a1.362 1.362 0 0 0 .055-1.928 1.378 1.378 0 0 0-1.932-.054L24.04 24.01l-3.773-3.082a1.373 1.373 0 0 0-1.923.191 1.357 1.357 0 0 0 .191 1.919l3.573 2.918H19.21c-.702 0-1.276.573-1.276 1.273s.574 1.273 1.276 1.273h3.536v.99H19.21c-.702 0-1.276.574-1.276 1.274 0 .7.574 1.273 1.276 1.273h3.536v1.6c0 .755.61 1.364 1.367 1.364.756 0 1.367-.61 1.367-1.364v-1.6h3.308c.702 0 1.276-.573 1.276-1.273s-.574-1.273-1.276-1.273Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMoneyBagLineJpRegular)
const Memo = memo(ForwardRef)
export default Memo
