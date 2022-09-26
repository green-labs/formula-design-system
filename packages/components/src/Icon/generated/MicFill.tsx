import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgMicFill = (
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
      d="M21.12 29.408c.91.389 1.89.59 2.88.592 4.135 0 7.5-3.407 7.5-7.594V12c0-4.206-3.294-7.5-7.5-7.5a7.471 7.471 0 0 0-7.5 7.5v10.406a7.583 7.583 0 0 0 2.198 5.335 7.39 7.39 0 0 0 2.422 1.667Z"
      fill={fill}
    />
    <path
      d="M13.5 19.5a1.5 1.5 0 0 0-3 0v3c0 6.922 5.271 12.665 12 13.417V40.5H18a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 0 0 0-3h-4.5v-4.583c6.729-.752 12-6.495 12-13.417v-3a1.5 1.5 0 0 0-3 0v3C34.5 28.272 29.772 33 24 33s-10.5-4.728-10.5-10.5v-3Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgMicFill);
const Memo = memo(ForwardRef);
export default Memo;
