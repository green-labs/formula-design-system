import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgImageLine = (
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
      d="M39.15 6h-30C5.76 6 3 8.76 3 12.15v24c0 3.39 2.76 6.15 6.15 6.15h30c3.39 0 6.15-2.76 6.15-6.15v-24C45.3 8.76 42.54 6 39.15 6Zm-30 3.3h30c1.57 0 2.85 1.28 2.85 2.85v18.98l-4.19-3.5a4.744 4.744 0 0 0-3.19-1.07c-1.16.05-2.25.54-3.08 1.36l-2.16 2.16-8.11-7.14a4.605 4.605 0 0 0-3.11-1.32c-1.21-.02-2.33.38-3.16 1.12l-8.7 6.97V12.15c0-1.57 1.28-2.85 2.85-2.85ZM6.3 36.15v-2.21l10.83-8.68c.26-.23.58-.37.94-.34.34 0 .67.15.91.39.03.02.05.05.08.07l7.99 7.03-6.58 6.58H9.15c-1.57 0-2.85-1.28-2.85-2.85v.01ZM39.15 39H25.13l8.75-8.75c.24-.24.56-.38.89-.4.34-.02.67.09.93.31l6.3 5.26v.73c0 1.57-1.28 2.85-2.85 2.85Z"
      fill={fill}
    />
    <path
      d="M31.65 21.15c2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5-4.5 2.02-4.5 4.5 2.02 4.5 4.5 4.5Zm0-6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgImageLine);
const Memo = memo(ForwardRef);
export default Memo;
