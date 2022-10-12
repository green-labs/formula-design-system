import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShareIosLineBold = (
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
        d="M39.15 18.85c-.06-.06-.12-.11-.18-.16-1.19-.89-2.44-1.34-3.72-1.34h-3.8c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h3.8c.51 0 1.02.19 1.58.58.33.37.52.8.52 1.22v16.9c0 .44-.22.92-.6 1.3-.32.32-.87.5-1.5.5h-22.5c-.51 0-1.02-.19-1.58-.58-.33-.37-.52-.8-.52-1.22v-16.9c0-.44.22-.92.6-1.3.32-.32.86-.5 1.5-.5h3.8c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7h-3.8c-1.55 0-2.94.53-3.9 1.5-1.03 1.03-1.6 2.35-1.6 3.7v16.9c0 1.36.57 2.67 1.6 3.7.06.06.12.11.18.16 1.19.89 2.44 1.34 3.72 1.34h22.5c1.55 0 2.93-.53 3.9-1.5 1.03-1.03 1.6-2.35 1.6-3.7v-16.9c0-1.36-.57-2.67-1.6-3.7Z"
        fill={fill}
      />
      <path
        d="m17.65 13.75 4.6-4.6v18.4c0 .94.76 1.7 1.7 1.7s1.7-.76 1.7-1.7V9.15l4.6 4.6c.33.33.77.5 1.2.5a1.702 1.702 0 0 0 1.2-2.9l-7.5-7.5c-.66-.66-1.74-.66-2.4 0l-7.5 7.5c-.66.66-.66 1.74 0 2.4.66.66 1.74.66 2.4 0Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShareIosLineBold)
const Memo = memo(ForwardRef)
export default Memo
