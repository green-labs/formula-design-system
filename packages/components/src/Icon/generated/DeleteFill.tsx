import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgDeleteFill = (
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
      d="M38.28 10.7c-7.6-7.6-19.98-7.6-27.58 0-7.6 7.6-7.6 19.98 0 27.58 7.6 7.6 19.98 7.6 27.58 0 7.6-7.6 7.6-19.98 0-27.58Zm-9.55 20.15-4.24-4.24-4.24 4.24a1.499 1.499 0 1 1-2.12-2.12l4.24-4.24-4.24-4.24a1.499 1.499 0 1 1 2.12-2.12l4.24 4.24 4.24-4.24a1.499 1.499 0 1 1 2.12 2.12l-4.24 4.24 4.24 4.24a1.499 1.499 0 1 1-2.12 2.12Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgDeleteFill);
const Memo = memo(ForwardRef);
export default Memo;
