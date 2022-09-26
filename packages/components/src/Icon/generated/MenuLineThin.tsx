import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgMenuLineThin = (
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
      d="M39.25 13.3H8.75c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3h30.5c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3ZM39.25 25.3H8.75c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3h30.5c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3ZM39.25 37.3H8.75c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3h30.5c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgMenuLineThin);
const Memo = memo(ForwardRef);
export default Memo;