import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgVideoLineRegular = (
  { size = "xl", sizePx, style, className, color, ...props }: IconProps,
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
        d="M24.005 40.845c-1.22 0-12.01-.03-15.49-.97a7.105 7.105 0 0 1-3.16-1.83 7.065 7.065 0 0 1-1.83-3.16c-.97-3.57-.98-10.58-.98-10.88 0-.3.01-7.3.91-10.83.33-1.22.96-2.31 1.84-3.19.87-.87 1.97-1.51 3.16-1.83 3.48-.97 14.3-1 15.52-1 1.22 0 12 .03 15.47.94 1.2.33 2.3.96 3.17 1.83.88.88 1.51 1.97 1.83 3.17.97 3.57 1.01 10.6 1.01 10.9 0 .31-.01 7.34-.98 10.89a7.16 7.16 0 0 1-1.83 3.16c-.88.88-1.97 1.51-3.16 1.83-3.48.94-14.27.97-15.48.97Zm-.03-30.42c-3.2 0-12.06.16-14.64.88-.66.18-1.24.52-1.71.99s-.81 1.06-.99 1.71c-.79 3.12-.81 9.93-.81 10 0 .07.01 6.87.86 10.02.17.64.52 1.23.99 1.71a3.9 3.9 0 0 0 1.7.99c2.59.7 11.44.86 14.63.86 3.19 0 12.04-.15 14.63-.86.64-.17 1.23-.52 1.7-.99a3.9 3.9 0 0 0 .99-1.7c.85-3.13.87-9.95.87-10.02 0-.06-.04-6.9-.9-10.05a3.9 3.9 0 0 0-.99-1.7 3.9 3.9 0 0 0-1.7-.99c-2.59-.68-11.44-.83-14.63-.83v-.02Z"
        fill={fill}
      />
      <path
        d="M20.685 17.225a.656.656 0 0 0-.98.57v12.42c0 .5.54.82.98.57l11.04-6.19a.65.65 0 0 0 0-1.14l-11.05-6.23h.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgVideoLineRegular)
const Memo = memo(ForwardRef)
export default Memo
