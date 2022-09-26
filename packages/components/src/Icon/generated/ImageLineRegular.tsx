import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgImageLineRegular = (
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
      d="M39.894 6h-30c-3.39 0-6.15 2.76-6.15 6.15v24c0 3.39 2.76 6.15 6.15 6.15h30c3.39 0 6.15-2.76 6.15-6.15v-24c0-3.39-2.76-6.15-6.15-6.15Zm-30 3.3h30c1.57 0 2.85 1.28 2.85 2.85v18.98l-4.19-3.5a4.744 4.744 0 0 0-3.19-1.07c-1.16.05-2.25.54-3.08 1.36l-2.16 2.16-8.11-7.14a4.605 4.605 0 0 0-3.11-1.32c-1.21-.02-2.33.38-3.16 1.12l-8.7 6.97V12.15c0-1.57 1.28-2.85 2.85-2.85Zm-2.85 26.85v-2.21l10.83-8.68c.26-.23.58-.37.94-.34.34 0 .67.15.91.39.03.02.05.05.08.07l7.99 7.03-6.58 6.58H9.894c-1.57 0-2.85-1.28-2.85-2.85v.01ZM39.894 39h-14.02l8.75-8.75c.24-.24.56-.38.89-.4.34-.02.67.09.93.31l6.3 5.26v.73c0 1.57-1.28 2.85-2.85 2.85Z"
      fill={fill}
    />
    <path
      d="M32.394 21.15c2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5-4.5 2.02-4.5 4.5 2.02 4.5 4.5 4.5Zm0-6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgImageLineRegular);
const Memo = memo(ForwardRef);
export default Memo;
