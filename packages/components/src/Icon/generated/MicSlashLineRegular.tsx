import { SVGProps, Ref, forwardRef, memo } from "react"
import { convertSizeToPx } from "../utils"
import type { IconProps } from "../types"

const SvgMicSlashLineRegular = (
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
        d="M40.81 4.941a1.49 1.49 0 0 0-2.12 0l-31.5 31.5a1.49 1.49 0 0 0 0 2.12c.29.29.68.44 1.06.44s.77-.15 1.06-.44l31.5-31.5c.59-.59.59-1.54 0-2.12ZM12.08 27.091s.05.03.08.04h.09c.03 0 .06-.02.08-.05l2.05-2.04s.08-.1.09-.16c.02-.06.02-.12 0-.19-.15-.72-.23-1.45-.23-2.18v-3c0-.2-.04-.4-.12-.59-.08-.19-.2-.35-.34-.49-.15-.14-.32-.25-.51-.32s-.39-.1-.6-.09c-.81.04-1.43.73-1.43 1.54v2.96c0 1.54.26 3.06.78 4.51.01.03.03.06.05.08l.01-.02ZM37.78 18.421c-.15-.14-.32-.25-.51-.32s-.39-.1-.6-.09c-.81.04-1.43.73-1.43 1.54v2.96c0 2.78-1.12 5.45-3.09 7.41a10.529 10.529 0 0 1-7.41 3.09c-1.51 0-2.99-.32-4.36-.95a.422.422 0 0 0-.22-.03c-.08.01-.15.05-.2.1l-1.68 1.68s-.07.09-.09.15c-.02.06-.02.11-.02.17 0 .06.03.11.06.16s.08.09.13.11c1.51.81 3.17 1.33 4.88 1.52v4.58h-4.5c-.2 0-.4.04-.59.12-.19.08-.35.2-.49.34-.14.15-.25.32-.32.51s-.1.39-.09.6c.04.81.73 1.43 1.54 1.43h11.96c.2 0 .4-.04.59-.12.19-.08.35-.2.49-.34.14-.15.25-.32.32-.51s.1-.39.09-.6c-.04-.81-.73-1.43-1.54-1.43h-4.46v-4.58c6.74-.75 12-6.48 12-13.42v-3c0-.2-.04-.4-.12-.59-.08-.19-.2-.35-.34-.49ZM17.36 21.891s.07.02.11.01c.04 0 .07-.03.1-.05l2.57-2.58c.07-.07.11-.16.11-.26v-7.01c-.01-.59.1-1.18.32-1.73a4.38 4.38 0 0 1 2.44-2.44c.55-.22 1.14-.33 1.73-.32.87 0 1.73.24 2.47.71.73.47 1.31 1.16 1.66 1.96a.18.18 0 0 0 .13.11h.09c.03 0 .06-.03.08-.05L31 8.411c.06-.06.1-.14.11-.22 0-.09-.01-.17-.06-.24a7.508 7.508 0 0 0-2.76-2.55 7.265 7.265 0 0 0-3.65-.9c-4.11.06-7.39 3.47-7.39 7.59v9.63s.01.07.03.1c.02.03.05.05.08.07Z"
        fill={fill}
      />
      <path
        d="M26.68 29.741a7.36 7.36 0 0 0 3.37-2 7.578 7.578 0 0 0 2.2-5.34v-2.12s-.01-.07-.03-.1c-.02-.03-.05-.05-.08-.07-.04-.01-.07-.02-.11-.01-.04 0-.07.03-.1.05l-2.61 2.62c-.06.06-.1.14-.11.22-.27 2.06-1.94 3.74-3.97 3.98-.09 0-.17.05-.23.11l-2.34 2.34s-.04.05-.05.08v.1c0 .03.02.06.05.08.02.02.05.04.08.05 1.28.36 2.64.36 3.92.01h.01Z"
        fill={fill}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgMicSlashLineRegular)
const Memo = memo(ForwardRef)
export default Memo
