import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgSendPlaneLineThin = (
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
        d="M8.42 27.081c-.39.39-.42.83-.42 1.12l-1 9.64v.11c0 .16 0 .61.37 1.02.15.24.34.38.51.46.08.05.16.09.23.12.21.17.5.3.89.3.15 0 .29-.03.43-.09l31.96-13.63c.42-.21.79-.58.99-.99.13-.25.32-.63.32-1.19 0-.52-.24-1.05-.32-1.19a2.41 2.41 0 0 0-1.05-1.02L9.49 8.171c-.51-.26-1.12-.22-1.63.09-.53.33-.86.9-.86 1.49v.11l1 9.66c.01.24.07.43.12.56.11.58.65 1.01 1.34 1.07l12.67 2.71-12.71 2.71c-.39.05-.78.28-1 .51Zm19.21-2.15c.51-.11.87-.56.87-1.08s-.36-.97-.87-1.08l-17.47-3.72-.88-8.58 31.14 13.28c.04.08.08.2.08.21 0 .03 0 .05-.03.19l-31.21 13.3.91-8.79 17.46-3.73Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgSendPlaneLineThin)
const Memo = memo(ForwardRef)
export default Memo
