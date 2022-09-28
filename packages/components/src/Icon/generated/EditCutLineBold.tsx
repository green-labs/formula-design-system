import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgEditcutLineBold = (
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
        d="M43.5 32.8H18c-.72 0-1.47-.29-1.96-.77-.39-.45-.84-1.16-.84-2.03V4.5c0-.94-.76-1.7-1.7-1.7s-1.7.76-1.7 1.7v7.3H4.5c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h7.3V30c0 1.56.6 3.06 1.73 4.33.02.03.05.05.07.07 1.13 1.13 2.77 1.8 4.4 1.8h14.8v7.3c0 .94.76 1.7 1.7 1.7s1.7-.76 1.7-1.7v-7.3h7.3c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7Z"
        fill={fill}
      />
      <path
        d="M34.5 30.2c.94 0 1.7-.76 1.7-1.7V18c0-1.56-.6-3.06-1.73-4.33-.02-.03-.05-.05-.07-.07-1.13-1.13-2.77-1.8-4.4-1.8H19.5c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7H30c.72 0 1.47.29 1.96.77.39.45.84 1.16.84 2.03v10.5c0 .94.76 1.7 1.7 1.7Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgEditcutLineBold)
const Memo = memo(ForwardRef)
export default Memo
