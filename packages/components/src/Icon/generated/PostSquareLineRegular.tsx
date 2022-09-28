import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgPostSquareLineRegular = (
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
        d="M33.75 41.89h-22.5c-1.39 0-2.74-.56-3.71-1.54A5.28 5.28 0 0 1 6 36.64v-22.5c0-1.38.56-2.73 1.54-3.71.97-.98 2.33-1.54 3.71-1.54h15.7c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-15.7c-.59 0-1.17.24-1.59.66-.42.42-.66 1-.66 1.59v22.5c0 .59.24 1.17.66 1.59.42.42.99.66 1.59.66h22.5c.3 0 .59-.06.87-.17.26-.11.51-.28.73-.49.21-.21.37-.45.47-.7.13-.3.19-.59.19-.88V19.39c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17.25c0 .69-.14 1.37-.41 2.01-.24.61-.63 1.19-1.13 1.7a5.236 5.236 0 0 1-3.71 1.53l-.01.01Z"
        fill={fill}
      />
      <path
        d="m21.67 27.45 2.31-.78c.23-.07.43-.19.61-.36h.01L41.41 9.46l.09-.08c.26-.27.42-.64.42-1.02s-.15-.74-.42-1.02l-.94-.94c-.53-.54-1.5-.55-2.04 0L21.58 23.3c-.16.17-.28.38-.36.6l-.78 2.33v.03c-.07.17-.06.33-.02.51.04.17.14.33.25.44.12.12.27.21.44.26a.986.986 0 0 0 .52-.01"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgPostSquareLineRegular)
const Memo = memo(ForwardRef)
export default Memo
