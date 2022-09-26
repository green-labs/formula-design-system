import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgSendplaneFill = (
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
      d="m40.504 21.801-.013-.005L8.571 8.14a1.816 1.816 0 0 0-1.712.167A1.9 1.9 0 0 0 6 9.895l2 9.733a1.85 1.85 0 0 0 1.505 1.816l15.955 2.32a.308.308 0 0 1 0 .606L9.505 26.69A1.85 1.85 0 0 0 8 28.505L6 38.24a1.817 1.817 0 0 0 .816 1.517 1.845 1.845 0 0 0 1.753.16L40.49 26.34l.015-.006a2.467 2.467 0 0 0 0-4.533Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSendplaneFill);
const Memo = memo(ForwardRef);
export default Memo;
