import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgSendPlaneLineBold = (
  {
    size = "XL",
    sizePx,
    style,
    className,
    fill,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const finalSize = sizePx ? sizePx : convertSizeToPx(size)
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
        d="M43.33 23.04c-.25-.51-.71-.96-1.21-1.21-.03-.01-.06-.03-.09-.04L10.22 8.22c-.67-.33-1.46-.29-2.12.12-.68.42-1.1 1.15-1.1 1.91v.16l.99 9.64c.01.29.08.51.14.66.17.77.86 1.34 1.75 1.42l10.35 2.21-10.4 2.22c-.53.08-1.01.38-1.27.65-.52.52-.56 1.11-.57 1.45L7 38.29v.16c0 .52.16.96.47 1.33.2.29.43.47.65.58.08.05.15.09.24.12.28.21.65.37 1.15.37.22 0 .43-.04.63-.13l31.98-13.64c.51-.25.97-.71 1.22-1.21.13-.26.37-.74.37-1.42 0-.63-.28-1.25-.37-1.42l-.01.01ZM10.34 37.15l.78-7.58 17.11-3.65c.74-.16 1.27-.81 1.27-1.56s-.53-1.41-1.27-1.56l-17.11-3.66-.76-7.38 29.77 12.69-29.79 12.7Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgSendPlaneLineBold)
const Memo = memo(ForwardRef)
export default Memo
