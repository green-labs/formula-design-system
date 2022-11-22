import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgTracterFill = (
  { size = "xl", sizePx, color = "gray-90", ...props }: IconProps,
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
      viewBox="0 0 48 48"
      ref={ref}
      {...props}
    >
      <path
        d="M12.743 27.144c-1.945 0-3.641 1.685-3.641 3.641a3.631 3.631 0 0 0 3.641 3.642c2.081 0 3.642-1.561 3.642-3.642 0-2.08-1.561-3.641-3.642-3.641Z"
        fill={fill}
      />
      <path
        d="m43.842 29.654-1.018-8.029c0-1.018-.452-1.922-1.13-2.714-.792-.792-1.697-1.13-2.828-1.13h-5.654l3.505-5.994c.114-.113.227-.226.34-.226.113 0 .339 0 .452.113l1.922 1.13c.792.453 1.81.227 2.262-.565.453-.792.226-1.81-.565-2.262l-1.923-1.13c-.904-.566-2.035-.679-3.053-.453-1.018.226-1.922.905-2.375 1.81l-4.523 7.69h-1.697L23.373 7.488c-.226-.678-.904-1.017-1.583-1.017H8.22c-.905 0-1.697.791-1.697 1.696v13.91C3.81 24 2 27.166 2 30.785c0 5.88 4.863 10.743 10.743 10.743 3.619 0 6.785-1.809 8.708-4.523h11.422c.904 2.6 3.392 4.523 6.332 4.523 3.732 0 6.785-3.053 6.785-6.785.114-2.035-.791-3.845-2.148-5.089ZM12.743 37.56a6.757 6.757 0 0 1-6.774-6.774 6.757 6.757 0 0 1 6.774-6.774 6.757 6.757 0 0 1 6.774 6.774 6.757 6.757 0 0 1-6.774 6.774Zm26.575.577c-1.922 0-3.392-1.47-3.392-3.393 0-1.922 1.47-3.392 3.392-3.392 1.923 0 3.393 1.47 3.393 3.392 0 1.923-1.47 3.393-3.393 3.393Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgTracterFill)
const Memo = memo(ForwardRef)
export default Memo
