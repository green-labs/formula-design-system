import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgSearchFill = (
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
          <g clipPath="url(#search-fill_svg__a)">
            <path
              d="m42.91 40.06-8.51-8.6c.35-.41.69-.84 1-1.29 1.83-2.75 2.8-6.01 2.8-9.43 0-4.46-1.73-8.71-4.93-12.03-3.26-3.13-7.51-4.86-11.97-4.86-3.24 0-6.48.96-9.43 2.8-2.72 1.81-4.85 4.42-6.19 7.59-1.3 3.19-1.62 6.58-.92 9.81.73 3.42 2.36 6.41 4.65 8.59 2.31 2.31 5.36 3.96 8.59 4.65 1.11.24 2.24.36 3.37.36 2.17 0 4.35-.43 6.46-1.29 1.05-.44 2.06-1.01 3.01-1.66l8.65 8.74a2.416 2.416 0 0 0 3.4.02 2.4 2.4 0 0 0 .02-3.39v-.01ZM26 31.93c-2.29.93-4.71 1.17-6.99.68-2.34-.5-4.55-1.69-6.25-3.39-1.63-1.56-2.78-3.69-3.31-6.17-.49-2.29-.26-4.7.66-6.96.96-2.27 2.49-4.15 4.36-5.4 2.13-1.33 4.49-2.04 6.83-2.04 3.21 0 6.27 1.25 8.57 3.47 2.27 2.36 3.53 5.43 3.53 8.63 0 2.47-.69 4.81-1.97 6.73-1.37 1.96-3.31 3.55-5.44 4.45H26Z"
              fill={fill}
            />
          </g>
          <defs>
            <clipPath id="search-fill_svg__a">
              <path
                fill="#fff"
                transform="translate(4.4 3.85)"
                d="M0 0h39.2v40.3H0z"
              />
            </clipPath>
          </defs>
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgSearchFill)
const Memo = memo(ForwardRef)
export default Memo
