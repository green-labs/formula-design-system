import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgDeleteLineBold = (
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
      d="M24 4.3C13.1 4.3 4.3 13.1 4.3 24c0 10.9 8.8 19.7 19.7 19.7 10.9 0 19.7-8.8 19.7-19.7 0-10.9-8.8-19.7-19.7-19.7Zm0 36C15 40.3 7.7 33 7.7 24S15 7.7 24 7.7 40.3 15 40.3 24 33 40.3 24 40.3Z"
      fill={fill}
    />
    <path
      d="M30.4 17.6c-.6-.6-1.6-.6-2.3 0l-4.2 4.2-4.2-4.2c-.6-.6-1.6-.6-2.3 0-.7.6-.6 1.6 0 2.3l4.2 4.2-4.2 4.2c-.6.6-.6 1.6 0 2.3.3.3.7.5 1.1.5.4 0 .8-.2 1.1-.5l4.2-4.2 4.2 4.2c.3.3.7.5 1.1.5.4 0 .8-.2 1.1-.5.6-.6.6-1.6 0-2.3L26 24.1l4.2-4.2c.9-.7.9-1.7.2-2.3Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgDeleteLineBold);
const Memo = memo(ForwardRef);
export default Memo;
