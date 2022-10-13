import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgVideoFill = (
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
        d="M45.07 12.96c-.33-1.2-.96-2.3-1.84-3.17a7.209 7.209 0 0 0-3.19-1.84c-3.49-.92-14.31-.94-15.54-.94-1.23 0-12.08.02-15.57.99-1.2.32-2.3.96-3.17 1.84-.87.88-1.51 1.98-1.84 3.2C3.01 16.59 3 23.62 3 23.91c0 .29.01 7.34.98 10.92.32 1.2.96 2.3 1.84 3.17.88.88 1.98 1.51 3.17 1.84 3.49.95 14.33.98 15.55.98 1.22 0 12.06-.03 15.55-.97 1.2-.32 2.29-.96 3.17-1.84.88-.88 1.51-1.98 1.84-3.17.97-3.56.98-10.62.98-10.93 0-.3-.05-7.36-1.02-10.95h.01ZM31.68 24.45l-10.73 6.2a.653.653 0 0 1-.98-.57V17.69c0-.5.55-.82.98-.57l10.73 6.2c.44.25.44.88 0 1.13Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgVideoFill)
const Memo = memo(ForwardRef)
export default Memo
