import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgPlusCircleFill = (
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
      d="M24 4.5C13.248 4.5 4.5 13.248 4.5 24S13.248 43.5 24 43.5 43.5 34.752 43.5 24 34.752 4.5 24 4.5Zm7.5 21h-6v6a1.5 1.5 0 1 1-3 0v-6h-6a1.5 1.5 0 1 1 0-3h6v-6a1.5 1.5 0 1 1 3 0v6h6a1.5 1.5 0 1 1 0 3Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPlusCircleFill);
const Memo = memo(ForwardRef);
export default Memo;