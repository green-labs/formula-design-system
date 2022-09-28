import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgNoticeLineRegular = (
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
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M24 31.25h-.01a1.504 1.504 0 0 0 1.49-1.43l.54-11.42c.02-.29-.03-.57-.13-.84-.09-.25-.24-.48-.44-.69-.19-.2-.41-.35-.68-.46-.26-.1-.53-.15-.8-.15-.27.01-.54.06-.78.17-.25.1-.48.26-.67.46-.19.21-.34.44-.42.67-.1.26-.15.54-.14.82l.54 11.44c.04.797.695 1.425 1.49 1.43h-.01.02ZM23.01 37.15c.33.22.71.34 1.11.34l.01-.01c.53 0 1.03-.22 1.41-.59.38-.37.59-.88.59-1.41a2.014 2.014 0 0 0-1.24-1.85 2.004 2.004 0 0 0-2.18.44 2.004 2.004 0 0 0-.44 2.18c.16.37.41.68.74.9Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.02 43.33c-.78 0-1.54-.2-2.22-.59-.67-.38-1.24-.94-1.64-1.61-.4-.65-.62-1.42-.64-2.2-.02-.78.17-1.55.54-2.23L20.04 7.03c.79-1.46 2.3-2.37 3.96-2.37 1.66 0 3.18.91 3.96 2.37L43.94 36.7c.37.68.55 1.46.54 2.23a4.535 4.535 0 0 1-2.28 3.82c-.67.38-1.44.59-2.22.59v-.01H8.02ZM24 7.66c-.27 0-.94.08-1.32.79L6.7 38.12c-.12.23-.18.49-.18.74 0 .26.08.51.21.73.13.23.32.41.55.54.23.13.48.2.74.2h31.96c.26 0 .51-.07.74-.2a1.474 1.474 0 0 0 .76-1.27c0-.26-.06-.52-.18-.74L25.32 8.45A1.47 1.47 0 0 0 24 7.66Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgNoticeLineRegular)
const Memo = memo(ForwardRef)
export default Memo
