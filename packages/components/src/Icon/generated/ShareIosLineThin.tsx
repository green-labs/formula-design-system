import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgShareiosLineThin = (
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
        d="M38.8 19.2s-.08-.08-.13-.11c-1.1-.82-2.25-1.24-3.42-1.24h-3.8c-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2h3.8c.63 0 1.25.23 1.91.71.44.47.69 1.04.69 1.59v16.9c0 .57-.27 1.18-.75 1.65-.56.56-1.4.65-1.85.65h-22.5c-.63 0-1.25-.23-1.91-.71-.44-.47-.69-1.04-.69-1.59v-16.9c0-.57.27-1.18.75-1.65.56-.56 1.4-.65 1.85-.65h3.8c.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2h-3.8c-1.42 0-2.68.48-3.55 1.35-.94.94-1.45 2.13-1.45 3.35v16.9c0 1.21.53 2.43 1.45 3.35.04.04.08.08.13.11 1.1.82 2.25 1.24 3.42 1.24h22.5c1.42 0 2.68-.48 3.55-1.35.92-.92 1.45-2.14 1.45-3.35v-16.9c0-1.22-.52-2.41-1.45-3.35Z"
        fill={fill}
      />
      <path
        d="m17.3 13.4 5.45-5.45v19.6c0 .66.54 1.2 1.2 1.2.66 0 1.2-.54 1.2-1.2V7.95l5.45 5.45a1.204 1.204 0 0 0 1.7 0c.47-.47.47-1.23 0-1.7l-7.5-7.5c-.47-.47-1.23-.47-1.7 0l-7.5 7.5a1.201 1.201 0 1 0 1.7 1.7Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgShareiosLineThin)
const Memo = memo(ForwardRef)
export default Memo
