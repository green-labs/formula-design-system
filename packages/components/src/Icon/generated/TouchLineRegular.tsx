import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgTouchLineRegular = (
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
        d="M28.277 45.18c-6.563 0-9.638-2.91-13.28-7.027-.95-1.073-3.87-4.231-3.87-4.231l-.588-.66C8.959 31.527 8 30.474 8 29.153c0-1.32.836-2.59 2.29-3.302 1.91-.949 4.913-1.073 6.977.516.258.196.578.475.95.826v-11.64c0-2.704 2.125-4.923 4.736-4.943 2.672 0 4.85 2.218 4.85 4.943v6.687h5.18c4.004 0 7.017 2.868 7.017 6.666v4.55c0 4.768-1.094 11.022-10.175 11.651v.052h-1.548v.02Zm-.64-3.096h.64c7.182 0 8.627-3.291 8.627-8.606v-4.55c0-2.075-1.65-3.571-3.921-3.571H27.1a2.385 2.385 0 0 1-2.384-2.384v-7.399c0-1-.794-1.847-1.744-1.847-.918 0-1.65.815-1.65 1.847V29.96c0 .805-.486 1.517-1.229 1.817-.753.299-1.6.123-2.157-.465-1.486-1.568-2.198-2.208-2.538-2.466-1.001-.764-2.704-.702-3.715-.196-.31.155-.516.33-.557.474.185.393 1.145 1.445 1.733 2.085l.578.65s2.941 3.178 3.9 4.262c3.159 3.57 5.47 5.79 10.32 5.965h-.02Z"
        fill={fill}
      />
      <path
        d="M33.096 16.338c-.887 0-1.599-.712-1.599-1.6 0-4.808-3.911-8.72-8.72-8.72-4.809 0-8.71 3.901-8.71 8.71 0 .888-.711 1.6-1.599 1.6-.887 0-1.6-.712-1.6-1.6 0-6.563 5.346-11.908 11.91-11.908 6.562 0 11.918 5.345 11.918 11.918 0 .888-.712 1.6-1.6 1.6Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgTouchLineRegular)
const Memo = memo(ForwardRef)
export default Memo
