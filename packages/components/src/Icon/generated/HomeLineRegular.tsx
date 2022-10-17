import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgHomeLineRegular = (
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
        d="M43.577 21.87 26.147 5.26c-.52-.55-1.3-.86-2.15-.87-.85 0-1.63.31-2.09.81L4.417 21.87a1.63 1.63 0 0 0-.05 2.31c.62.66 1.66.68 2.31.06l.07-.07v16.39c0 .8.33 1.59.9 2.16.58.58 1.34.89 2.16.89h10.41c.9 0 1.64-.73 1.64-1.64v-9.22c0-.66.54-1.2 1.2-1.2h1.89c.66 0 1.2.54 1.2 1.2v9.22c0 .9.73 1.64 1.64 1.64h10.41c.8 0 1.59-.33 2.16-.89.58-.58.9-1.34.9-2.16V24.17l.07.07c.32.3.72.45 1.13.45.43 0 .86-.17 1.18-.51.62-.65.6-1.69-.05-2.31h-.01Zm-5.61 18.47h-8.55v-7.59c0-2.47-2.01-4.48-4.48-4.48h-1.89c-2.47 0-4.48 2.01-4.48 4.48v7.59h-8.55V21.05l13.98-13.33 13.98 13.33v19.29h-.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgHomeLineRegular)
const Memo = memo(ForwardRef)
export default Memo
