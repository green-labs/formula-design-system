import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgAppleLine = (
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
        d="M42.465 21.379c-.391-3.373-2.439-6.626-5.36-8.523-2.289-1.475-4.818-1.897-7.047-1.204-.27.06-.572.18-.903.27.18-.3.421-.572.572-.903 1.988-4.065 2.228-6.685.723-7.95-.573-.512-1.325-.392-1.596-.361-1.416.21-6.264 1.776-8.402 4.999a4.757 4.757 0 0 0-.362 4.035c.09.21.21.422.331.632a39.924 39.924 0 0 0-2.59-1.054c-2.86-.662-5.661 0-7.89 1.837-2.017 1.717-3.493 4.216-4.155 7.108-.09.36-2.199 9.004 6.565 19.664 1.415 1.898 4.005 4.186 6.565 4.367 1.234.09 2.349-.331 3.222-1.174 1.235-1.205 2.68-1.205 3.885 0a4.005 4.005 0 0 0 2.89 1.204h.332c2.56-.18 5.15-2.47 6.535-4.306 7.227-8.794 6.733-18 6.703-18.481l-.017-.16ZM22.981 9.333c1.114-1.657 3.825-2.891 5.36-3.373-.12.693-.451 1.927-1.355 3.794-.662 1.446-1.927 2.199-3.041 1.958-.482-.15-.843-.512-1.024-.994-.18-.482-.15-1.024.09-1.385h-.03Zm10.45 28.79c-1.295 1.716-3.162 3.071-4.367 3.162-.361 0-.632-.06-.873-.301-1.205-1.205-2.65-1.807-4.066-1.807-1.415 0-2.89.602-4.065 1.806-.24.242-.512.332-.873.302-1.205-.09-3.102-1.446-4.427-3.223-7.83-9.456-6.144-16.743-6.053-17.075.542-2.288 1.656-4.246 3.132-5.48 1.535-1.265 3.342-1.687 5.15-1.265.812.27 3.432 1.445 4.607 2.017l.12.06c1.867.753 2.56.753 4.548-.06 1.084-.542 3.403-1.415 4.607-1.716 1.837-.572 3.524.12 4.608.813 2.138 1.385 3.704 3.885 4.005 6.264.045.355.452 8.582-6.023 16.473l-.03.03Z"
        fill={fill}
      />
      <path
        d="M16.024 17.072c-1.837.301-3.313 1.566-4.126 3.524-1.114 2.62-.783 5.992.723 8.16.301.422.753.633 1.235.633.3 0 .602-.09.873-.271.693-.482.843-1.415.362-2.108-.934-1.355-1.115-3.614-.422-5.27.301-.693.843-1.536 1.837-1.717.813-.15 1.385-.903 1.235-1.746a1.492 1.492 0 0 0-1.747-1.235l.03.03Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgAppleLine)
const Memo = memo(ForwardRef)
export default Memo