import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgPinFill = (
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
      d="m32.2 17.85-1.2-2.7c-.2-.3-.2-.7-.2-1.1v-5.6h1.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-16c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H17v5.6c0 .4-.1.8-.2 1.1l-1.2 2.7c-1.4 3.1-2.2 6.6-2.2 10.2 0 1.4 1 2.5 2.3 2.5h6.8v10.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-10.5h6.8c1.3 0 2.3-1.1 2.3-2.5-.2-3.5-1-7-2.4-10.2Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPinFill);
const Memo = memo(ForwardRef);
export default Memo;
