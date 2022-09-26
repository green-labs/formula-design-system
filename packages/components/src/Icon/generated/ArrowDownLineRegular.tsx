import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgArrowDownLineRegular = (
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
      d="M25.5 9.375a1.5 1.5 0 0 0-3 0v25.629l-10.94-10.94a1.5 1.5 0 0 0-2.12 2.122l13.5 13.5a1.5 1.5 0 0 0 2.12 0l13.5-13.5a1.5 1.5 0 0 0-2.12-2.122L25.5 35.004V9.375Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowDownLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
