import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgSendPlaneLineRegular = (
  { size = "xl", sizePx, style, className, color, ...props }: IconProps,
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
        d="M8.744 40.4h-.12c-.35-.02-.68-.13-.96-.31a1.987 1.987 0 0 1-.92-1.67v-.16l1-9.68c.02-.44.18-.86.46-1.2.29-.35.71-.6 1.17-.69l11.39-2.46-11.41-2.46c-.43-.08-.84-.33-1.14-.68-.28-.34-.44-.76-.46-1.2l-1.01-9.69v-.14c0-.69.35-1.34.93-1.73a2 2 0 0 1 1.88-.17l31.93 13.66c.47.2.88.54 1.16.97.29.44.44.94.44 1.45s-.15 1.02-.43 1.45c-.28.43-.68.77-1.16.97L9.574 40.23c-.26.12-.54.18-.82.18l-.01-.01Zm1.74-11.09-.8 7.82 30.37-12.92-30.38-12.96.81 7.89 17.21 3.72a1.402 1.402 0 0 1 0 2.74l-17.21 3.72v-.01Zm-.52.11h-.02.02Zm-.05-10.4h.03-.03Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgSendPlaneLineRegular)
const Memo = memo(ForwardRef)
export default Memo
