import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgCheckcircleLineThin = (
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
      d="M24 43.2c10.6 0 19.2-8.6 19.2-19.2S34.6 4.8 24 4.8 4.8 13.4 4.8 24 13.4 43.2 24 43.2Zm0-36c9.3 0 16.8 7.5 16.8 16.8S33.3 40.8 24 40.8 7.2 33.3 7.2 24 14.7 7.2 24 7.2Z"
      fill={fill}
    />
    <path
      d="M19.4 32.4c.3.3.6.4 1 .4s.8-.2 1-.5l12.6-15c.5-.6.4-1.4-.2-1.9-.6-.5-1.4-.4-1.9.2L20.3 29.4l-4.4-4.8c-.5-.6-1.4-.6-1.9-.1-.6.5-.6 1.4-.1 1.9l5.5 6Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCheckcircleLineThin);
const Memo = memo(ForwardRef);
export default Memo;