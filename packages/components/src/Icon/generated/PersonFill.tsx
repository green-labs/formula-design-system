import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgPersonFill = (
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
      d="M30.76 8.66C29.17 6.94 26.95 6 24.5 6c-2.45 0-4.69.94-6.28 2.65-1.6 1.73-2.38 4.07-2.2 6.6.36 4.99 4.16 8.19 8.47 8.19 4.31 0 8.1-3.19 8.47-8.19.19-2.51-.6-4.85-2.21-6.59h.01ZM39.23 42H8.77c-.4 0-.79-.08-1.16-.24-.36-.16-.68-.4-.94-.69-.56-.65-.79-1.53-.62-2.42.73-3.9 3.01-7.18 6.59-9.48C15.82 27.13 19.85 26 23.99 26s8.17 1.12 11.35 3.17c3.58 2.3 5.86 5.58 6.59 9.48.17.89-.06 1.78-.62 2.43-.26.3-.58.53-.94.69-.36.16-.76.24-1.16.24l.02-.01Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPersonFill);
const Memo = memo(ForwardRef);
export default Memo;
