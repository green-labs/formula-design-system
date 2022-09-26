import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgCalendarLineBold = (
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
      d="M38.6 5.8h-2.4V4.5c0-.9-.8-1.7-1.7-1.7-.9 0-1.7.8-1.7 1.7v1.3H14.2V4.5c0-.9-.8-1.7-1.7-1.7-.9 0-1.7.8-1.7 1.7v1.3H9.4C6 5.8 3.3 8.6 3.3 12v27c0 3.4 2.7 6.2 6.1 6.2h29.2c3.4 0 6.1-2.8 6.1-6.2V12c0-3.4-2.7-6.2-6.1-6.2ZM9.4 9.2h29.2c1.5 0 2.7 1.3 2.7 2.8v1.3H6.7V12c0-1.5 1.2-2.8 2.7-2.8Zm29.2 32.6H9.4c-1.5 0-2.7-1.3-2.7-2.8V16.7h34.6V39c0 1.5-1.2 2.8-2.7 2.8Z"
      fill={fill}
    />
    <path
      d="m30.9 20.9-8.5 8.8-3.8-3.8c-.6-.6-1.6-.6-2.3 0-.6.6-.6 1.6 0 2.3l5 5c.3.3.7.5 1.1.5.4 0 .8-.2 1.1-.5l9.6-10c.6-.6.6-1.7 0-2.3-.5-.7-1.5-.6-2.2 0Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCalendarLineBold);
const Memo = memo(ForwardRef);
export default Memo;
