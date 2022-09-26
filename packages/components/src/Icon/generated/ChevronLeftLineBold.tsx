import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgChevronLeftLineBold = (
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
      d="M31.75 39.5c-.5 0-1-.2-1.4-.6l-13.5-13.5c-.8-.8-.8-2 0-2.8l13.5-13.5c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8L21.05 24l12.1 12.1c.8.8.8 2 0 2.8-.4.4-.9.6-1.4.6Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronLeftLineBold);
const Memo = memo(ForwardRef);
export default Memo;
