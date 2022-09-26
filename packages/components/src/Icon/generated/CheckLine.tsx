import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgCheckLine = (
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
      d="M17.8 37.6c-.48 0-.93-.19-1.27-.53l-9-9c-.7-.7-.7-1.84 0-2.55.7-.7 1.84-.7 2.54 0l7.64 7.64 19.74-22.55c.65-.75 1.79-.82 2.54-.17.75.65.82 1.79.17 2.54L19.15 36.99c-.33.37-.8.6-1.29.61h-.06Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCheckLine);
const Memo = memo(ForwardRef);
export default Memo;
