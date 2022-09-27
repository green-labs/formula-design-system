import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgHeartLineBold = (
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
      d="M24.001 42.3c-.7 0-1.4-.2-1.9-.7-8.9-6.1-18-13.8-17.8-25.1 0-5.9 4.8-10.8 10.6-10.8 4.5 0 7.5 2.6 9.1 4.7 1.6-2 4.6-4.7 9.1-4.7 5.7 0 10.5 4.8 10.6 10.8.1 11.3-8.9 19-17.8 25.1-.5.5-1.2.7-1.9.7Zm-9.1-33.1c-4 0-7.2 3.3-7.2 7.4-.1 9.6 7.8 16.4 16.3 22.2 8.1-5.5 16.4-12.5 16.3-22.2-.1-4.1-3.3-7.4-7.2-7.4-5 0-7.6 5-7.6 5.1-.3.6-.9.9-1.5.9s-1.2-.4-1.5-.9c-.1-.2-2.7-5.1-7.6-5.1Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgHeartLineBold);
const Memo = memo(ForwardRef);
export default Memo;
