import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgHelpFill = (
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
      d="M24 6C14.06 6 6 14.06 6 24s8.06 18 18 18 18-8.06 18-18S33.94 6 24 6Zm-.56 28.5c-.37 0-.73-.11-1.04-.32a1.882 1.882 0 0 1-.8-1.92c.07-.36.25-.7.51-.96a1.875 1.875 0 0 1 2.04-.4 1.893 1.893 0 0 1 1.16 1.73c0 .5-.2.97-.55 1.33-.35.36-.83.55-1.33.55l.01-.01Zm3.14-9.56c-1.52 1.02-1.73 1.95-1.73 2.81 0 .35-.14.68-.38.93a1.3 1.3 0 0 1-.93.38c-.35 0-.68-.14-.93-.38s-.38-.58-.38-.93c0-2.05.95-3.69 2.89-4.99 1.81-1.21 2.83-1.98 2.83-3.67 0-1.15-.66-2.02-2.01-2.67-.32-.15-1.03-.3-1.91-.29-1.1.01-1.95.28-2.61.8-1.24 1-1.35 2.08-1.35 2.1 0 .17-.05.34-.12.5-.07.16-.18.3-.3.41-.13.12-.28.2-.44.26-.16.06-.33.08-.51.08-.17 0-.34-.05-.5-.12-.16-.07-.3-.18-.41-.3-.12-.13-.21-.28-.26-.44-.06-.16-.08-.33-.08-.51.01-.23.17-2.28 2.32-4.01 1.12-.9 2.54-1.36 4.22-1.39 1.19-.01 2.31.19 3.07.55 2.27 1.07 3.52 2.86 3.52 5.03 0 3.17-2.12 4.6-3.99 5.85h-.01Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgHelpFill);
const Memo = memo(ForwardRef);
export default Memo;
