import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMoneyBagLineRegular = (
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
        d="M14.05 43.405c-3.7-.1-6.04-1.24-7.57-3.69-1.07-1.66-1.53-4.11-1.53-8.21 0-7.63 3.29-13.7 10.07-18.56l.1-.07-.91-.83c-1.18-1.18-1.51-3.06-.95-4.62a4.243 4.243 0 0 1 3.99-2.83h13.5c1.8 0 3.9.85 4.59 2.73s-.66 3.86-1.54 4.9l-.64.64.1.07c6.13 4.32 9.79 11.3 9.79 18.67 0 4.71-1.1 8.09-3.27 10.05-1.74 1.43-3.65 1.65-5.62 1.75H14.05Zm2.92-27.84c-5.87 4.28-8.72 9.56-8.72 16.14 0 3.47.3 5.35 1.07 6.7.79 1.37 2.49 2.1 4.93 2.1h19.8c1.69-.11 2.86-.33 3.87-1.15 1.46-1.26 2.23-3.91 2.23-7.65 0-6.33-3.15-12.36-8.42-16.14l-3.3-2.45.19-.16c.71-.61 2.51-2.31 3.19-2.99.78-.88.48-1.48.38-1.65-.18-.35-.61-.51-.93-.51H17.75c-.84 0-1.35.23-1.51.67-.25.42-.01 1.02.35 1.39l3.68 3.36-3.3 2.34Z"
        fill={fill}
      />
      <path
        d="M32.12 26.455h-.92l.55-1.97c.18-.65-.2-1.33-.85-1.51-.65-.18-1.33.2-1.51.85l-1.8 6.41-2.14-5.65a1.54 1.54 0 0 0-1.44-1.04c-.65 0-1.23.41-1.46 1.04l-1.96 5.68-2.09-6.48c-.21-.64-.9-1-1.54-.79-.64.21-1 .9-.79 1.54l.62 1.92h-.72c-.68 0-1.23.55-1.23 1.22 0 .67.55 1.22 1.23 1.22h1.51l1.51 4.7c.2.64.78 1.07 1.45 1.08.66 0 1.27-.42 1.47-1.04l2.02-5.87 2.24 5.92c.23.6.8 1 1.44 1h.05c.66-.02 1.24-.47 1.44-1.13l1.31-4.66h1.6c.68 0 1.22-.55 1.22-1.22 0-.67-.55-1.22-1.22-1.22h.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMoneyBagLineRegular)
const Memo = memo(ForwardRef)
export default Memo
