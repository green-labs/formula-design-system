import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgRefreshLine = (
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
      d="M42.334 6.5c.855 0 1.56.643 1.655 1.472l.012.195v9.166c0 .855-.644 1.56-1.473 1.656l-.194.011h-8.333a1.667 1.667 0 0 1-.195-3.322l.195-.011h6.666v-7.5c0-.855.644-1.56 1.473-1.656l.194-.011Z"
      fill={fill}
    />
    <path
      d="M24.104 4c7.92 0 14.978 4.556 18.895 12.604A1.667 1.667 0 0 1 40 18.063c-3.366-6.918-9.27-10.73-15.897-10.73-9.228 0-16.77 7.485-16.77 16.667 0 9.182 7.542 16.667 16.77 16.667 6.117 0 11.87-3.508 14.24-8.246a1.667 1.667 0 0 1 2.98 1.491C38.387 39.786 31.476 44 24.104 44 13.04 44 4 35.029 4 24S13.041 4 24.104 4Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgRefreshLine);
const Memo = memo(ForwardRef);
export default Memo;
