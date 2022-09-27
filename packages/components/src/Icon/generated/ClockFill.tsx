import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgClockFill = (
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
      d="M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4Zm7.26 27.28c-.34.32-.8.5-1.24.5-.48 0-.96-.18-1.3-.56l-6.02-6.38c-.32-.34-.5-.78-.5-1.24V14c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v8.88l5.54 5.86c.68.72.66 1.86-.08 2.54Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgClockFill);
const Memo = memo(ForwardRef);
export default Memo;
