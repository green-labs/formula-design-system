import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgWebLineRegular = (
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
        d="M44.5 24c0-11.3-9.2-20.5-20.5-20.5S3.5 12.7 3.5 24c0 5.85 2.47 11.12 6.42 14.86.03.03.03.07.06.1.06.07.15.1.22.16 3.65 3.33 8.48 5.38 13.8 5.38s10.16-2.06 13.81-5.39c.07-.05.15-.08.21-.15.03-.03.04-.07.06-.1 3.94-3.74 6.42-9.01 6.42-14.86Zm-7.75 11.95c-.85-.68-1.77-1.27-2.72-1.8.82-2.63 1.33-5.63 1.43-8.85h5.97c-.3 4.11-2.03 7.82-4.69 10.65h.01Zm-19.09-.43c1.98-.73 4.12-1.12 6.34-1.12 2.22 0 4.36.39 6.34 1.12-1.66 3.77-4.04 5.98-6.34 5.98s-4.68-2.2-6.34-5.98Zm-1.03 4.33c-1.17-.55-2.26-1.21-3.27-1.99.51-.39 1.05-.73 1.61-1.06.49 1.12 1.05 2.14 1.66 3.05ZM24 6.5c2.32 0 4.72 2.24 6.38 6.07-1.99.74-4.15 1.13-6.38 1.13-2.23 0-4.39-.39-6.38-1.13C19.28 8.74 21.69 6.5 24 6.5Zm-9.07 4.79c-.57-.33-1.13-.69-1.66-1.09 1.03-.81 2.16-1.49 3.36-2.05-.63.93-1.2 1.99-1.7 3.14Zm16.44-3.14c1.2.56 2.33 1.25 3.36 2.05-.53.4-1.08.75-1.66 1.09-.5-1.15-1.07-2.21-1.7-3.14ZM24 16.3c2.54 0 4.99-.45 7.26-1.29.67 2.22 1.1 4.81 1.2 7.69H15.53c.1-2.88.54-5.47 1.2-7.69 2.27.84 4.73 1.29 7.26 1.29H24Zm8.47 9c-.1 2.83-.52 5.39-1.17 7.59-2.28-.84-4.75-1.29-7.29-1.29s-5.01.45-7.29 1.29c-.65-2.2-1.07-4.76-1.17-7.59h16.93-.01Zm.57 11.5c.56.32 1.1.67 1.61 1.06-1.01.78-2.11 1.45-3.27 1.99.62-.91 1.17-1.93 1.66-3.05Zm8.4-14.1h-5.97c-.11-3.26-.62-6.3-1.47-8.95.94-.52 1.84-1.11 2.68-1.78a17.35 17.35 0 0 1 4.75 10.72l.01.01ZM11.32 11.98c.84.67 1.74 1.26 2.68 1.78-.84 2.65-1.36 5.68-1.47 8.95H6.57a17.46 17.46 0 0 1 4.75-10.72v-.01ZM6.57 25.3h5.97c.11 3.22.61 6.22 1.43 8.85-.95.53-1.87 1.12-2.72 1.8A17.425 17.425 0 0 1 6.56 25.3h.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgWebLineRegular)
const Memo = memo(ForwardRef)
export default Memo
