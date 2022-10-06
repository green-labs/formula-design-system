import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgShareArrowLineRegular = (
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
        d="M5.062 39.993a1.513 1.513 0 0 1-1.5-1.35c-.61-6.12 1.06-11.73 4.71-15.8 3.7-4.12 9.31-6.46 16.29-6.81v-6.54a1.498 1.498 0 0 1 2.47-1.14l17 14.5c.34.29.53.72.53 1.17 0 .45-.22.87-.57 1.15l-17 13.5c-.45.36-1.07.43-1.58.18-.52-.25-.85-.78-.85-1.35v-5.63c-7.34-.46-14.26 2.36-18.32 7.55-.29.37-.73.58-1.18.58v-.01Zm22.5-27.25v4.75c0 .82-.66 1.49-1.49 1.5-6.9.06-12.14 2.03-15.57 5.85-2.37 2.64-3.75 6.09-4.02 9.95 5.05-4.48 12.3-6.67 19.74-5.79.76.09 1.32.73 1.32 1.49v3.89l13.14-10.43-13.12-11.21Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgShareArrowLineRegular)
const Memo = memo(ForwardRef)
export default Memo
