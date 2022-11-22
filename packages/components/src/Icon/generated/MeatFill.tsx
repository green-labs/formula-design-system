import { Ref, forwardRef, memo } from "react"
import { colorMap } from "@greenlabs/formula-design-token"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"
const SvgMeatFill = (
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
        d="M9.413 38.996c2.557 2.557 5.837 4.543 9.026 5.476 3.55 1.023 6.53.602 8.425-1.173 0 0 .03 0 .06-.03 5.867-5.025 9.237-11.163 9.478-17.331.09-2.287-.602-5.356-1.354-7.282l1.655-1.624c.39-.422 1.414.15 1.925.3 1.685.542 3.52.06 4.724-1.233a4.6 4.6 0 0 0 1.234-2.167c.692-2.557-.873-5.084-3.37-5.807a2.087 2.087 0 0 1-1.384-1.444c-.21-.812-.542-1.715-1.114-2.317-.902-.902-2.046-1.384-3.31-1.384h-.06a4.468 4.468 0 0 0-3.31 1.475 4.888 4.888 0 0 0-1.203 4.754c.15.601.723 1.474.271 1.925l-1.444 1.715c-1.745-.752-4.604-1.444-6.68-1.444h-.662c-6.077.24-12.245 3.731-17.39 9.839 0 0-.03.03-.03.06-3.732 4.002-.663 12.457 4.513 17.632v.06Zm12.637 3.039c-.813 0-1.745-.15-2.768-.451-2.708-.783-5.537-2.498-7.733-4.694-4.453-4.453-6.65-11.283-4.393-13.54 2.257-2.257 9.087-.06 13.54 4.393 2.196 2.196 3.911 5.025 4.693 7.733.723 2.497.542 4.543-.511 5.596-.632.632-1.595.933-2.828.933v.03Z"
        fill={fill}
      />
      <path
        d="M15.221 29.337c-.572 0-1.083.211-1.474.572-.572.572-.753 1.414-.452 2.317.18.572.542 1.143 1.023 1.625a4.57 4.57 0 0 0 1.625 1.053c.903.3 1.745.12 2.317-.452.963-.962.722-2.617-.602-3.941-.752-.752-1.655-1.174-2.467-1.174h.03Z"
        fill={fill}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgMeatFill)
const Memo = memo(ForwardRef)
export default Memo
