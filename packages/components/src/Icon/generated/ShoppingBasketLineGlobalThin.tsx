import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketLineGlobalThin = (
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
        d="M12.54 43.2a5.33 5.33 0 0 1-3.13-1.05 5.201 5.201 0 0 1-1.88-2.74L3.48 21.44a3.189 3.189 0 0 1 .84-3.15c.61-.6 1.41-.93 2.27-.93h7.36l9.09-12.1c.21-.29.58-.46.97-.46s.76.17.97.46l9.08 12.12h7.36c.86 0 1.66.33 2.27.93l.15.15c.52.58.8 1.32.8 2.1v.18l-.06.51-.03.15-4.04 17.95c-.33 1.14-.99 2.12-1.9 2.8-.9.68-2.01 1.05-3.15 1.05H12.54ZM6.59 19.8a.787.787 0 0 0-.79.79l.04.25 4.04 17.98c.16.54.52 1.05.99 1.39.5.37 1.06.56 1.68.56h22.94a2.821 2.821 0 0 0 2.7-2.04l4.06-18.2v-.05a.895.895 0 0 0-.24-.45.787.787 0 0 0-.56-.23H6.59Zm10.4-2.42h14.05l-7.02-9.37-7.03 9.37Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.48 35.54c-.56 0-1.05-.38-1.18-.93l-2-8.4c-.15-.65.25-1.31.9-1.46.09-.02.19-.03.28-.03.56 0 1.05.38 1.18.93l2 8.4c.15.65-.25 1.31-.9 1.47-.09.02-.19.03-.28.03v-.01ZM24.01 35.54c-.67 0-1.22-.55-1.22-1.22v-8.4c0-.67.55-1.22 1.22-1.22.67 0 1.22.55 1.22 1.22v8.4c0 .67-.55 1.22-1.22 1.22ZM31.54 35.54c-.09 0-.19-.01-.28-.03a1.2 1.2 0 0 1-.75-.55c-.17-.28-.22-.6-.15-.92l2-8.4c.13-.55.62-.93 1.18-.93.09 0 .19.01.28.03.32.08.58.27.75.55.17.28.22.6.15.92l-2 8.4c-.13.55-.62.93-1.18.93Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketLineGlobalThin)
const Memo = memo(ForwardRef)
export default Memo
