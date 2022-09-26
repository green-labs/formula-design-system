import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgChevronUpLineBold = (
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
      d="M37.5 30.75c-.5 0-1-.2-1.4-.6L24 18.05l-12.1 12.1c-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8l13.5-13.5c.8-.8 2-.8 2.8 0l13.5 13.5c.8.8.8 2 0 2.8-.4.4-.9.6-1.4.6Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronUpLineBold);
const Memo = memo(ForwardRef);
export default Memo;