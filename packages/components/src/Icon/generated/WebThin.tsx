import { SVGProps, Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgWebThin = (
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
            d="M24 3.8C12.86 3.8 3.8 12.86 3.8 24c0 11.14 9.06 20.2 20.2 20.2 11.14 0 20.2-9.06 20.2-20.2 0-11.14-9.06-20.2-20.2-20.2Zm17.74 19h-6.57c-.11-3.37-.65-6.49-1.53-9.19a19.09 19.09 0 0 0 3.07-2.05c2.88 2.94 4.74 6.88 5.03 11.24ZM24 41.8c-2.68 0-5.13-2.58-6.76-6.55C19.34 34.43 21.63 34 24 34s4.66.43 6.76 1.25c-1.63 3.97-4.08 6.55-6.76 6.55Zm8.93-5.51c.8.45 1.57.95 2.29 1.51a18.002 18.002 0 0 1-4.75 2.76c.94-1.19 1.77-2.63 2.46-4.28v.01Zm-15.41 4.28c-1.73-.68-3.33-1.61-4.75-2.76.72-.57 1.49-1.07 2.29-1.51.69 1.65 1.52 3.09 2.46 4.28v-.01ZM24 32.01c-2.6 0-5.11.47-7.43 1.36-.76-2.42-1.24-5.2-1.34-8.16h17.54c-.1 2.96-.58 5.74-1.34 8.16-2.32-.89-4.83-1.36-7.43-1.36Zm-8.77-9.2c.1-2.96.58-5.74 1.34-8.16 2.32.89 4.83 1.36 7.43 1.36 2.6 0 5.11-.47 7.43-1.36.76 2.42 1.24 5.2 1.34 8.16H15.23ZM24 6.2c2.68 0 5.13 2.58 6.76 6.55-2.1.82-4.39 1.25-6.76 1.25s-4.66-.43-6.76-1.25C18.87 8.78 21.32 6.2 24 6.2Zm-8.93 5.51c-.8-.45-1.57-.95-2.29-1.51 1.42-1.15 3.02-2.08 4.75-2.76-.94 1.19-1.77 2.63-2.46 4.28v-.01Zm15.41-4.27c1.73.68 3.33 1.61 4.75 2.76-.72.57-1.49 1.07-2.29 1.51-.69-1.65-1.52-3.09-2.46-4.28v.01Zm-19.19 4.12c.96.78 1.98 1.47 3.07 2.05-.88 2.7-1.42 5.82-1.53 9.19H6.26c.29-4.36 2.15-8.3 5.03-11.24ZM6.26 25.2h6.57c.11 3.37.65 6.49 1.53 9.19a19.09 19.09 0 0 0-3.07 2.05A17.717 17.717 0 0 1 6.26 25.2Zm30.45 11.24a19.09 19.09 0 0 0-3.07-2.05c.88-2.7 1.42-5.82 1.53-9.19h6.57c-.29 4.36-2.15 8.3-5.03 11.24Z"
            fill={fill}
          />
        </svg>
      }
    </div>
  )
}
const ForwardRef = forwardRef(SvgWebThin)
const Memo = memo(ForwardRef)
export default Memo
