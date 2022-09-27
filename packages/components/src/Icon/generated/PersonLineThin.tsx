import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgPersonLineThin = (
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
      d="M23.875 23.9c4.6 0 8.4-3.6 8.7-8.4.2-2.6-.7-5-2.3-6.8-1.6-1.7-3.9-2.7-6.4-2.7-2.5 0-4.8 1-6.4 2.7-1.7 1.8-2.5 4.2-2.3 6.8.3 4.8 4.1 8.4 8.7 8.4Zm-4.6-13.6c1.2-1.2 2.8-1.9 4.6-1.9 1.8 0 3.4.7 4.6 1.9 1.2 1.3 1.8 3.1 1.7 5-.3 4-3.4 6.2-6.3 6.2s-6-2.2-6.3-6.2c-.1-1.9.5-3.7 1.7-5ZM7.675 42.9h31.9c.8 0 1.5-.4 2-1 .5-.7.7-1.6.6-2.3-1.6-9.3-10.7-13.6-18.5-13.6-7.8 0-16.9 4.3-18.6 13.6-.2.9 0 1.8.6 2.4.5.6 1.2.9 2 .9Zm-.2-2.9c1.4-8 9.4-11.6 16.2-11.6 6.8 0 14.8 3.6 16.1 11.7 0 .1 0 .3-.1.4l-.1.1h-31.9c-.067 0-.133-.033-.2-.1 0-.1-.1-.3 0-.5Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPersonLineThin);
const Memo = memo(ForwardRef);
export default Memo;
