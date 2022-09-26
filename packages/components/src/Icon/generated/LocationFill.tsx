import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgLocationFill = (
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
      d="M40.47 7.53c-.76-.76-1.89-.95-2.79-.5L8.24 20.55c-1.08.54-1.64 1.71-1.37 2.85.27 1.13 1.25 1.9 2.44 1.9h13.4v13.4c0 1.22.83 2.23 2.03 2.46.16.03.33.05.49.05.99 0 1.89-.58 2.25-1.48l13.48-29.4c.45-.93.25-2.05-.5-2.8h.01Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgLocationFill);
const Memo = memo(ForwardRef);
export default Memo;