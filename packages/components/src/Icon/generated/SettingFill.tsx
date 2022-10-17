import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgSettingFill = (
  {
    size = "XL",
    sizePx,
    style,
    className,
    color,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
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
      role="img"
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M24.08 27.89c2.37 0 4.3-1.93 4.3-4.3s-1.93-4.3-4.3-4.3-4.3 1.93-4.3 4.3 1.93 4.3 4.3 4.3Z"
        fill={fill}
      />
      <path
        d="m43.28 27.53-.04-.03-2.83-2.22c-.18-.14-.32-.32-.42-.53-.09-.21-.14-.43-.13-.66v-1.04c0-.23.04-.45.13-.66.1-.21.24-.39.42-.53l2.83-2.22.04-.03c.44-.36.73-.87.83-1.43.1-.56 0-1.13-.3-1.62l-3.83-6.62s0-.01-.01-.02c-.29-.48-.74-.85-1.27-1.03-.53-.18-1.11-.18-1.64.02h-.03l-3.32 1.35c-.21.08-.44.12-.66.1-.23-.02-.44-.09-.63-.21-.29-.19-.59-.36-.9-.52-.2-.11-.37-.26-.49-.44-.13-.18-.21-.4-.24-.62l-.5-3.55v-.06c-.12-.55-.41-1.04-.85-1.4-.43-.36-.97-.56-1.53-.56h-7.66c-.57 0-1.12.2-1.55.57-.43.37-.72.87-.82 1.43v.05l-.51 3.55c-.03.22-.11.43-.24.62-.13.18-.29.34-.49.44-.31.16-.61.34-.9.52a1.428 1.428 0 0 1-1.29.11l-3.33-1.34h-.03c-.53-.21-1.11-.22-1.64-.03-.53.19-.98.55-1.27 1.03v.02l-3.84 6.62c-.29.49-.39 1.06-.3 1.62.1.56.39 1.07.83 1.43l.04.03 2.83 2.22c.18.14.32.32.42.53.09.21.14.43.13.66v1.04c0 .23-.04.45-.13.66-.1.21-.24.39-.42.53l-2.83 2.22-.04.03c-.44.36-.73.87-.83 1.43-.1.56 0 1.13.3 1.62l3.83 6.62s0 .01.01.02c.29.48.74.85 1.27 1.03.53.18 1.11.18 1.64-.02h.03l3.32-1.35c.21-.08.44-.12.66-.1.23.02.44.09.63.21.29.19.59.36.9.52.2.11.37.26.49.44.13.18.21.4.24.62l.5 3.55v.06c.12.55.42 1.05.85 1.4.43.36.97.56 1.54.56h7.66c.57 0 1.12-.2 1.55-.57.43-.37.72-.87.82-1.43v-.05l.51-3.55c.03-.22.11-.43.24-.62.13-.18.3-.34.49-.44.31-.16.61-.34.9-.52a1.428 1.428 0 0 1 1.29-.11l3.33 1.34h.03c.53.21 1.11.22 1.64.03.53-.19.98-.55 1.27-1.04 0 0 0-.01.01-.02l3.83-6.62c.29-.49.4-1.06.3-1.62-.1-.56-.39-1.07-.83-1.43h-.01v.01Zm-12.05-3.59a7.18 7.18 0 0 1-1.34 3.85 7.096 7.096 0 0 1-3.23 2.49c-1.3.5-2.71.62-4.07.33-1.36-.29-2.6-.96-3.59-1.94a7.118 7.118 0 0 1-1.94-3.59c-.29-1.36-.17-2.77.33-4.07.5-1.3 1.37-2.42 2.49-3.23a7.156 7.156 0 0 1 3.85-1.34c1-.04 1.99.12 2.92.48.93.36 1.77.91 2.48 1.62.7.7 1.26 1.55 1.62 2.48.36.93.52 1.92.48 2.92Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgSettingFill)
const Memo = memo(ForwardRef)
export default Memo
