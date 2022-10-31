import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCameraLineRegular = (
  {
    size = "xl",
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M40.75 40.5h-33c-1.27 0-2.46-.49-3.36-1.39-.9-.9-1.39-2.09-1.39-3.36v-18c0-1.27.49-2.46 1.39-3.36.9-.9 2.09-1.39 3.36-1.39h5.62c.22 0 .46-.2.61-.37l2.42-3.82c.04-.07.09-.14.15-.2C17.44 7.57 18.64 7 19.93 7h8.62c1.29 0 2.49.57 3.38 1.61.05.06.11.13.15.2l2.42 3.82c.22.23.5.37.71.37h5.53c1.27 0 2.46.49 3.36 1.39.9.9 1.39 2.09 1.39 3.36v18c0 1.27-.49 2.46-1.39 3.36-.9.9-2.09 1.39-3.36 1.39h.01Zm-33-24c-.33 0-.65.13-.88.37-.23.24-.37.55-.37.88v18c0 .33.13.65.37.88.24.23.55.37.88.37h33c.33 0 .65-.13.88-.37.23-.24.37-.55.37-.88v-18c0-.33-.13-.65-.37-.88-.24-.23-.55-.37-.88-.37h-5.53c-1.27 0-2.52-.61-3.43-1.67-.05-.06-.1-.13-.15-.2l-2.41-3.82c-.15-.16-.38-.31-.66-.31h-8.62c-.28 0-.5.15-.66.31l-2.42 3.82c-.04.07-.09.14-.15.2-.94 1.09-2.09 1.67-3.34 1.67H7.75Z"
        fill={fill}
      />
      <path
        d="M24.25 34.6c-5.16 0-9.35-4.19-9.35-9.35 0-5.16 4.19-9.35 9.35-9.35 5.16 0 9.35 4.19 9.35 9.35 0 5.16-4.19 9.35-9.35 9.35Zm0-15c-3.12 0-5.65 2.54-5.65 5.65 0 3.11 2.54 5.65 5.65 5.65 3.11 0 5.65-2.54 5.65-5.65 0-3.11-2.54-5.65-5.65-5.65Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCameraLineRegular)
const Memo = memo(ForwardRef)
export default Memo
