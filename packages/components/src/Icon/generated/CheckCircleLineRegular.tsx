import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgCheckCircleLineRegular = (
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
        d="M24.5 44C13.75 44 5 35.25 5 24.5S13.75 5 24.5 5 44 13.75 44 24.5 35.25 44 24.5 44Zm0-36C15.4 8 8 15.4 8 24.5S15.4 41 24.5 41 41 33.6 41 24.5 33.6 8 24.5 8Z"
        fill={fill}
      />
      <path
        d="M20.9 33.5c-.42 0-.83-.18-1.11-.5l-5.4-6c-.55-.62-.5-1.56.11-2.12.62-.55 1.56-.5 2.12.11l4.25 4.72 11.49-13.68c.53-.63 1.48-.72 2.11-.18.63.53.72 1.48.18 2.11l-12.6 15c-.28.33-.69.53-1.12.54h-.03Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgCheckCircleLineRegular)
const Memo = memo(ForwardRef)
export default Memo
