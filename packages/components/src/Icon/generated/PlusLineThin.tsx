import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgPlusLineThin = (
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
      d="M10.5 25.5h12v12c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-12h12c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-12v-12c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v12h-12c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPlusLineThin);
const Memo = memo(ForwardRef);
export default Memo;