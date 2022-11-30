import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgNotificationSlashLineRegular = (
  { size = "xl", sizePx, color = "gray-90", ...props }: IconProps,
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
        d="M9.884 32.93c-.33 0-.65-.11-.93-.32-.65-.51-.76-1.46-.25-2.11 1.49-1.89 2.55-3.73 2.55-10.13s2.57-10.58 7.86-12.76c.02-.01.07-.05.08-.08.79-2.69 3.02-4.54 5.55-4.54s4.77 1.85 5.57 4.59c0-.03.04 0 .06.02.65.27 1.28.57 1.87.91a1.501 1.501 0 0 1-1.5 2.6 14.1 14.1 0 0 0-1.51-.74c-.86-.35-1.56-1.1-1.81-1.95-.35-1.21-1.32-2.44-2.69-2.44-1.37 0-2.33 1.22-2.69 2.43-.25.85-.94 1.6-1.8 1.96-2.79 1.15-6 3.32-6 9.98s-1.12 9.36-3.19 11.99c-.3.38-.74.57-1.18.57l.01.02ZM42.004 32l-.46-.56c-2.06-2.49-3.31-4-3.31-11.06 0-.45-.01-.87-.04-1.29-.05-.83-.75-1.47-1.59-1.41a1.5 1.5 0 0 0-1.41 1.59c.02.36.03.72.03 1.11 0 8.14 1.76 10.28 4 12.98l.45.54s.13.16.05.34c-.05.1-.17.26-.51.26h-20.47c-.83 0-1.5.67-1.5 1.5v1c0 2 .78 3.89 2.2 5.3 1.42 1.42 3.3 2.2 5.3 2.2s3.89-.78 5.3-2.2c1.3-1.3 2.05-2.99 2.17-4.8h7c1.41 0 2.64-.76 3.22-1.98.55-1.17.39-2.52-.44-3.52h.01Zm-14.07 8.18c-.85.85-1.98 1.32-3.18 1.32-1.2 0-2.33-.47-3.18-1.32a4.438 4.438 0 0 1-1.27-2.68h8.9a4.438 4.438 0 0 1-1.27 2.68ZM6.744 43.5c-.38 0-.77-.15-1.06-.44a1.49 1.49 0 0 1 0-2.12l36-36a1.49 1.49 0 0 1 2.12 0c.58.59.59 1.54 0 2.12l-36 36c-.29.29-.68.44-1.06.44Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgNotificationSlashLineRegular)
const Memo = memo(ForwardRef)
export default Memo
