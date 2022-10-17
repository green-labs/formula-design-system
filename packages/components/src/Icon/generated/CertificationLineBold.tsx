import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCertificationLineBold = (
  {
    size = "XL",
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
      role="img"
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M21.685 30.68c-.45 0-.87-.18-1.19-.5l-5-5c-.32-.33-.5-.76-.5-1.21 0-.45.18-.88.5-1.19.32-.32.75-.5 1.2-.5.45 0 .88.18 1.2.5l3.77 3.77 8.4-8.75c.32-.34.76-.52 1.22-.52.44 0 .86.17 1.18.48.33.31.51.73.52 1.18 0 .46-.16.89-.48 1.22l-9.6 10c-.32.34-.76.52-1.21.52h-.02.01Z"
        fill={fill}
      />
      <path
        d="M28.835 44.4c-.43 0-.85-.12-1.22-.34l-3.62-2.18-3.62 2.18c-.37.22-.79.34-1.22.34-.86 0-1.65-.47-2.07-1.22l-2.04-3.69-4.22.08c-.68 0-1.28-.25-1.73-.71-.45-.46-.69-1.06-.68-1.7l.08-4.22-3.69-2.04c-.57-.31-.97-.83-1.14-1.46-.17-.63-.08-1.27.26-1.83l2.18-3.62-2.17-3.6c-.33-.56-.43-1.21-.26-1.83.17-.62.57-1.14 1.14-1.45l3.69-2.04-.08-4.22c-.01-.64.23-1.24.68-1.7.45-.46 1.05-.71 1.68-.71l4.27.08 2.04-3.69c.42-.75 1.21-1.22 2.07-1.22.43 0 .85.12 1.22.34l3.62 2.18 3.61-2.19c.37-.22.79-.34 1.22-.34.86 0 1.65.47 2.07 1.22l2.04 3.69 4.22-.08c.68 0 1.28.25 1.73.71.45.46.69 1.06.68 1.7l-.08 4.22 3.69 2.04c.57.31.97.83 1.14 1.46.17.63.08 1.28-.26 1.83l-2.18 3.62 2.18 3.62c.33.55.43 1.2.26 1.83-.17.62-.57 1.14-1.14 1.46l-3.69 2.04.08 4.22c.01.64-.23 1.24-.68 1.7-.45.46-1.05.71-1.68.71l-4.27-.08-2.04 3.69c-.42.75-1.21 1.22-2.07 1.22v-.02Zm-9.19-4.14 4.36-2.62 4.36 2.62 2.46-4.45 5.09.09-.09-5.09 4.45-2.46-2.62-4.36 2.62-4.36-4.45-2.46.09-5.09-5.09.09-2.46-4.45-4.36 2.62-4.36-2.62-2.46 4.45-5.09-.1.09 5.09-4.45 2.46 2.62 4.36-2.62 4.36 4.45 2.46-.09 5.09 5.09-.09 2.46 4.45v.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCertificationLineBold)
const Memo = memo(ForwardRef)
export default Memo
