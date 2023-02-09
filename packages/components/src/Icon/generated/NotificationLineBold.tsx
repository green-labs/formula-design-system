import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgNotificationLineBold = (
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
        d="m42.068 31.665-.48-.59c-2.02-2.49-3.24-3.99-3.24-10.93 0-6.36-2.64-10.71-7.86-12.93-.01 0-.02-.02-.03-.02-.77-2.74-3.11-4.64-5.71-4.64s-4.92 1.89-5.71 4.64c-.01 0-.02.02-.03.02-5.29 2.25-7.86 6.48-7.86 12.93 0 6.94-1.22 8.44-3.24 10.93l-.47.58c-.87 1.05-1.06 2.46-.48 3.69.61 1.29 1.9 2.1 3.39 2.1h6.6v.3c0 1.97.84 3.94 2.25 5.35 1.35 1.47 3.39 2.35 5.45 2.35 1.94 0 3.96-.86 5.35-2.25 1.52-1.39 2.35-3.33 2.35-5.45v-.3h7c1.37 0 2.59-.78 3.18-2.04.58-1.25.4-2.68-.47-3.73l.01-.01Zm-13.11 6.08c0 1.18-.43 2.2-1.3 3-.79.79-1.97 1.3-3 1.3-1.13 0-2.23-.47-3-1.3-.83-.83-1.3-1.92-1.3-3v-.3h8.6v.3Zm10.5-3.79s-.05.09-.1.09h-29c-.12 0-.22-.03-.28-.1v-.14l.48-.59c2.48-3.05 4-5.32 4-13.07 0-6.54 3.13-8.69 5.86-9.83.04-.01.07-.03.1-.05.7-.35 1.53-1.09 1.78-2.09.29-1.11 1.23-2.23 2.46-2.23s2.17 1.12 2.45 2.21c.25 1.02 1.09 1.76 1.79 2.11.03.02.07.03.1.05 2.51 1.05 5.86 3.22 5.86 9.83 0 7.76 1.52 10.02 4 13.07l.48.59s.01.02.02.03c.02.03.04.05.01.13l-.01-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgNotificationLineBold)
const Memo = memo(ForwardRef)
export default Memo
