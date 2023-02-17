import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgImageLineThin = (
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
        d="M35.393 6.783H12.617c-4.8 0-8.714 3.915-8.714 8.714v17.006c0 4.809 3.914 8.714 8.714 8.714h22.766c4.81 0 8.714-3.915 8.714-8.714V15.497c0-4.809-3.914-8.714-8.714-8.714h.01ZM12.617 9.476h22.766a6.03 6.03 0 0 1 6.021 6.021v15.534c-.971-.856-2.27-1.914-3.491-2.683a6.04 6.04 0 0 0-7.233.634c-.442.395-.914.837-1.414 1.299-.029-.03-.038-.058-.067-.087l-6.146-5.251c-2.867-2.444-7.08-2.52-10.023-.183l-6.434 5.107v-14.37a6.03 6.03 0 0 1 6.02-6.02ZM6.653 33.262l8.06-6.396a5.205 5.205 0 0 1 6.599.116l6.002 5.117c-2.79 2.616-5.704 5.424-6.733 6.415h-7.964c-3.059 0-5.588-2.299-5.973-5.261l.01.01Zm28.74 5.262h-11.1c2.27-2.107 5.8-5.377 8.205-7.541a3.33 3.33 0 0 1 3.991-.346c2.068 1.298 4.569 3.722 4.588 3.741 0 0 .02 0 .02.02-.799 2.394-3.06 4.135-5.714 4.135l.01-.01Z"
        fill={fill}
      />
      <path
        d="M31.218 21.884a4.093 4.093 0 0 0 4.136-4.136 4.093 4.093 0 0 0-4.136-4.136 4.093 4.093 0 0 0-4.135 4.136 4.093 4.093 0 0 0 4.136 4.136Zm0-5.771c.953 0 1.636.683 1.636 1.635s-.683 1.635-1.636 1.635c-.952 0-1.635-.683-1.635-1.635s.683-1.635 1.636-1.635Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgImageLineThin)
const Memo = memo(ForwardRef)
export default Memo
