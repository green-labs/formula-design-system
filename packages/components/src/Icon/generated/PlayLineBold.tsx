import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgPlayLineBold = (
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
      d="m40.045 21.047-23.2-13.9c-1.1-.7-2.4-.8-3.5-.2-1.2.7-2 2-2 3.4v27.2c0 1.4.8 2.7 2 3.4.5.3 1.1.5 1.7.5.6 0 1.2-.2 1.8-.5l23.2-13.9c1-.7 1.7-1.9 1.6-3.1 0-1.3-.7-2.3-1.6-2.9Zm-1.8 3.1-23.2 13.9s-.1 0-.1-.1c-.1-.1-.1-.2-.1-.4v-27.2c0-.3.2-.4.2-.4l23.3 14c-.1.1-.1.2-.1.2Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPlayLineBold);
const Memo = memo(ForwardRef);
export default Memo;
