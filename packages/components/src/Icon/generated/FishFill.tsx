import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgFishFill = (
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
        d="M32.669 9.502a23.782 23.782 0 0 0-2.2-.258c-1.807-1.374-5.422-3.068-9.181-3.77a1.527 1.527 0 0 0-1.384.454 1.54 1.54 0 0 0-.362 1.415l1.126 4.359c-3.955 1.332-7.25 3.625-9.336 5.329a20.189 20.189 0 0 0-1.343-1.147c-3.707-2.995-8.086-3.387-8.272-3.398a1.479 1.479 0 0 0-1.24.486c-.32.34-.454.816-.382 1.27.042.258.96 5.742 3.408 9.181-2.447 3.43-3.366 8.924-3.408 9.182-.072.465.062.93.382 1.27.32.341.765.517 1.24.486.186-.01 4.565-.413 8.283-3.398.444-.362.888-.744 1.322-1.136 2.096 1.724 5.411 4.027 9.418 5.36l-1.198 5.535a1.524 1.524 0 0 0 .393 1.374c.289.3.681.454 1.084.454.093 0 .186 0 .28-.02 3.83-.713 7.456-3.44 9.17-4.906a21.19 21.19 0 0 0 2.21-.268 33.266 33.266 0 0 1-3.046-13.933c0-4.843 1.053-9.625 3.046-13.932l-.01.01Z"
        fill={fill}
      />
      <path
        d="M47.924 23.435c0-2.282-3.326-10.286-12.26-13.188-1.972 4.048-3.015 8.582-3.015 13.188a30.25 30.25 0 0 0 3.016 13.178c8.923-2.902 12.259-10.895 12.259-13.178Zm-9.595.723a2.376 2.376 0 1 1 .001-4.751 2.376 2.376 0 0 1 0 4.751Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgFishFill)
const Memo = memo(ForwardRef)
export default Memo
