import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgCopycontentsFill = (
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
      d="M35 44H19c-1.591 0-3.117-.721-4.243-2.006C13.632 40.71 13 38.968 13 37.152V16.848c0-1.816.632-3.558 1.757-4.842C15.883 10.722 17.41 10 19 10h16c1.591 0 3.117.722 4.243 2.006C40.368 13.29 41 15.032 41 16.848v20.304c0 1.816-.632 3.558-1.757 4.842C38.117 43.28 36.59 44 35 44Z"
      fill={fill}
    />
    <path
      d="M18 7.5h18.114A6.761 6.761 0 0 0 29.75 3h-17A6.75 6.75 0 0 0 6 9.75v21a6.761 6.761 0 0 0 4.5 6.364V15A7.5 7.5 0 0 1 18 7.5Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCopycontentsFill);
const Memo = memo(ForwardRef);
export default Memo;
