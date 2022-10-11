import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgNotificationSlashLineThin = (
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
        d="M41.294 31.95c-2.09-2.57-3.35-4.13-3.35-11.25v-1.2c0-.66-.54-1.2-1.2-1.2-.66 0-1.2.54-1.2 1.2v1.2c0 7.97 1.63 9.98 3.89 12.76l.49.61c.22.27.12.56.07.68-.06.14-.27.45-.75.45h-20.5c-.66 0-1.2.53-1.2 1.19v.99c0 1.96.78 3.75 2.15 5 1.35 1.33 3.24 2.13 5.05 2.13 1.93 0 3.83-.81 5.05-2.13 1.29-1.28 2.08-3.05 2.14-4.77h7.31c1.27 0 2.39-.7 2.92-1.84.51-1.09.36-2.33-.38-3.21l-.49-.6v-.01Zm-13.23 8.78c-.81.87-2.05 1.4-3.32 1.4-1.17 0-2.46-.55-3.39-1.47-.87-.79-1.33-1.84-1.39-3.06h9.55c-.07 1.1-.59 2.27-1.46 3.13h.01ZM9.844 32.9c.36 0 .71-.16.95-.47 1.79-2.31 3.15-4.65 3.15-11.83s3.52-9.18 6.24-10.33c.57-.29 1.31-.92 1.52-1.77.34-1.29 1.46-2.6 2.94-2.6s2.6 1.31 2.94 2.59c.21.86.96 1.5 1.53 1.78.05.03.1.05.16.06.36.12.69.29 1.08.5l.46.24c.59.3 1.31.06 1.61-.54.3-.59.06-1.31-.54-1.61l-.42-.22c-.41-.21-.84-.44-1.33-.61-.12-.07-.21-.18-.23-.2-.68-2.59-2.84-4.4-5.26-4.4s-4.58 1.81-5.25 4.38a.72.72 0 0 1-.21.22c-5.14 2.15-7.64 6.25-7.64 12.51s-1.1 8.36-2.65 10.37c-.41.52-.31 1.28.22 1.68.22.17.48.25.73.25ZM43.594 5.45c-.47-.47-1.23-.47-1.7 0l-36 36a1.201 1.201 0 1 0 1.7 1.7l36-36c.47-.47.47-1.23 0-1.7Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgNotificationSlashLineThin)
const Memo = memo(ForwardRef)
export default Memo
