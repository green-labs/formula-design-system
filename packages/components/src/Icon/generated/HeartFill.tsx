import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgHeartFill = (
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
      d="M24.5 42c-.6 0-1.19-.18-1.69-.52-7.37-5-10.56-8.43-12.32-10.58C6.75 26.33 4.95 21.64 5 16.56 5.06 10.74 9.73 6 15.42 6c4.13 0 6.99 2.33 8.66 4.27.05.06.12.11.19.14.07.03.15.05.23.05.08 0 .16-.02.23-.05.07-.03.14-.08.19-.14C26.59 8.33 29.45 6 33.58 6c5.68 0 10.35 4.74 10.41 10.56.05 5.08-1.75 9.77-5.49 14.34-1.76 2.14-4.95 5.57-12.32 10.58-.5.34-1.09.52-1.69.52h.01Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgHeartFill);
const Memo = memo(ForwardRef);
export default Memo;
