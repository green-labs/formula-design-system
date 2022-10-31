import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgNotificationLineRegular = (
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
        d="m42.014 32-.46-.56c-2.06-2.5-3.31-4-3.31-11.07 0-6.41-2.57-10.59-7.85-12.76-.03-.01-.07-.05-.06-.03-.81-2.74-3.04-4.59-5.57-4.59-2.53 0-4.77 1.85-5.54 4.54a.27.27 0 0 1-.08.07c-5.29 2.18-7.85 6.35-7.85 12.76 0 7.06-1.25 8.57-3.31 11.07l-.46.55a3.317 3.317 0 0 0-.44 3.53c.58 1.22 1.81 1.98 3.22 1.98h6.97v.5c0 2 .78 3.89 2.2 5.3 1.42 1.42 3.3 2.2 5.3 2.2s3.89-.78 5.3-2.2c1.42-1.42 2.2-3.3 2.2-5.3v-.5h6.98c1.4 0 2.63-.76 3.21-1.97.56-1.17.39-2.52-.43-3.53l-.02.01Zm-12.76 6c0 1.2-.47 2.33-1.32 3.18-.85.85-1.98 1.32-3.18 1.32-1.2 0-2.33-.47-3.18-1.32a4.471 4.471 0 0 1-1.32-3.18v-.5h9v.5Zm10.48-3.76c-.05.1-.17.26-.5.26h-28.95c-.33 0-.46-.16-.51-.26-.08-.18.02-.3.05-.34l.45-.54c2.23-2.7 4-4.83 4-12.98 0-6.67 3.21-8.84 6-9.99.86-.35 1.55-1.1 1.8-1.96.35-1.21 1.32-2.43 2.68-2.43s2.33 1.22 2.69 2.44c.25.85.94 1.6 1.8 1.95 2.79 1.15 6 3.32 6 9.99 0 8.14 1.76 10.28 4 12.98l.45.54s.13.16.05.35l-.01-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgNotificationLineRegular)
const Memo = memo(ForwardRef)
export default Memo
