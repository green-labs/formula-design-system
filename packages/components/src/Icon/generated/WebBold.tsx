import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgWebBold = (
  {
    size = "xl",
    sizePx,
    style,
    className,
    color,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const finalSize = sizePx ? sizePx : convertSizeToPx(size)
  const fill = color && colorMap[color]
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
        d="M24 3.3C12.59 3.3 3.3 12.59 3.3 24S12.59 44.7 24 44.7 44.7 35.41 44.7 24 35.41 3.3 24 3.3Zm17.21 19h-5.56c-.14-3.07-.63-5.93-1.42-8.45.84-.48 1.66-1 2.43-1.59 2.5 2.7 4.17 6.18 4.55 10.05v-.01ZM24 41.3c-2.49 0-4.59-2.37-6.06-5.77 1.9-.67 3.94-1.03 6.06-1.03 2.12 0 4.16.36 6.06 1.03-1.47 3.4-3.57 5.77-6.06 5.77Zm9.17-4.31c.42.25.83.53 1.22.81-.78.59-1.62 1.12-2.5 1.58.46-.74.89-1.53 1.28-2.39Zm-17.06 2.39c-.88-.45-1.71-.98-2.5-1.58.4-.29.8-.56 1.22-.81.39.86.82 1.65 1.28 2.39ZM24 31.5c-2.46 0-4.84.43-7.06 1.21-.64-2.19-1.05-4.61-1.19-7.01h16.5c-.13 2.4-.55 4.82-1.19 7.01A21.28 21.28 0 0 0 24 31.5Zm-8.25-9.2c.13-2.4.55-4.82 1.19-7.01 2.22.78 4.6 1.21 7.06 1.21s4.84-.43 7.06-1.21c.64 2.19 1.05 4.61 1.19 7.01h-16.5ZM24 6.7c2.49 0 4.59 2.37 6.06 5.77-1.9.67-3.94 1.03-6.06 1.03-2.12 0-4.16-.36-6.06-1.03C19.41 9.07 21.51 6.7 24 6.7Zm-9.17 4.31c-.42-.25-.83-.53-1.22-.81.78-.59 1.62-1.12 2.5-1.58-.46.74-.89 1.53-1.28 2.39Zm17.06-2.39c.88.45 1.71.98 2.5 1.58-.4.29-.8.56-1.22.81-.39-.86-.82-1.65-1.28-2.39Zm-20.55 3.63c.77.6 1.58 1.12 2.43 1.59-.79 2.52-1.28 5.38-1.42 8.45H6.79c.38-3.86 2.05-7.35 4.55-10.05v.01ZM6.79 25.7h5.56c.14 3.07.63 5.93 1.42 8.45-.84.48-1.66 1-2.43 1.59-2.5-2.7-4.17-6.18-4.55-10.05v.01Zm29.88 10.05c-.77-.6-1.58-1.12-2.43-1.59.79-2.52 1.28-5.38 1.42-8.45h5.56c-.38 3.86-2.05 7.35-4.55 10.05v-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgWebBold)
const Memo = memo(ForwardRef)
export default Memo
