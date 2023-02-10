import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgGroupFil = (
  { size = "xl", sizePx, color, ...props }: IconProps,
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
        d="M23.993 6.556h.014v-.014c.8 0 1.584.128 2.34.399a6.43 6.43 0 0 1 2.483 1.627 6.405 6.405 0 0 1 1.698 3.981c.029.371.029.728 0 1.084a8.01 8.01 0 0 1-.77 2.926c-.029.05-.054.1-.079.15-.025.05-.05.1-.078.15-.114.2-.229.385-.343.57a8.183 8.183 0 0 1-.813 1.042c-1.242 1.327-2.825 2.055-4.466 2.055-.614 0-1.228-.1-1.813-.3l-.121-.046c-.15-.057-.304-.115-.45-.182a6.668 6.668 0 0 1-2.083-1.527 7.943 7.943 0 0 1-2.069-4.838c-.014-.242-.014-.485-.014-.727.014-.343.043-.7.1-1.042.014-.057.025-.114.035-.171a6.278 6.278 0 0 1 1.577-3.125c1.213-1.299 2.94-2.012 4.852-2.012ZM17.971 25.591c1.84-.956 3.91-1.47 6.022-1.47h.014c1.77 0 3.51.357 5.123 1.042a12.608 12.608 0 0 1 4.238 2.954 11.835 11.835 0 0 1 2.611 4.352c.542 1.598.714 3.297.514 4.98-.014.214-.1.414-.214.585a1.358 1.358 0 0 1-.471.428c-3.582 1.97-7.648 2.997-11.772 2.997h-.072a24.577 24.577 0 0 1-11.758-2.997 1.513 1.513 0 0 1-.47-.428 1.378 1.378 0 0 1-.215-.585 11.636 11.636 0 0 1 1.898-7.79 12.278 12.278 0 0 1 4.552-4.068ZM36.564 13.662h.014l-.028.028c.628 0 1.27.1 1.87.315a5.002 5.002 0 0 1 1.983 1.298 5.18 5.18 0 0 1 1.355 3.182c.015.285.015.57 0 .856a6.32 6.32 0 0 1-.613 2.34 1.21 1.21 0 0 1-.082.18l-.032.063c-.086.157-.172.314-.271.457-.2.285-.414.57-.657.827-.985 1.056-2.255 1.641-3.567 1.641-.485 0-.97-.085-1.442-.242a6.174 6.174 0 0 1-.456-.186 5.177 5.177 0 0 1-1.67-1.213 6.45 6.45 0 0 1-1.655-3.881v-.585c.014-.286.043-.557.086-.842.007-.043.018-.09.028-.135.011-.047.022-.093.029-.136a4.935 4.935 0 0 1 1.227-2.355c.97-1.041 2.354-1.612 3.881-1.612ZM8.682 37.192l-.015-.002v-.002l.029.004a15.41 15.41 0 0 1 2.44-9.56H11.107a7.084 7.084 0 0 0-2.696.67 7.014 7.014 0 0 0-2.226 1.684A7.136 7.136 0 0 0 4.8 32.398a6.54 6.54 0 0 0-.313 2.768v.228c.014.2.085.4.214.557.128.171.3.285.485.357l.214.071c.413.143.83.271 1.25.385a16.527 16.527 0 0 0 2.017.426v.002h.015ZM11.436 13.662h.014l-.029.028c.628 0 1.27.1 1.87.315a5.002 5.002 0 0 1 1.983 1.298 5.18 5.18 0 0 1 1.356 3.182c.014.285.014.57 0 .856a6.32 6.32 0 0 1-.614 2.34c-.021.064-.05.12-.081.18l-.033.063c-.086.157-.171.314-.271.457-.2.285-.414.57-.656.827-.985 1.056-2.255 1.641-3.568 1.641-.485 0-.97-.085-1.441-.242a6.159 6.159 0 0 1-.457-.186 5.177 5.177 0 0 1-1.67-1.213 6.45 6.45 0 0 1-1.654-3.881v-.585c.014-.286.042-.557.085-.842.007-.043.018-.09.029-.135.01-.047.021-.093.028-.136a4.935 4.935 0 0 1 1.227-2.355c.97-1.041 2.355-1.612 3.882-1.612ZM39.319 37.19v.002a17.017 17.017 0 0 0 3.281-.827l.214-.072c.186-.07.357-.185.486-.356a.996.996 0 0 0 .214-.557v-.228a6.54 6.54 0 0 0-.314-2.768 7.136 7.136 0 0 0-1.385-2.412 7.014 7.014 0 0 0-2.226-1.684 7.087 7.087 0 0 0-2.697-.67l-.014.014h-.014a15.41 15.41 0 0 1 2.44 9.56l.014-.002Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgGroupFil)
const Memo = memo(ForwardRef)
export default Memo