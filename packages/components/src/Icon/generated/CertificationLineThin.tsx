import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCertificationLineThin = (
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
        d="M21.69 30.17c-.32 0-.62-.12-.85-.35l-5-5c-.23-.23-.36-.53-.35-.86 0-.32.13-.61.35-.84.23-.23.53-.36.85-.36.32 0 .62.13.84.35l4.14 4.14 8.75-9.12c.23-.24.53-.37.86-.37.31 0 .61.12.83.34.23.22.36.52.37.84 0 .32-.11.63-.34.86l-9.6 10c-.23.24-.53.37-.85.37Z"
        fill={fill}
      />
      <path
        d="M28.83 43.9c-.34 0-.67-.09-.96-.27L24 41.3l-3.87 2.33c-.29.17-.62.27-.96.27-.68 0-1.3-.37-1.63-.96l-2.19-3.96-4.52.08c-.54 0-1.01-.2-1.36-.56-.35-.36-.54-.83-.53-1.34l.08-4.52-3.96-2.19c-.45-.25-.77-.65-.9-1.15-.13-.49-.06-1 .2-1.44l2.33-3.87-2.33-3.87c-.26-.44-.34-.95-.2-1.44s.45-.9.9-1.15l3.96-2.19-.08-4.52c0-.5.18-.98.53-1.34.35-.36.82-.56 1.33-.56l4.56.08 2.17-3.95c.33-.59.95-.96 1.63-.96.34 0 .67.09.96.27l3.87 2.33 3.88-2.33c.29-.17.62-.27.96-.27.68 0 1.3.37 1.63.96l2.19 3.96 4.52-.08c.54 0 1.01.2 1.36.56.35.36.54.83.53 1.34l-.08 4.52 3.96 2.19a1.866 1.866 0 0 1 .7 2.59L41.31 24l2.33 3.87c.26.44.34.95.2 1.44-.13.49-.45.9-.9 1.15l-3.96 2.19.08 4.52c0 .5-.18.98-.53 1.34-.35.36-.82.56-1.33.56l-4.56-.08-2.19 3.96c-.33.59-.95.96-1.63.96l.01-.01Zm-9.38-2.95 4.54-2.74 4.54 2.74 2.57-4.64 5.3.1-.1-5.3 4.64-2.57L38.2 24l2.74-4.54-4.64-2.57.1-5.3-5.3.1-2.57-4.64-4.54 2.74-4.54-2.74-2.57 4.64-5.3-.1.1 5.3-4.64 2.57L9.78 24l-2.74 4.54 4.64 2.57-.1 5.3 5.3-.1 2.57 4.64Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCertificationLineThin)
const Memo = memo(ForwardRef)
export default Memo
