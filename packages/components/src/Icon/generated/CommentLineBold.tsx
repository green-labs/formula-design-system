import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCommentLineBold = (
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
        d="M12.95 41.92c-.29 0-.57-.07-.83-.21a1.77 1.77 0 0 1-.94-1.56v-4.43h-1.03c-1.71 0-3.45-.72-4.65-1.92a6.526 6.526 0 0 1-1.92-4.65v-16.5c0-1.71.72-3.45 1.92-4.65a6.526 6.526 0 0 1 4.65-1.92h27.6c1.55 0 3.22.61 4.59 1.67.06.05.11.09.17.15a6.526 6.526 0 0 1 1.92 4.65v16.5c0 1.8-.7 3.53-1.92 4.75a6.526 6.526 0 0 1-4.65 1.92H22.7l-8.75 5.9c-.3.2-.64.3-.99.3h-.01Zm-2.8-32.3c-.83 0-1.57.3-2.15.88-.54.54-.88 1.38-.88 2.15v16.5c0 .83.3 1.57.88 2.15.54.53 1.38.88 2.15.88h2.8c.98 0 1.77.79 1.77 1.77v2.87l6.05-4.08c.44-.36 1.01-.56 1.58-.56h15.5c.83 0 1.57-.31 2.15-.88.55-.55.88-1.39.88-2.25v-16.5c0-.79-.28-1.51-.81-2.07-.58-.43-1.47-.86-2.32-.86h-27.6Z"
        fill={fill}
      />
      <path
        d="M13.6 20.45c0 1.27 1.08 2.35 2.35 2.35 1.32 0 2.35-1.03 2.35-2.35s-1.03-2.35-2.35-2.35-2.35 1.08-2.35 2.35ZM21.6 20.45c0 1.27 1.08 2.35 2.35 2.35 1.32 0 2.35-1.03 2.35-2.35s-1.03-2.35-2.35-2.35-2.35 1.08-2.35 2.35ZM29.6 20.45c0 1.27 1.08 2.35 2.35 2.35 1.32 0 2.35-1.03 2.35-2.35s-1.03-2.35-2.35-2.35-2.35 1.08-2.35 2.35Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCommentLineBold)
const Memo = memo(ForwardRef)
export default Memo
