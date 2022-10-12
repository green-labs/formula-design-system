import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgLocationLineRegular1 = (
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
        d="M24 45.05c-.65 0-1.1-.22-1.37-.36-.6-.3-.92-.87-1.17-1.37-.05-.1-.09-.21-.12-.32-1.96-8.17-5.21-12.37-7.81-15.75-2.38-3.08-4.43-5.74-4.43-10 0-7.88 6.68-14.3 14.9-14.3s14.9 6.42 14.9 14.3c0 4.26-2.05 6.92-4.43 10-2.6 3.37-5.83 7.55-7.79 15.67-.12.75-.73 1.48-1.3 1.77-.17.09-.77.36-1.38.36Zm0-39.1c-6.56 0-11.9 5.07-11.9 11.3 0 3.24 1.6 5.31 3.8 8.17 2.67 3.46 5.97 7.73 8.1 15.85 2.13-8.12 5.43-12.39 8.1-15.85 2.21-2.86 3.8-4.93 3.8-8.17 0-6.23-5.34-11.3-11.9-11.3Z"
        fill={fill}
      />
      <path
        d="M24 22.85c2.7 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.3 5 5 5Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgLocationLineRegular1)
const Memo = memo(ForwardRef)
export default Memo
