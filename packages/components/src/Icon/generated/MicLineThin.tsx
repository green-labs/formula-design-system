import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgMicLineThin = (
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M22.8 35.64v5.16H18c-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2h12c.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2h-4.8v-5.16c6.72-.61 12-6.27 12-13.14v-3c0-.66-.54-1.2-1.2-1.2-.66 0-1.2.54-1.2 1.2v3c0 5.96-4.84 10.8-10.8 10.8-5.96 0-10.8-4.84-10.8-10.8v-3c0-.66-.54-1.2-1.2-1.2-.66 0-1.2.54-1.2 1.2v3c0 6.87 5.28 12.53 12 13.14Z"
        fill={fill}
      />
      <path
        d="M16.8 22.3c0 3.96 3.3 7.3 7.2 7.3 3.9 0 7.2-3.28 7.2-7.3V12c0-4.04-3.16-7.2-7.2-7.2-.94 0-1.86.23-2.63.45-.05.01-.1.03-.14.05-.97.42-1.75.92-2.38 1.55-.69.69-1.18 1.41-1.56 2.28-.43.99-.59 1.95-.5 2.84V22.3h.01Zm2.7-12.23c.25-.58.57-1.05 1.05-1.53.4-.4.9-.73 1.56-1.01.62-.18 1.28-.33 1.9-.33 2.74 0 4.8 2.06 4.8 4.8v10.3c0 2.7-2.15 4.9-4.8 4.9s-4.8-2.24-4.8-4.9V11.75c-.06-.49.04-1.05.31-1.68h-.02Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgMicLineThin)
const Memo = memo(ForwardRef)
export default Memo
