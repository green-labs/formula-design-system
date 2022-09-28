import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgSearchLineBold = (
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
        d="M33.721 31.4c.5-.5.9-1 1.3-1.6 1.8-2.7 2.7-5.8 2.7-9.1 0-4.3-1.7-8.4-4.8-11.6-3.2-3-7.3-4.7-11.6-4.7-3.1 0-6.3.9-9.1 2.7-2.6 1.8-4.7 4.3-6 7.3-1.3 3.1-1.6 6.4-.9 9.5.7 3.3 2.3 6.2 4.5 8.4 2.4 2.3 5.2 3.8 8.3 4.5 1.1.2 2.2.3 3.3.3 2.1 0 4.2-.4 6.2-1.2 1.2-.5 2.3-1.1 3.3-1.9l9 9.1c.4.4.8.5 1.3.5s.9-.2 1.3-.5c.7-.7.7-1.9 0-2.6l-8.8-9.1Zm-7.5 1c-2.4 1-4.9 1.2-7.3.7-2.4-.5-4.6-1.7-6.5-3.5-1.7-1.6-2.9-3.9-3.5-6.4-.5-2.4-.3-4.9.7-7.3 1-2.4 2.6-4.3 4.6-5.7 2.2-1.4 4.7-2.1 7.1-2.1 3.4 0 6.6 1.3 9 3.6 2.4 2.5 3.7 5.7 3.7 9 0 2.6-.7 5-2.1 7-1.4 2.1-3.5 3.7-5.7 4.7Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgSearchLineBold)
const Memo = memo(ForwardRef)
export default Memo
