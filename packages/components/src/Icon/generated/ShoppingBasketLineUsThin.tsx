import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketLineUsThin = (
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
        d="M12.54 43.2a5.33 5.33 0 0 1-3.13-1.05 5.201 5.201 0 0 1-1.88-2.74L3.48 21.44a3.189 3.189 0 0 1 .84-3.15c.61-.6 1.41-.93 2.27-.93h7.36l9.09-12.1c.21-.29.58-.46.97-.46s.76.17.97.46l9.08 12.12h7.36c.86 0 1.66.33 2.27.93l.15.15c.52.58.8 1.32.8 2.09v.18l-.06.51-.03.14-4.04 17.96c-.33 1.14-.99 2.12-1.9 2.8-.9.68-2.02 1.05-3.15 1.05H12.54v.01ZM6.59 19.8a.787.787 0 0 0-.79.79l.05.25 4.04 17.98c.16.54.52 1.05.99 1.39.5.37 1.06.56 1.68.56H35.5a2.821 2.821 0 0 0 2.7-2.04l4.06-18.2v-.05a.895.895 0 0 0-.24-.45.787.787 0 0 0-.56-.23H6.59Zm10.4-2.42h14.05l-7.02-9.37-7.03 9.37Z"
        fill={fill}
      />
      <path
        d="M24.01 37.7c-.62 0-1.12-.51-1.12-1.14v-.79l-.23-.04c-1.23-.22-2.26-.71-2.84-1.36-.39-.38-.6-.84-.6-1.28 0-.56.38-.92.98-.92.4 0 .72.15 1.25.58.91.78 1.79 1.13 2.85 1.13 1.13 0 1.8-.46 1.8-1.23 0-1.09-1.12-1.31-1.48-1.38l-1.75-.36c-1.48-.31-3.24-1.1-3.24-3.07 0-1.62 1.1-2.78 3.03-3.17l.23-.05v-.71c0-.63.5-1.14 1.12-1.14.62 0 1.12.51 1.12 1.14v.7l.24.04c.96.15 1.75.44 2.29.83.62.45.93.96.93 1.52 0 .52-.4.9-.95.9-.42 0-.81-.23-1.38-.65-.69-.55-1.44-.83-2.28-.83-1 0-1.65.46-1.65 1.17 0 .46.26 1.07 1.49 1.31l1.88.39c2.13.46 3.12 1.43 3.12 3.05 0 1.83-1.26 3.08-3.45 3.41l-.24.04v.77c0 .63-.5 1.14-1.12 1.14Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketLineUsThin)
const Memo = memo(ForwardRef)
export default Memo
