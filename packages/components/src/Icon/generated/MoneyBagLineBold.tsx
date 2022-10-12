import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMoneyBagLineBold = (
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
        d="M14.3 43.2c-3.78-.1-6.17-1.27-7.74-3.79C5.47 37.72 5 35.23 5 31.1c0-7.66 3.29-13.76 10.06-18.65l-.72-.66c-1.24-1.24-1.58-3.2-1-4.84C13.92 5.31 15.59 4 17.5 4H31c1.87 0 4.06.89 4.78 2.87.72 1.98-.67 4.03-1.57 5.09l-.48.48c6.12 4.36 9.78 11.37 9.78 18.76 0 4.77-1.12 8.2-3.33 10.2-1.8 1.48-3.74 1.7-5.74 1.8H14.3ZM18 7.6c-.75 0-1.19.18-1.33.54-.21.37 0 .87.31 1.18l3.85 3.52-3.5 2.49C11.52 19.56 8.7 24.79 8.7 31.3c0 3.43.29 5.28 1.05 6.6.75 1.31 2.39 2 4.75 2h19.8c1.64-.1 2.78-.32 3.75-1.11 1.41-1.22 2.15-3.81 2.15-7.49 0-6.26-3.12-12.23-8.33-15.98l-3.51-2.6.38-.33c.71-.61 2.5-2.3 3.18-2.98.68-.76.44-1.26.35-1.39-.15-.28-.49-.42-.77-.42H18Z"
        fill={fill}
      />
      <path
        d="M27.89 34.17c-.68 0-1.29-.43-1.53-1.06l-2.09-5.53-1.98 5.47c-.22.66-.85 1.11-1.57 1.11-.72 0-1.34-.47-1.55-1.15l-1.48-4.59-1.45-.03c-.73 0-1.33-.59-1.33-1.33 0-.74.59-1.33 1.33-1.33h.52l-.51-1.79c-.11-.34-.08-.69.08-1.01.16-.32.44-.55.77-.66a1.32 1.32 0 0 1 1.66.86l1.95 6.05 1.9-5.25c.24-.66.86-1.11 1.55-1.11.7 0 1.32.45 1.54 1.11l1.98 5.22 1.77-5.98c.16-.57.69-.97 1.28-.97.12 0 .24.02.36.05.34.1.62.32.8.63.17.31.22.67.12 1.01l-.5 1.78.76.06c.73 0 1.33.59 1.33 1.33 0 .74-.59 1.33-1.33 1.33h-1.49l-1.33 4.58c-.21.69-.82 1.17-1.53 1.2h-.06.03Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMoneyBagLineBold)
const Memo = memo(ForwardRef)
export default Memo
