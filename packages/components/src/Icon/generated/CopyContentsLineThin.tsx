import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgCopycontentsLineThin = (
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
        d="M36.15 10.3h-2.07c.1-.18.17-.37.17-.6 0-1.7-.7-3.3-1.8-4.4-1.2-1.3-2.6-1.9-4.1-1.9h-16.1c-1.8 0-3.5.8-4.6 2.1-1.2 1.3-1.9 3.1-1.9 5v19.9c0 1.7.6 3.3 1.7 4.4 1.1 1.3 2.6 1.9 4.2 1.9h1.1s.06-.02.1-.02V38c0 3.6 2.7 6.6 6.1 6.6h17.2c3.4 0 6.1-3 6.1-6.6V16.9c0-3.6-2.7-6.6-6.1-6.6Zm-23.3 6.6v17.42s-.06-.02-.1-.02h-1.1c-1 0-1.8-.3-2.5-1.1-.6-.7-1-1.7-1-2.8V10.5c0-1.2.4-2.5 1.3-3.4.7-.8 1.7-1.3 2.8-1.3h16.1c.9 0 1.7.3 2.5 1.1.6.7 1 1.7 1 2.8 0 .23.07.42.17.6H18.95c-3.4 0-6.1 3-6.1 6.6Zm27 21.1c0 2.3-1.7 4.2-3.7 4.2h-17.2c-2 0-3.7-1.9-3.7-4.2V16.9c0-2.3 1.7-4.2 3.7-4.2h17.2c2 0 3.7 1.9 3.7 4.2V38Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgCopycontentsLineThin)
const Memo = memo(ForwardRef)
export default Memo
