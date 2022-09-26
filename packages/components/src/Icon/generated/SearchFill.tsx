import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgSearchFill = (
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
      d="m41.297 38.955-8.23-8.23c.39-.45.77-.92 1.11-1.41 1.81-2.71 2.77-5.93 2.77-9.31 0-4.4-1.71-8.6-4.87-11.87-3.23-3.11-7.42-4.82-11.82-4.82-3.2 0-6.4.94-9.31 2.77-2.68 1.79-4.79 4.37-6.11 7.49-1.29 3.14-1.6 6.49-.92 9.68.72 3.38 2.33 6.33 4.59 8.49 2.28 2.27 5.29 3.91 8.49 4.59 1.1.23 2.21.35 3.33.35 2.14 0 4.3-.43 6.38-1.28 1.09-.46 2.14-1.05 3.13-1.74l8.38 8.38c.43.43.98.64 1.54.64s1.12-.21 1.54-.64c.85-.85.85-2.23 0-3.09Zm-16.27-7.58c-2.33.95-4.79 1.19-7.12.69a12.81 12.81 0 0 1-6.35-3.45c-1.67-1.59-2.83-3.76-3.37-6.28-.5-2.33-.26-4.79.68-7.09.98-2.31 2.53-4.22 4.45-5.5 2.17-1.35 4.57-2.07 6.94-2.07 3.27 0 6.39 1.27 8.73 3.53 2.31 2.4 3.59 5.52 3.59 8.79 0 2.51-.7 4.89-2.01 6.85-1.39 2-3.36 3.61-5.53 4.53h-.01Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSearchFill);
const Memo = memo(ForwardRef);
export default Memo;
