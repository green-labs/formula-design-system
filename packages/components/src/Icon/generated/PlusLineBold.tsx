import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgPlusLineBold = (
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
      d="M37.5 22H26V10.5c0-1.1-.9-2-2-2s-2 .9-2 2V22H10.5c-1.1 0-2 .9-2 2s.9 2 2 2H22v11.5c0 1.1.9 2 2 2s2-.9 2-2V26h11.5c1.1 0 2-.9 2-2s-.9-2-2-2Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPlusLineBold);
const Memo = memo(ForwardRef);
export default Memo;