import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgThumbUpLineRegular = (
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
    <div>
      {
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
            d="M42.719 23.593c-1.4-5.24-4.03-6.47-8.4-6.92h-.03l.03-.09c.88-2.39 1.65-7.33-.05-10.41-.79-1.42-2.03-2.35-3.64-2.69-.99-.17-2.1-.25-2.95.31-2.12 1.22-2.31 3.31-2.45 4.99-.04.4-.07.82-.14 1.25-.45 3.16-2.1 5.76-8.61 8.19-.29.1-.55.2-.81.3-.84.33-1.63.64-3.97.79-.73.04-1.29.05-1.75.06-.84.01-1.45.02-2.14.18-2.92.55-2.92 2.97-2.92 4.01v13.63c0 2.11 1.72 3.82 3.83 3.82h2.91c.18 0 .36.01.54.02 1.06.03 2.33.07 3.54.09 4.28 1.11 7.67 1.52 10.86 1.52 1.88 0 3.69-.14 5.58-.36l.15-.03c4.91-1.1 7.61-3.26 9.31-7.46 1.22-3.05 2.02-8.02 1.11-11.2Zm-32.94 14.42h-1.06c-.44 0-.83-.39-.83-.83v-12.63c0-1.73.14-2.06 1.14-2.12 1.6-.1 2.05-.08 2.85-.13.15 0 .27-.02.41-.03v15.76h-.04c-1.13-.03-1.92-.06-2.48-.02h.01Zm29.04-4.35c-1.32 3.26-3.18 4.74-7.11 5.64-4.88.57-8.98.56-15.43-1.13-.25-.07-.61-.11-1-.15v-16.21c.6-.16 1.06-.33 1.48-.5.21-.08.43-.17.71-.26 6.71-2.5 9.87-5.67 10.58-10.59.07-.48.12-.96.16-1.42.14-1.65.26-2.26.99-2.66l.04-.02c.1-.01.34 0 .83.07.71.15 1.21.53 1.57 1.19 1.09 1.98.62 5.87-.13 7.9-.44 1.12-.43 2.07.01 2.82.62 1.06 1.8 1.23 2.37 1.31l.13.02c3.6.37 4.8 1.03 5.79 4.73.7 2.44.02 6.71-1 9.27l.01-.01Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgThumbUpLineRegular)
const Memo = memo(ForwardRef)
export default Memo
