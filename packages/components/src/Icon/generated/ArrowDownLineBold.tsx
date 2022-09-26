import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgArrowDownLineBold = (
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
      d="M24 40.32c-.45 0-.88-.18-1.2-.5L9.3 26.32c-.66-.66-.66-1.74 0-2.41.32-.32.75-.5 1.2-.5.45 0 .88.18 1.2.5l10.6 10.6V9.37c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7v25.15l10.6-10.6c.32-.32.75-.5 1.2-.5.45 0 .88.18 1.2.5.66.66.66 1.74 0 2.41l-13.5 13.5c-.32.32-.75.5-1.2.5v-.01Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowDownLineBold);
const Memo = memo(ForwardRef);
export default Memo;