import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgMoneybagLineBold = (
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
      d="M14.1 43.55c-3.8-.1-6.2-1.3-7.8-3.8-1.1-1.9-1.6-4.4-1.6-8.4 0-7.8 3.3-13.9 10-18.7l-.6-.5c-1.3-1.3-1.7-3.2-1.1-4.9.6-1.8 2.3-3 4.3-3h13.5c2.1 0 4.5.9 4.9 3 .2 1.8-.4 3.7-1.7 5.2l-.4.5c6.1 4.4 9.7 11.3 9.7 18.7 0 4.9-1.1 8.3-3.4 10.2-1.8 1.5-3.9 1.7-5.8 1.9l-20-.2Zm3.6-35.5c-.7 0-1.1.1-1.2.4-.2.3 0 .8.2 1l4 3.6-3.5 2.5c-5.8 4.2-8.6 9.4-8.6 15.9 0 3.3.3 5.3 1.1 6.6.7 1.3 2.2 1.9 4.6 2h19.8c1.5-.1 2.7-.3 3.7-1.1 1.4-1.2 2.1-3.8 2.1-7.4 0-6.2-3.1-12.2-8.3-15.9l-3.6-2.6.2-.2s2.6-2.3 3.4-3.2c.4-.5.6-.9.3-1.3-.1-.2-.4-.4-.7-.4H17.7v.1Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 35.35c-1.1 0-1.7-.5-2.1-1.8l-1.8-6.5-1.8 6.5c-.3 1.2-.9 1.8-2 1.8-1-.1-1.7-.7-2.1-1.9l-1.2-4.3h-1.5c-.7 0-1.2-.6-1.2-1.2v-.4c0-.6.5-1.2 1.2-1.2h.9l-.7-2.2c-.1-.2-.2-.9-.2-1.2 0-1 .6-1.6 1.7-1.6 1 0 1.5.5 1.6 1.6l1.5 7.4 1.9-7.4c.2-1 .8-1.5 1.7-1.5.9 0 1.5.5 1.7 1.5l1.9 7.5 1.6-7.4c.2-1.1.8-1.6 1.6-1.6 1.1 0 1.7.6 1.7 1.6 0 .4-.1 1-.2 1.2l-.7 2.2h.9c.6 0 1.2.5 1.2 1.2v.4c0 .7-.6 1.2-1.2 1.2h-1.1l-1.2 4.3c-.4 1.2-1 1.8-2.1 1.8Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgMoneybagLineBold);
const Memo = memo(ForwardRef);
export default Memo;
