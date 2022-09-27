import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgMoneybagLineThin = (
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
      d="M14.05 43.2c-3.6-.1-5.9-1.2-7.4-3.6-1.1-1.7-1.5-4.3-1.5-8.1 0-7.7 3.3-13.6 10-18.4l.3-.2-1.1-1c-1.1-1.1-1.5-2.9-.9-4.4.5-1.6 2.1-2.7 3.8-2.7h13.5c1.9 0 3.8.9 4.4 2.6.6 1.6-.4 3.4-1.5 4.7l-.8.8.3.2c6.1 4.3 9.7 11.2 9.7 18.5 0 4.7-1.1 8-3.2 9.9-1.7 1.4-3.6 1.6-5.5 1.7h-20.1Zm2.8-27.8c-5.9 4.3-8.8 9.6-8.8 16.3 0 3.5.3 5.4 1.1 6.8.8 1.4 2.5 2.2 5.1 2.2h19.8c1.6-.1 2.9-.3 4-1.2 1.5-1.3 2.3-4 2.3-7.8 0-6.4-3.2-12.5-8.5-16.3l-3.1-2.3c.7-.6 2.5-2.3 3.2-3 .8-.9.6-1.6.4-1.9-.2-.4-.7-.6-1.1-.6h-13.5c-.3 0-1.4 0-1.7.8-.3.5 0 1.2.4 1.6l3.5 3.2-3.1 2.2Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.95 35.3c-1 0-1.5-.5-1.9-1.6l-1.9-6.8h-.3l-1.8 6.8c-.3 1.1-.8 1.6-1.8 1.6-.9-.1-1.5-.6-1.9-1.7l-1.2-4.5h-1.7c-.5 0-1-.4-1-1v-.4c0-.5.4-1 1-1h1.2l-.8-2.5c-.1-.5-.2-.9-.2-1.2 0-1.1.8-1.4 1.5-1.4.8 0 1.3.5 1.4 1.4l1.6 7.7h.2l.1-.1 1.9-7.6c.2-.9.6-1.3 1.5-1.3.8 0 1.3.5 1.5 1.3l1.9 7.8h.3l1.6-7.7c.2-.9.6-1.4 1.4-1.4 1 0 1.5.5 1.5 1.4 0 .2-.1.7-.2 1.2l-.8 2.5h1.2c.5 0 1 .4 1 1v.4c0 .5-.4 1-1 1h-1.3l-1.2 4.5c-.3 1.1-.8 1.6-1.8 1.6Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgMoneybagLineThin);
const Memo = memo(ForwardRef);
export default Memo;
