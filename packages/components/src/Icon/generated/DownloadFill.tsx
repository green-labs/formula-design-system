import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgDownloadFill = (
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
        d="M32.65 20.66c.74-.74 1.95-.74 2.69 0v-.02c.74.75.74 1.95 0 2.69l-10 10c-.09.09-.19.17-.29.24a2.327 2.327 0 0 1-.07.04 2.327 2.327 0 0 0-.07.04c-.06.04-.12.07-.19.1-.038.02-.081.03-.122.041a4.772 4.772 0 0 0-.103.031 1.553 1.553 0 0 1-.504.078c-.12 0-.25-.02-.37-.04-.048-.008-.09-.022-.135-.038l-.036-.012a2.008 2.008 0 0 0-.055-.015c-.047-.012-.091-.023-.135-.045a1.21 1.21 0 0 1-.119-.061 1.566 1.566 0 0 0-.07-.039c-.05-.02-.1-.04-.14-.07-.1-.07-.2-.15-.29-.24l-10-10c-.74-.75-.74-1.95 0-2.69s1.95-.74 2.69 0l6.76 6.76V8a1.9 1.9 0 1 1 3.8 0v19.42l6.76-6.76Z"
        fill={fill}
      />
      <path
        d="M12 41.9h24c1.58 0 3.06-.62 4.17-1.73A5.821 5.821 0 0 0 41.9 36v-4a1.9 1.9 0 1 0-3.8 0v4c0 .57-.22 1.09-.62 1.49-.39.39-.92.61-1.48.61H12c-.57 0-1.09-.22-1.49-.62-.39-.39-.61-.92-.61-1.48v-4a1.9 1.9 0 1 0-3.8 0v4c0 1.58.62 3.06 1.73 4.17A5.821 5.821 0 0 0 12 41.9Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgDownloadFill)
const Memo = memo(ForwardRef)
export default Memo
