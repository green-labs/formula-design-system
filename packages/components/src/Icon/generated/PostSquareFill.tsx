import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgPostSquareFill = (
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
        d="m21.67 27.45 2.31-.78c.23-.07.43-.19.61-.36h.01L41.41 9.46l.09-.08c.26-.27.42-.64.42-1.02s-.15-.74-.42-1.02l-.94-.94c-.53-.54-1.5-.55-2.04 0L21.58 23.3c-.16.17-.28.38-.36.6l-.78 2.33v.03c-.07.17-.06.33-.02.51.04.17.14.33.25.44.12.12.27.21.44.26a.986.986 0 0 0 .52-.01"
        fill={fill}
      />
      <path
        d="M37.72 16.55 26.29 28c-.44.44-.98.77-1.58.96l-2.43.81c-.57.16-1.18.17-1.76.02a3.28 3.28 0 0 1-1.53-.88 3.28 3.28 0 0 1-.88-1.53c-.15-.58-.15-1.19.02-1.76l.81-2.43c.18-.6.51-1.14.95-1.58l11.45-11.44c.11-.1.18-.24.21-.38s.01-.3-.04-.43a.843.843 0 0 0-.28-.34.771.771 0 0 0-.42-.13H11.25c-1.39 0-2.73.55-3.71 1.54A5.22 5.22 0 0 0 6 14.14v22.5c0 1.39.55 2.73 1.54 3.71.98.98 2.32 1.54 3.71 1.54h22.5c1.39 0 2.73-.55 3.71-1.54A5.22 5.22 0 0 0 39 36.64V17.08c0-.15-.04-.29-.13-.42a.814.814 0 0 0-.33-.28.736.736 0 0 0-.44-.04c-.14.03-.28.1-.38.2v.01Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgPostSquareFill)
const Memo = memo(ForwardRef)
export default Memo
