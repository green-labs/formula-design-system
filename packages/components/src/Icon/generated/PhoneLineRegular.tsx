import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgPhoneLineRegular = (
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
        d="M35.893 43.476c-1.69 0-4.1-.61-7.71-2.6-4.98-2.71-8.14-5.05-12.03-8.95-4.05-3.95-6.08-6.63-9.05-11.93-3-5.37-2.78-8.52-2.07-10.22.63-1.38 1.6-2.41 3.27-3.49.8-.58 1.61-1.01 2.49-1.34 1.19-.53 2.92-.92 4.99 1.14 1.6 1.6 3.71 5.15 4.48 6.69 1.11 2.33.4 3.46-.57 4.61-.19.23-.41.48-.63.81-.16.23-.31.41-.44.58-.64.82-.71.98-.63 1.33.21.91 1.59 3.57 3.98 5.86 2.19 2.28 4.75 3.68 5.8 3.92.35.08.51 0 1.33-.63.18-.14.36-.28.55-.42.29-.22.54-.44.76-.64 1.18-1.05 2.35-1.82 4.72-.58 1.52.76 5.06 2.86 6.67 4.47l.04.04c1.79 1.92 1.62 3.48 1.51 4.51l-.1.54c-.33.87-.77 1.68-1.38 2.55-.97 1.51-1.87 2.55-3.44 3.21-.63.29-1.42.53-2.5.53l-.04.01Zm-23.34-35.94c-.2 0-.39.08-.63.19-.71.27-1.29.59-1.94 1.05-1.24.8-1.85 1.41-2.21 2.2-.21.52-.76 2.71 1.94 7.55 2.84 5.07 4.67 7.49 8.54 11.26 3.69 3.68 6.66 5.89 11.37 8.45 5.35 2.96 7.02 2.2 7.56 1.95.83-.35 1.32-.84 2.16-2.15.46-.64.76-1.19.99-1.75.08-.8.12-1.21-.71-2.1-1.21-1.2-4.24-3.07-5.89-3.9-.61-.32-.82-.3-.81-.32-.07.03-.34.28-.55.46-.28.25-.59.52-.97.81-.19.14-.34.26-.5.38-.92.71-2.06 1.6-3.84 1.19-1.73-.4-4.78-2.15-7.25-4.72-2.57-2.46-4.39-5.61-4.78-7.3-.41-1.78.47-2.92 1.18-3.84.12-.15.24-.31.36-.48.26-.38.54-.72.79-1.01.17-.2.41-.48.44-.58 0 0 .01-.19-.27-.79-.82-1.64-2.71-4.69-3.91-5.88-.51-.51-.82-.68-1.1-.68l.03.01Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgPhoneLineRegular)
const Memo = memo(ForwardRef)
export default Memo
