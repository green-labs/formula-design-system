import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgPlayFill = (
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
      d="M14.469 41.25a3.315 3.315 0 0 1-1.641-.438c-1.125-.637-1.824-1.875-1.824-3.218V10.406c0-1.347.699-2.58 1.824-3.218a3.293 3.293 0 0 1 3.354.042l23.235 13.909a3.374 3.374 0 0 1 0 5.719L16.177 40.77a3.328 3.328 0 0 1-1.708.48Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPlayFill);
const Memo = memo(ForwardRef);
export default Memo;
