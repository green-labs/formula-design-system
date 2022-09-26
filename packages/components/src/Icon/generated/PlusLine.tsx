import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgPlusLine = (
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
      d="M37.8 22.5H26.1V10.8c0-.99-.81-1.8-1.8-1.8s-1.8.81-1.8 1.8v11.7H10.8c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8h11.7v11.7c0 .99.81 1.8 1.8 1.8s1.8-.81 1.8-1.8V26.1h11.7c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPlusLine);
const Memo = memo(ForwardRef);
export default Memo;
