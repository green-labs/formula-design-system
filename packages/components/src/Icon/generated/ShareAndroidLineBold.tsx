import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgShareandroidLineBold = (
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
      d="M35.49 31.45c-1.6 0-3.05.63-4.13 1.64L18.34 25.5c.12-.48.2-.98.2-1.5s-.07-1-.19-1.47l13.34-7.33a6.03 6.03 0 0 0 3.8 1.35c3.34 0 6.05-2.71 6.05-6.05s-2.71-6.05-6.05-6.05-6.05 2.71-6.05 6.05c0 .74.14 1.45.39 2.11l-13.02 7.16a6.01 6.01 0 0 0-4.31-1.81c-3.34 0-6.05 2.71-6.05 6.05s2.71 6.05 6.05 6.05c1.68 0 3.19-.68 4.29-1.79l12.91 7.52c-.16.54-.25 1.12-.25 1.71 0 3.34 2.71 6.05 6.05 6.05s6.05-2.71 6.05-6.05-2.71-6.05-6.05-6.05h-.01Zm0-23.9c1.65 0 2.95 1.3 2.95 2.95 0 1.65-1.3 2.95-2.95 2.95-1.65 0-2.95-1.3-2.95-2.95 0-1.65 1.3-2.95 2.95-2.95Zm-23 19.4c-1.65 0-2.95-1.3-2.95-2.95 0-1.65 1.3-2.95 2.95-2.95 1.65 0 2.95 1.3 2.95 2.95 0 1.65-1.3 2.95-2.95 2.95Zm23 13.5c-1.65 0-2.95-1.3-2.95-2.95 0-1.65 1.3-2.95 2.95-2.95 1.65 0 2.95 1.3 2.95 2.95 0 1.65-1.3 2.95-2.95 2.95Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgShareandroidLineBold);
const Memo = memo(ForwardRef);
export default Memo;
