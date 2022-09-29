import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgThumbupLineThin = (
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
        d="M28.835 43.205c7.14 0 13.41-6.16 13.41-13.19v-5.88c0-3.48-3.68-6.17-6.84-6.17h-3.12l.36-1.63c.45-1.98 1-4.45 1-5.83 0-3.74-2.36-5.7-4.7-5.7-2.02 0-4.47 1.39-5.4 4.52l-.2.54c-.18.47-.34.93-.5 1.38-.99 2.76-1.84 5.14-4.22 6.87-2.77 2.01-6.14 2.15-9.77 2.31l-.64.03c-1.47.06-2.45 1.41-2.45 2.63v17.49c0 1.45 1.13 2.63 2.53 2.63h20.54Zm-13.19-21.14.22-.06c1.58-.43 2.95-1.07 4.16-1.95 2.94-2.13 4-5.04 5.11-8.12l.45-1.23.25-.69c.59-2.09 2.04-2.83 3.1-2.83.8 0 2.3.69 2.3 3.3 0 1.05-.47 3.19-.88 5.08l-.35 1.55c-.37 1.29.01 2.07.4 2.5.42.48 1.07.75 1.78.75.11 0 .23 0 .38-.02h2.82c1.79 0 4.44 1.58 4.44 3.77v5.9c0 5.65-5.25 10.79-11.01 10.79h-13.17v-18.74Zm-7.48.79.77-.03c1.19-.04 2.59-.11 3.97-.27l.33-.04v18.28h-5.09l.02-17.94Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgThumbupLineThin)
const Memo = memo(ForwardRef)
export default Memo
