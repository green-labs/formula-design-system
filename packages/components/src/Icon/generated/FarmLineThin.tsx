import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgFarmLineThin = (
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
        d="M36.9 39.95c-.5 0-1-.5-1-1v-14.9c0-6.2-3.3-12.2-8.6-15.5 1.2-.3 2.4-.5 3.6-.5 1.3 0 2.7.2 4 .5 7.1 1.9 12 8.6 12 16.3v11.1c0 2.2-1.8 3.9-3.9 3.9l-6.1.1Zm-3-28.5c2.8 3.7 4.4 8.2 4.4 12.6v13.5H43c.8 0 1.5-.7 1.5-1.5v-11.1c0-6.6-4.2-12.3-10.2-14l-.9-.2.5.7Zm-11 28.5c-.5 0-1-.5-1-1v-5.7c0-2.7-2.2-4.9-4.9-4.9h-.5c-2.3.3-4.4 2.7-4.4 5.2v5.4c0 .5-.5 1-1 1H5c-2.2 0-3.9-1.8-3.9-3.9v-11.3c0-8.9 6.9-16.3 15.4-16.6h.5c8.7 0 15.9 7.1 16 15.9v14.9c0 .5-.5 1-1 1h-9.1Zm-5.8-14c4 0 7.3 3.3 7.3 7.3v4.3h6.3v-13.5c-.1-7.5-6.2-13.5-13.6-13.5h-.4c-7.2.2-13.1 6.6-13.1 14.2v11.3c0 .8.7 1.5 1.5 1.5h4.7v-4c0-3.7 2.9-7.1 6.4-7.6h.9Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgFarmLineThin)
const Memo = memo(ForwardRef)
export default Memo
