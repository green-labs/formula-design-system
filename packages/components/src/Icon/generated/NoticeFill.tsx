import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgNoticeFill = (
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
        d="M43.94 36.7 27.96 7.03c-1.7-3.16-6.22-3.16-7.92 0L4.06 36.7c-.37.68-.56 1.45-.54 2.23a4.535 4.535 0 0 0 2.28 3.82c.68.38 1.44.59 2.22.59h31.96c.78 0 1.54-.2 2.22-.59.68-.38 1.24-.94 1.64-1.61.4-.67.62-1.43.64-2.21.02-.78-.17-1.55-.54-2.23ZM21.96 18.37a2.028 2.028 0 0 1 .56-1.49c.18-.19.4-.34.65-.46.26-.11.52-.17.79-.17.32.02.56.05.81.16.26.11.49.26.68.46.19.2.34.43.44.69.1.26.14.54.13.82l-.54 11.43c-.04.8-.7 1.43-1.5 1.43s-1.46-.63-1.5-1.43l-.54-11.44h.02Zm3.58 18.52a1.983 1.983 0 0 1-2.52.25c-.33-.22-.59-.53-.74-.9a2.004 2.004 0 0 1 .44-2.18 2.004 2.004 0 0 1 2.18-.44 2.014 2.014 0 0 1 1.24 1.85c0 .53-.21 1.04-.59 1.41l-.01.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgNoticeFill)
const Memo = memo(ForwardRef)
export default Memo
