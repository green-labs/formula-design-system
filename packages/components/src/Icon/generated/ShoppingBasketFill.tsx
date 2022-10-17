import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgShoppingBasketFill = (
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
      <g clipPath="url(#shopping_basket-fill_svg__a)">
        <path
          d="M43.895 17.605a3.504 3.504 0 0 0-2.47-1.01h-7.22l-9-12.01c-.57-.76-1.83-.76-2.4 0l-9.01 12h-7.22c-.93 0-1.81.36-2.47 1.01-.66.66-1.04 1.54-1.04 2.47 0 .32.04.63.13.94l4.05 17.98a5.468 5.468 0 0 0 1.98 2.89c.95.71 2.12 1.11 3.3 1.11h22.95c1.19 0 2.37-.39 3.32-1.11.95-.71 1.66-1.74 2.01-2.97l4.04-17.96c.01-.05.02-.11.03-.17l.06-.54v-.18c0-.93-.38-1.81-1.04-2.46v.01Zm-19.89-9.62 6.46 8.61h-12.92l6.46-8.61Zm8.03 21.65h-1.66l-1.32 4.71a1.48 1.48 0 0 1-1.37 1.07h-.05c-.61 0-1.15-.38-1.37-.95l-2.31-6.11-2.09 6.06c-.2.6-.73.99-1.4.99-.64 0-1.19-.42-1.38-1.03l-1.53-4.75h-1.57a1.15 1.15 0 0 1 0-2.3h.83l-.65-2.02c-.19-.6.14-1.25.74-1.45.6-.2 1.25.14 1.45.74l2.15 6.7 2.03-5.89c.21-.59.77-.99 1.39-.99.62 0 1.17.4 1.37.99l2.22 5.87 1.86-6.63c.17-.61.81-.97 1.42-.8.61.17.97.81.8 1.42l-.58 2.06h1.01c.63 0 1.15.52 1.15 1.15 0 .63-.52 1.15-1.15 1.15l.01.01Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="shopping_basket-fill_svg__a">
          <path
            fill="#fff"
            transform="translate(3.065 4.015)"
            d="M0 0h41.87v38.97H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(SvgShoppingBasketFill)
const Memo = memo(ForwardRef)
export default Memo
