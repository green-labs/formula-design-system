import { SVGProps, Ref, forwardRef, memo } from "react";
import type { IconProps } from "../types";
import { IconSize } from "../types";

const SvgSeemoreLineRegular = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-1a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-3 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-1a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSeemoreLineRegular);
const Memo = memo(ForwardRef);
export default Memo;