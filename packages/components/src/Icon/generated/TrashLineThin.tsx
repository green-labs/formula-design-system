import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgTrashLineThin = (
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
        d="m9.38 11.75 1.82 26.87c.14 2.39 1.91 4.13 4.2 4.13h17.2c2.29 0 4.06-1.74 4.2-4.12l1.82-26.88h.88c.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2h-8.2v-2.6c0-.5-.14-.93-.26-1.28-.19-.56-.55-.92-.79-1.17-.24-.24-.6-.59-1.17-.79-.35-.12-.78-.26-1.28-.26h-7.5c-.46 0-1.05.13-1.44.33-.26.13-.69.4-1.01.72-.24.24-.6.6-.79 1.17-.12.35-.26.78-.26 1.28v2.6H8.5c-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2h.88ZM34.4 38.48c-.05.93-.63 1.87-1.8 1.87H15.4c-1.17 0-1.75-.94-1.8-1.88l-1.81-26.72h24.43l-1.81 26.73h-.01ZM19.2 6.75c0-.11.08-.34.14-.52a1.892 1.892 0 0 1 .59-.5c.08-.03.28-.08.37-.08h7.5c.11 0 .34.08.52.14.04.02.16.13.24.21.08.08.19.19.21.23.06.19.14.42.14.52v2.6H19.2v-2.6Z"
        fill={fill}
      />
      <path
        d="M18.93 15.85c-.66.04-1.17.61-1.13 1.27l1 17c.04.64.57 1.13 1.2 1.13h.07c.66-.04 1.17-.61 1.13-1.27l-1-17c-.04-.66-.59-1.15-1.27-1.13ZM29.07 15.85c-.64-.02-1.23.47-1.27 1.13l-1 17c-.04.66.47 1.23 1.13 1.27H28c.63 0 1.16-.49 1.2-1.13l1-17c.04-.66-.47-1.23-1.13-1.27Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgTrashLineThin)
const Memo = memo(ForwardRef)
export default Memo
