import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgArrowTriangleUpFill = (
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
      d="M38.812 29.182 25.708 13.889a2.248 2.248 0 0 0-3.416 0L9.187 29.182c-1.25 1.46-.213 3.714 1.709 3.714h26.212c1.922 0 2.959-2.254 1.704-3.714Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowTriangleUpFill);
const Memo = memo(ForwardRef);
export default Memo;
