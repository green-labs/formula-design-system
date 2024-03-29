import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgNotificationSlashLineBold = (
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
        d="M41.684 31.62c-2.02-2.49-3.24-3.99-3.24-10.93v-1.2c0-.94-.76-1.7-1.7-1.7s-1.7.76-1.7 1.7v1.2c0 7.76 1.52 10.02 4 13.07l.48.59v.14c-.06.06-.15.1-.28.1h-20.5c-.94 0-1.7.76-1.7 1.7v1c0 2.13.83 4.06 2.3 5.4 1.44 1.44 3.46 2.3 5.4 2.3 2.06 0 4.1-.88 5.4-2.3 1.29-1.29 2.09-2.97 2.26-4.7h6.84c1.48 0 2.78-.8 3.39-2.1a3.41 3.41 0 0 0-.46-3.66l-.49-.61Zm-13.99 8.72c-.72.78-1.82 1.25-2.95 1.25-1.03 0-2.21-.51-3.05-1.35-.65-.6-1.04-1.37-1.18-2.25h8.46c-.16.84-.59 1.66-1.28 2.35ZM8.804 33.04c.31.24.67.36 1.04.36.51 0 1.01-.23 1.35-.66 2.11-2.73 3.26-5.48 3.26-12.14s3.34-8.78 5.86-9.83c.04-.01.07-.03.1-.05.7-.35 1.53-1.09 1.78-2.09.29-1.11 1.23-2.23 2.46-2.23s2.16 1.12 2.45 2.21c.25 1.02 1.09 1.76 1.79 2.11.07.04.14.07.22.09.32.11.64.27 1.01.47l.47.24a1.699 1.699 0 1 0 1.52-3.04l-.42-.21c-.41-.21-.83-.44-1.33-.62-.77-2.74-3.11-4.64-5.71-4.64s-4.92 1.89-5.71 4.64c-.01 0-.02.02-.03.02-5.21 2.22-7.86 6.57-7.86 12.93 0 6.36-1.05 8.13-2.54 10.06-.57.74-.44 1.81.31 2.38h-.02ZM43.944 5.09c-.66-.66-1.74-.66-2.4 0l-36 36a1.702 1.702 0 0 0 1.2 2.9c.43 0 .87-.17 1.2-.5l36-36c.66-.66.66-1.74 0-2.4Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgNotificationSlashLineBold)
const Memo = memo(ForwardRef)
export default Memo
