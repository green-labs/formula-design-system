import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgCommentLineRegular = (
  {
    size = "XL",
    sizePx,
    style,
    className,
    fill,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const finalSize = sizePx ? sizePx : convertSizeToPx(size)
  return (
    <svg
      width={finalSize}
      height={finalSize}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 48 48"
      className={className}
      ref={ref}
      {...props}
    >
      <path
        d="M12.935 42.76c-.25 0-.51-.06-.74-.18-.51-.27-.83-.81-.83-1.39v-4.61h-1.19a6.45 6.45 0 0 1-6.44-6.44V13.68c-.01-1.69.68-3.35 1.88-4.55a6.401 6.401 0 0 1 4.55-1.89h27.63c.11 0 .21.01.32.03 1.59.07 3.13.75 4.26 1.88a6.401 6.401 0 0 1 1.89 4.55v16.46c0 1.69-.69 3.35-1.89 4.55a6.384 6.384 0 0 1-4.55 1.89h-15.27l-8.75 5.89c-.26.18-.57.27-.88.27h.01Zm-2.77-32.38c-.88 0-1.7.35-2.33.97a3.32 3.32 0 0 0-.97 2.33v16.46c0 .88.35 1.7.97 2.33.62.62 1.47.97 2.33.97h2.76c.87 0 1.57.7 1.57 1.57v3.23l6.43-4.33c.39-.29.86-.45 1.37-.45h15.52c.88 0 1.71-.34 2.33-.97.62-.62.97-1.47.97-2.33V13.71c0-.88-.35-1.71-.97-2.33a3.32 3.32 0 0 0-2.33-.97c-.1 0-.19 0-.28-.03h-27.37Z"
        fill={fill}
      />
      <path
        d="M15.995 23.63c1.25 0 2.26-1.01 2.26-2.26 0-1.25-1.01-2.26-2.26-2.26-1.25 0-2.26 1.01-2.26 2.26 0 1.25 1.01 2.26 2.26 2.26ZM23.985 23.63c1.25 0 2.26-1.01 2.26-2.26 0-1.25-1.01-2.26-2.26-2.26-1.25 0-2.26 1.01-2.26 2.26 0 1.25 1.01 2.26 2.26 2.26ZM31.955 23.63c1.25 0 2.26-1.01 2.26-2.26 0-1.25-1.01-2.26-2.26-2.26-1.25 0-2.26 1.01-2.26 2.26 0 1.25 1.01 2.26 2.26 2.26Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgCommentLineRegular)
const Memo = memo(ForwardRef)
export default Memo
