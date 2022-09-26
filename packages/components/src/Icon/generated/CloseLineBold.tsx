import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgCloseLineBold = (
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
      d="M35.9 12.1c-.8-.8-2-.8-2.8 0L24 21.2l-9.1-9.1c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l9.1 9.1-9.1 9.1c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l9.1-9.1 9.1 9.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.8-.8.8-2 0-2.8L26.8 24l9.1-9.1c.8-.8.8-2 0-2.8Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCloseLineBold);
const Memo = memo(ForwardRef);
export default Memo;