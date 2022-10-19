import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgNotificationLineThin = (
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
        d="m41.744 31.935-.03-.03-.43-.52c-2.11-2.52-3.38-4.04-3.38-11.28 0-6.28-2.51-10.39-7.59-12.52a.838.838 0 0 1-.25-.2c-.69-2.61-2.87-4.43-5.31-4.43-2.44 0-4.62 1.82-5.3 4.4-.03.05-.14.17-.19.19-5.16 2.16-7.67 6.27-7.67 12.55 0 7.1-1.26 8.65-3.34 11.22l-.47.58c-.77.92-.92 2.18-.41 3.28a3.248 3.248 0 0 0 2.97 1.87h7.05v.75c0 1.83.81 3.73 2.13 5.05 1.27 1.38 3.18 2.2 5.12 2.2 1.83 0 3.73-.81 5.04-2.13 1.42-1.3 2.21-3.12 2.21-5.12v-.75h7.45c1.17 0 2.22-.66 2.74-1.73.54-1.1.41-2.4-.35-3.39l.01.01Zm-12.34 5.86c0 1.31-.48 2.44-1.43 3.32-.87.87-2.17 1.43-3.32 1.43-1.25 0-2.48-.52-3.32-1.43-.87-.87-1.43-2.17-1.43-3.32v-.75h9.5v.75Zm10.45-3.58c-.05.1-.2.33-.5.33h-29c-.45 0-.64-.3-.7-.43a.582.582 0 0 1 .08-.64l.48-.59c2.26-2.79 3.9-4.8 3.9-12.79 0-6.8 3.28-9.05 6.21-10.28.58-.29 1.34-.94 1.55-1.8.34-1.28 1.44-2.57 2.89-2.57 1.45 0 2.56 1.29 2.89 2.55.22.88.97 1.53 1.63 1.85 2.63 1.1 6.13 3.37 6.13 10.25 0 8.16 1.66 10.14 3.96 12.89l.41.49c.24.33.14.63.08.74h-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgNotificationLineThin)
const Memo = memo(ForwardRef)
export default Memo
