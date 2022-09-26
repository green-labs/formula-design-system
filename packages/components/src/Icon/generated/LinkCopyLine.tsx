import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgLinkcopyLine = (
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
      d="M21.3 34.63h-6.72c-3.09 0-6.01-1.08-8.21-3.05-2.22-1.98-3.5-4.75-3.5-7.58s1.27-5.6 3.5-7.58c2.2-1.97 5.12-3.05 8.21-3.05h6.72a1.63 1.63 0 0 1 0 3.26h-6.72c-2.26 0-4.46.81-6.04 2.22-1.55 1.39-2.41 3.21-2.41 5.15 0 1.94.86 3.76 2.41 5.15 1.58 1.41 3.78 2.22 6.04 2.22h6.72a1.63 1.63 0 0 1 0 3.26ZM35.22 34.63H28.5a1.63 1.63 0 0 1 0-3.26h6.72c2.26 0 4.46-.81 6.04-2.22 1.55-1.39 2.41-3.21 2.41-5.15 0-1.94-.85-3.76-2.41-5.15-1.58-1.41-3.78-2.22-6.04-2.22H28.5a1.63 1.63 0 0 1 0-3.26h6.72c3.09 0 6.01 1.08 8.21 3.05 2.22 1.99 3.5 4.75 3.5 7.58s-1.27 5.6-3.5 7.58c-2.21 1.97-5.12 3.05-8.22 3.05h.01Z"
      fill="#000"
    />
    <path
      d="M34.51 25.63h-19.2a1.63 1.63 0 0 1 0-3.26h19.2a1.63 1.63 0 0 1 0 3.26Z"
      fill="#000"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgLinkcopyLine);
const Memo = memo(ForwardRef);
export default Memo;
