import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgCalendarLineThin = (
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
      d="M9.4 44.7h29.2c3.1 0 5.6-2.6 5.6-5.7V12c0-3.1-2.5-5.7-5.6-5.7h-2.9V4.5c0-.7-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2v1.8H13.7V4.5c0-.7-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2v1.8H9.4c-3.1 0-5.6 2.6-5.6 5.7v27c0 3.1 2.5 5.7 5.6 5.7Zm29.2-2.4H9.4c-1.8 0-3.2-1.5-3.2-3.3V16.2h35.6V39c0 1.8-1.4 3.3-3.2 3.3ZM9.4 8.7h29.2c1.8 0 3.2 1.5 3.2 3.3v1.8H6.2V12c0-1.8 1.4-3.3 3.2-3.3Z"
      fill={fill}
    />
    <path
      d="m31.1 21.1-8.6 9-4-4c-.5-.5-1.4-.5-1.9 0s-.5 1.4 0 1.9l5 5c.3.3.6.4 1 .4s.7-.2 1-.4l9.6-10c.5-.5.5-1.4 0-1.9-.7-.6-1.6-.6-2.1 0Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCalendarLineThin);
const Memo = memo(ForwardRef);
export default Memo;
