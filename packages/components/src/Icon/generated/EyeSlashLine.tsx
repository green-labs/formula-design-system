import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgEyeSlashLine = (
  {
    size = IconSize.XL,
    style,
    className,
    fill,
    ...props
  }: IconProps & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={size}
    height={size}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    viewBox="0 0 48 48"
    className={className}
    ref={ref}
    {...props}
  >
    <path
      d="M29.47 24.165c-.2 3.16-2.95 5.56-6.11 5.37-.7-.05-1.28.48-1.33 1.17-.04.69.48 1.28 1.17 1.33.18.01.36.02.53.02 4.31 0 7.95-3.36 8.23-7.72a1.26 1.26 0 0 0-1.17-1.33c-.7-.06-1.28.48-1.33 1.17l.01-.01ZM41.97 7.495c0-.39-.16-.76-.44-1.04a1.47 1.47 0 0 0-1.04-.44c-.39 0-.77.14-1.05.41l-10.76 10.76c-3.43-2.67-8.41-2.23-11.29 1.09-2.62 3.02-2.65 7.43-.28 10.47L6.44 39.425c-.21.21-.35.48-.41.77-.06.29-.03.59.09.87.11.27.3.51.55.67.25.17.54.25.83.25a1.462 1.462 0 0 0 1.06-.44l33-33c.27-.28.42-.66.41-1.05Zm-22.69 12.42c1.94-2.23 5.22-2.58 7.6-.93l-7.97 7.97c-1.46-2.11-1.39-5.01.37-7.04Z"
      fill={fill}
    />
    <path
      d="M44.96 22.315c-1.97-2.83-3.14-5.24-5.47-7.21-.04-.03-.08-.05-.13-.04-.05 0-.09.02-.12.05l-1.87 1.86s-.03.04-.04.07c0 .02-.01.05-.01.08s0 .05.02.07c.01.02.03.04.05.06 2.2 1.83 3.25 4.09 5.12 6.77-2.25 3.52-4.12 6.48-7.32 8.54-3.51 2.27-7.26 3.42-11.15 3.42-1.62 0-3.23-.2-4.8-.61a.308.308 0 0 0-.19 0c-.06.02-.12.05-.17.09l-2.02 2.02s-.04.05-.05.08c0 .03-.01.06 0 .09 0 .03.02.06.04.08.02.02.05.04.08.05 2.29.77 4.69 1.17 7.11 1.18 4.48 0 8.78-1.31 12.78-3.9 3.55-2.3 5.74-5.56 8.21-9.44.33-.5.49-1.08.48-1.67a3.01 3.01 0 0 0-.54-1.66l-.01.02ZM8.41 32.975s.08.04.13.04.09-.02.12-.05l1.86-1.86s.03-.04.04-.07c0-.02.01-.05.01-.08s0-.05-.02-.08a.265.265 0 0 0-.05-.06c-2.35-1.94-3.38-4.25-5.01-6.82 2.25-3.48 4.16-6.43 7.41-8.53 3.56-2.3 7.3-3.47 11.11-3.47 1.59 0 3.17.21 4.71.63.06.02.13.02.2 0 .06-.02.12-.05.17-.1l2.02-2.02s.04-.05.05-.08c0-.03.01-.06 0-.09 0-.03-.02-.06-.04-.08a.218.218 0 0 0-.08-.05c-2.26-.79-4.63-1.2-7.02-1.2-4.34 0-8.75 1.36-12.74 3.94-3.6 2.32-5.82 5.58-8.3 9.41a3.042 3.042 0 0 0-.01 3.26c1.76 2.77 2.93 5.25 5.43 7.36h.01Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgEyeSlashLine);
const Memo = memo(ForwardRef);
export default Memo;
