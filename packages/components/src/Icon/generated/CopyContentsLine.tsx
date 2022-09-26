import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgCopycontentsLine = (
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
      d="M36.61 10h-1.65c.02-.11.04-.22.04-.34 0-1.75-.62-3.4-1.74-4.65C32.11 3.74 30.52 3 28.87 3H12.78c-1.81 0-3.58.82-4.84 2.23C6.69 6.62 6 8.46 6 10.41v19.93c0 1.75.62 3.4 1.74 4.65 1.14 1.28 2.74 2.01 4.39 2.02H13v1.07c0 3.82 2.87 6.93 6.39 6.93h17.22c3.52 0 6.39-3.11 6.39-6.93V16.93c0-3.82-2.87-6.93-6.39-6.93ZM13 16.93V34h-.87c-.8 0-1.57-.36-2.16-1.02-.62-.69-.97-1.66-.98-2.65V10.41c0-1.19.43-2.35 1.17-3.17.71-.79 1.64-1.23 2.62-1.24h16.09c.8 0 1.57.36 2.16 1.02.62.69.97 1.66.98 2.65 0 .11.02.22.04.33H19.39C15.87 10 13 13.11 13 16.93Zm27 21.14c0 2.17-1.52 3.93-3.39 3.93H19.39C17.52 42 16 40.24 16 38.07V16.93c0-2.17 1.52-3.93 3.39-3.93h17.22c1.87 0 3.39 1.76 3.39 3.93v21.14Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCopycontentsLine);
const Memo = memo(ForwardRef);
export default Memo;
