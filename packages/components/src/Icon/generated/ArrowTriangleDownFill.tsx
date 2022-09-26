import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgArrowtriangledownFill = (
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
      d="m9.187 18.818 13.105 15.293a2.249 2.249 0 0 0 3.416 0l13.104-15.293c1.251-1.46.214-3.714-1.708-3.714H10.892c-1.922 0-2.959 2.254-1.705 3.714Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowtriangledownFill);
const Memo = memo(ForwardRef);
export default Memo;